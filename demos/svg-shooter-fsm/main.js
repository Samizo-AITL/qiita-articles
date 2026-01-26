(() => {
  "use strict";

  // -----------------------------
  // SVG helpers
  // -----------------------------
  const SVG_NS = "http://www.w3.org/2000/svg";
  const $ = (sel) => document.querySelector(sel);

  function el(name, attrs = {}) {
    const n = document.createElementNS(SVG_NS, name);
    for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, String(v));
    return n;
  }

  // -----------------------------
  // Game constants
  // -----------------------------
  const W = 360, H = 480;

  const State = Object.freeze({
    INIT: "init",
    READY: "ready",
    PLAY: "play",
    PAUSE: "pause",
    GAME_OVER: "game_over"
  });

  const Difficulty = Object.freeze({
    EASY: "easy",
    NORMAL: "normal",
    HARD: "hard"
  });

  const EnemyState = Object.freeze({
    SPAWN: "spawn",
    MOVE: "move",
    ATTACK: "attack",
    DEAD: "dead"
  });

  const BossState = Object.freeze({
    WAIT: "wait",
    SPAWN: "spawn",
    FIGHT: "fight",
    RAGE: "rage",
    DEAD: "dead"
  });

  // -----------------------------
  // DOM refs
  // -----------------------------
  const svg = $("#game");
  const gEnemies = $("#layer-enemies");
  const gBullets = $("#layer-bullets");
  const gPlayer = $("#layer-player");
  const gUI = $("#layer-ui");

  // mobile buttons
  const btnLeft = $("#btn-left");
  const btnRight = $("#btn-right");
  const btnShot = $("#btn-shot");
  const btnRestart = $("#btn-restart");

  // -----------------------------
  // Audio (minimal)
  // -----------------------------
  const audio = {
    seShot: new Audio("shot.mp3"),
    seHit: new Audio("hit.mp3"),
    seBoss: new Audio("boss.mp3"),
    bgm: new Audio("bgm.mp3"),
    bossBgm: new Audio("boss_bgm.mp3"),
    unlocked: false
  };
  audio.bgm.loop = true;
  audio.bossBgm.loop = true;
  audio.bgm.volume = 0.25;
  audio.bossBgm.volume = 0.28;

  function playSE(a) {
    if (!audio.unlocked) return;
    try {
      a.currentTime = 0;
      a.play();
    } catch {}
  }
  function startBGM(which) {
    if (!audio.unlocked) return;
    try {
      audio.bgm.pause();
      audio.bossBgm.pause();
      if (which === "boss") audio.bossBgm.play();
      else audio.bgm.play();
    } catch {}
  }
  // ブラウザ制約：ユーザー操作でアンロック
  function unlockAudioOnce() {
    if (audio.unlocked) return;
    audio.unlocked = true;
    // いったん無音再生で解錠を狙う（環境依存）
    try {
      audio.bgm.play().then(() => audio.bgm.pause()).catch(() => {});
      audio.bossBgm.play().then(() => audio.bossBgm.pause()).catch(() => {});
    } catch {}
  }
  document.addEventListener("pointerdown", unlockAudioOnce, { once: true });
  document.addEventListener("keydown", unlockAudioOnce, { once: true });

  // -----------------------------
  // Game state
  // -----------------------------
  const game = {
    state: State.INIT,
    difficulty: Difficulty.EASY,
    score: 0,
    lives: 3,

    t: 0,
    playT: 0,
    spawnAcc: 0,
    shotCool: 0,

    // ★無敵フレーム（被弾直後の多段ヒット対策）
    invFrames: 0,

    player: {
      x: W / 2,
      y: H - 40,
      r: 9,
      speed: 4
    },

    bullets: [],
    enemies: [],

    boss: {
      state: BossState.WAIT,
      alive: false,
      x: W / 2,
      y: 70,
      w: 120,
      h: 46,
      vx: 1.3,
      hp: 0,
      hpMax: 0,
      cool: 0,
      phase: 1,
      node: null,
      hpBarBg: null,
      hpBar: null
    },

    ui: {
      textTop: null,
      textCenter: null
    }
  };

  // -----------------------------
  // Input
  // -----------------------------
  const key = {
    left: false,
    right: false,
    shot: false
  };
  function setKey(name, v) { key[name] = v; }

  document.addEventListener("keydown", (e) => {
    // PLAY <-> PAUSE
    if (e.code === "KeyP") {
      if (game.state === State.PLAY) changeState(State.PAUSE);
      else if (game.state === State.PAUSE) changeState(State.PLAY);
      return;
    }

    // READY -> PLAY
    if (game.state === State.READY && e.code === "Space") {
      changeState(State.PLAY);
      return;
    }

    // restart
    if (e.code === "KeyR") {
      if (game.state === State.GAME_OVER || game.state === State.READY) changeState(State.INIT);
      return;
    }

    if (game.state !== State.PLAY) return;

    if (e.code === "ArrowLeft" || e.code === "KeyA") setKey("left", true);
    if (e.code === "ArrowRight" || e.code === "KeyD") setKey("right", true);
    if (e.code === "Space") setKey("shot", true);
  });

  document.addEventListener("keyup", (e) => {
    if (game.state !== State.PLAY) return;

    if (e.code === "ArrowLeft" || e.code === "KeyA") setKey("left", false);
    if (e.code === "ArrowRight" || e.code === "KeyD") setKey("right", false);
    if (e.code === "Space") setKey("shot", false);
  });

  const hold = (btn, onDown, onUp) => {
    const down = (e) => { e.preventDefault(); onDown(); };
    const up = (e) => { e.preventDefault(); onUp(); };
    btn.addEventListener("pointerdown", down);
    btn.addEventListener("pointerup", up);
    btn.addEventListener("pointercancel", up);
    btn.addEventListener("pointerleave", up);
  };

  hold(btnLeft, () => { if (game.state === State.PLAY) setKey("left", true); }, () => setKey("left", false));
  hold(btnRight, () => { if (game.state === State.PLAY) setKey("right", true); }, () => setKey("right", false));

  hold(btnShot, () => {
    if (game.state === State.READY) { changeState(State.PLAY); return; }
    if (game.state !== State.PLAY) return;
    setKey("shot", true);
  }, () => setKey("shot", false));

  btnRestart.addEventListener("click", () => changeState(State.INIT));

  // -----------------------------
  // Setup / reset
  // -----------------------------
  function clearGroup(g) { while (g.firstChild) g.removeChild(g.firstChild); }

  function initUI() {
    clearGroup(gUI);

    const top = el("text", {
      x: 10, y: 20,
      "font-size": 12,
      fill: "#e7e7e7",
      "font-family": "system-ui, sans-serif"
    });

    const center = el("text", {
      x: W / 2, y: H / 2,
      "text-anchor": "middle",
      "font-size": 18,
      fill: "#e7e7e7",
      "font-family": "system-ui, sans-serif"
    });

    gUI.appendChild(top);
    gUI.appendChild(center);

    game.ui.textTop = top;
    game.ui.textCenter = center;
  }

  function initPlayer() {
    clearGroup(gPlayer);

    const ship = el("polygon", {
      points: `${game.player.x},${game.player.y - 12} ${game.player.x - 10},${game.player.y + 10} ${game.player.x + 10},${game.player.y + 10}`,
      fill: "#d6f4ff",
      stroke: "rgba(255,255,255,.35)",
      "stroke-width": 1
    });
    ship.id = "playerShip";
    gPlayer.appendChild(ship);
  }

  function syncPlayerShape() {
    const ship = $("#playerShip");
    if (!ship) return;
    const x = game.player.x, y = game.player.y;
    ship.setAttribute("points", `${x},${y - 12} ${x - 10},${y + 10} ${x + 10},${y + 10}`);
    // ★無敵中は点滅（見える化）
    ship.setAttribute("opacity", game.invFrames > 0 ? ((game.t % 6) < 3 ? "0.35" : "1") : "1");
  }

  function resetGameCore() {
    game.score = 0;
    game.lives = 3;
    game.difficulty = Difficulty.EASY;
    game.t = 0;
    game.playT = 0;
    game.spawnAcc = 0;
    game.shotCool = 0;
    game.invFrames = 0;

    game.player.x = W / 2;

    game.bullets = [];
    game.enemies = [];

    key.left = false;
    key.right = false;
    key.shot = false;

    clearGroup(gBullets);
    clearGroup(gEnemies);

    resetBoss();
  }

  // -----------------------------
  // Boss
  // -----------------------------
  function resetBoss() {
    const b = game.boss;
    b.state = BossState.WAIT;
    b.alive = false;
    b.x = W / 2;
    b.y = 70;
    b.vx = 1.3;
    b.hp = 0;
    b.hpMax = 0;
    b.cool = 0;
    b.phase = 1;

    if (b.node && b.node.parentNode) b.node.parentNode.removeChild(b.node);
    if (b.hpBarBg && b.hpBarBg.parentNode) b.hpBarBg.parentNode.removeChild(b.hpBarBg);
    if (b.hpBar && b.hpBar.parentNode) b.hpBar.parentNode.removeChild(b.hpBar);

    b.node = null;
    b.hpBarBg = null;
    b.hpBar = null;
  }

  function spawnBoss() {
    const b = game.boss;
    b.state = BossState.SPAWN;
    b.alive = true;
    b.hpMax = 600;
    b.hp = b.hpMax;
    b.phase = 1;
    b.cool = 30;

    // body
    const body = el("rect", {
      x: b.x - b.w / 2,
      y: -80,
      width: b.w,
      height: b.h,
      rx: 10,
      fill: "#9a7bff",
      stroke: "rgba(255,255,255,.25)",
      "stroke-width": 1.2
    });
    body.id = "bossBody";
    gEnemies.appendChild(body);
    b.node = body;

    // HP bar (top)
    const bg = el("rect", { x: 10, y: 30, width: W - 20, height: 8, rx: 4, fill: "rgba(255,255,255,.18)" });
    const bar = el("rect", { x: 10, y: 30, width: W - 20, height: 8, rx: 4, fill: "#ffffff" });
    gUI.appendChild(bg);
    gUI.appendChild(bar);
    b.hpBarBg = bg;
    b.hpBar = bar;

    playSE(audio.seBoss);
    startBGM("boss");
  }

  function bossShoot(pattern) {
    const b = game.boss;
    const shots = [];

    if (pattern === 1) {
      // 3-way
      shots.push({ vx: -0.9, vy: 3.0 });
      shots.push({ vx:  0.0, vy: 3.2 });
      shots.push({ vx:  0.9, vy: 3.0 });
    } else {
      // 5-way + faster (RAGE)
      shots.push({ vx: -1.4, vy: 3.6 });
      shots.push({ vx: -0.7, vy: 3.8 });
      shots.push({ vx:  0.0, vy: 4.0 });
      shots.push({ vx:  0.7, vy: 3.8 });
      shots.push({ vx:  1.4, vy: 3.6 });
    }

    for (const s of shots) {
      const p = el("circle", { cx: b.x, cy: b.y + b.h / 2, r: 3, fill: "#ffd27a" });
      gEnemies.appendChild(p);
      game.enemies.push({
        kind: "bproj",
        x: b.x,
        y: b.y + b.h / 2,
        vx: s.vx,
        vy: s.vy,
        r: 3,
        state: "bproj",
        node: p
      });
    }
  }

  function updateBoss() {
    const b = game.boss;

    // 30秒経過で出現（好きに条件変更OK）
    if (!b.alive && b.state === BossState.WAIT) {
      if (game.playT >= 30 * 60) spawnBoss();
      return;
    }

    if (!b.alive) return;

    if (b.state === BossState.SPAWN) {
      // 上から降りてくる
      const targetY = 70;
      const yNow = parseFloat(b.node.getAttribute("y"));
      const yNext = yNow + 2.0;
      b.node.setAttribute("y", yNext);
      if (yNext >= targetY) {
        b.state = BossState.FIGHT;
        b.node.setAttribute("y", targetY);
      }
      // x追従（まだ動かない）
      b.node.setAttribute("x", b.x - b.w / 2);
      return;
    }

    if (b.state === BossState.DEAD) return;

    // phase
    if (b.hp <= b.hpMax * 0.35) b.state = BossState.RAGE;

    // move
    b.x += b.vx;
    if (b.x < b.w / 2 + 8) { b.x = b.w / 2 + 8; b.vx *= -1; }
    if (b.x > W - (b.w / 2 + 8)) { b.x = W - (b.w / 2 + 8); b.vx *= -1; }

    // shoot cooldown
    if (b.cool > 0) b.cool--;
    else {
      bossShoot(b.state === BossState.RAGE ? 2 : 1);
      b.cool = (b.state === BossState.RAGE) ? 18 : 28;
    }

    // sync node
    b.node.setAttribute("x", b.x - b.w / 2);
    b.node.setAttribute("y", b.y - b.h / 2);

    // hp bar
    const ratio = Math.max(0, b.hp / b.hpMax);
    b.hpBar.setAttribute("width", (W - 20) * ratio);
  }

  function killBoss() {
    const b = game.boss;
    b.state = BossState.DEAD;
    b.alive = false;

    if (b.node) b.node.setAttribute("opacity", "0.3");
    if (b.hpBarBg && b.hpBarBg.parentNode) b.hpBarBg.parentNode.removeChild(b.hpBarBg);
    if (b.hpBar && b.hpBar.parentNode) b.hpBar.parentNode.removeChild(b.hpBar);
    b.hpBarBg = null;
    b.hpBar = null;

    // 通常BGMに戻す（勝利音などに差し替えOK）
    startBGM("normal");

    game.score += 1000;
  }

  // -----------------------------
  // FSM
  // -----------------------------
  function changeState(next) {
    game.state = next;

    if (next === State.INIT) {
      initUI();
      resetGameCore();
      initPlayer();
      changeState(State.READY);
      return;
    }

    if (next === State.READY) {
      game.ui.textCenter.textContent = "SPACE で開始 / R でリセット / PでPAUSE";
      return;
    }

    if (next === State.PLAY) {
      game.ui.textCenter.textContent = "";
      // PAUSE解除で暴発しない
      key.left = false;
      key.right = false;
      key.shot = false;

      // ★通常BGM開始（ボス中はボスBGMが優先される）
      if (!game.boss.alive) startBGM("normal");
      return;
    }

    if (next === State.PAUSE) {
      game.ui.textCenter.textContent = "PAUSE (P で再開)";
      key.left = false;
      key.right = false;
      key.shot = false;
      // BGM止めたいなら：audio.bgm.pause(); audio.bossBgm.pause();
      return;
    }

    if (next === State.GAME_OVER) {
      game.ui.textCenter.textContent = "GAME OVER  (R で再開)";
      key.left = false;
      key.right = false;
      key.shot = false;
      try { audio.bgm.pause(); audio.bossBgm.pause(); } catch {}
      return;
    }
  }

  // -----------------------------
  // Difficulty
  // -----------------------------
  function updateDifficulty() {
    const s = game.score;
    const sec = game.playT / 60;

    if (s >= 900 || sec >= 45) game.difficulty = Difficulty.HARD;
    else if (s >= 350 || sec >= 20) game.difficulty = Difficulty.NORMAL;
    else game.difficulty = Difficulty.EASY;
  }

  function diffParams() {
    switch (game.difficulty) {
      case Difficulty.HARD:
        return { spawnPerSec: 2.4, enemySpeed: 2.6, fireChance: 0.018 };
      case Difficulty.NORMAL:
        return { spawnPerSec: 1.6, enemySpeed: 2.0, fireChance: 0.010 };
      default:
        return { spawnPerSec: 1.0, enemySpeed: 1.5, fireChance: 0.006 };
    }
  }

  // -----------------------------
  // Bullets (player)
  // -----------------------------
  function spawnBullet(px, py) {
    const b = {
      x: px,
      y: py,
      r: 3,
      vy: -6,
      node: el("circle", { cx: px, cy: py, r: 3, fill: "#ffffff" })
    };
    gBullets.appendChild(b.node);
    game.bullets.push(b);
  }

  function updateBullets() {
    for (let i = game.bullets.length - 1; i >= 0; i--) {
      const b = game.bullets[i];
      b.y += b.vy;
      b.node.setAttribute("cy", b.y);

      if (b.y < -10) {
        if (b.node && b.node.parentNode) b.node.parentNode.removeChild(b.node);
        game.bullets.splice(i, 1);
      }
    }
  }

  // -----------------------------
  // Enemies (includes enemy projectiles)
  // -----------------------------
  function createEnemy() {
    const { enemySpeed } = diffParams();
    const x = 20 + Math.random() * (W - 40);
    const y = -12;

    const body = el("rect", {
      x: x - 10, y: y - 10, width: 20, height: 20,
      rx: 4,
      fill: "#ffb6c1",
      stroke: "rgba(255,255,255,.25)",
      "stroke-width": 1
    });

    gEnemies.appendChild(body);

    return {
      x, y,
      vx: (Math.random() < 0.5 ? -1 : 1) * (0.4 + Math.random() * 0.6),
      vy: enemySpeed,
      hp: 1,
      state: EnemyState.SPAWN,
      canAttack: false,
      node: body
    };
  }

  function spawnEnemy() {
    // ★ボス出現中は雑魚を止めたいなら return してOK
    if (game.boss.alive) return;

    const e = createEnemy();
    if (game.difficulty === Difficulty.HARD) e.hp = 2;
    game.enemies.push(e);
  }

  function enemyShoot(enemy) {
    const p = el("circle", { cx: enemy.x, cy: enemy.y + 10, r: 2.5, fill: "#ffd27a" });
    gEnemies.appendChild(p);

    game.enemies.push({
      kind: "proj",
      x: enemy.x,
      y: enemy.y + 10,
      vy: 3.2,
      r: 2.5,
      state: "proj",
      node: p
    });
  }

  function updateEnemy(enemy) {
    // projectile subtype
    if (enemy.kind === "proj") {
      enemy.y += enemy.vy;
      enemy.node.setAttribute("cy", enemy.y);
      if (enemy.y > H + 10) {
        if (enemy.node && enemy.node.parentNode) enemy.node.parentNode.removeChild(enemy.node);
        enemy._dead = true;
      }
      return;
    }

    // boss projectile subtype
    if (enemy.kind === "bproj") {
      enemy.x += enemy.vx;
      enemy.y += enemy.vy;
      enemy.node.setAttribute("cx", enemy.x);
      enemy.node.setAttribute("cy", enemy.y);
      if (enemy.y > H + 10 || enemy.x < -10 || enemy.x > W + 10) {
        if (enemy.node && enemy.node.parentNode) enemy.node.parentNode.removeChild(enemy.node);
        enemy._dead = true;
      }
      return;
    }

    switch (enemy.state) {
      case EnemyState.SPAWN:
        enemy.state = EnemyState.MOVE;
        break;

      case EnemyState.MOVE: {
        enemy.y += enemy.vy;
        enemy.x += enemy.vx;

        if (enemy.x < 14) { enemy.x = 14; enemy.vx *= -1; }
        if (enemy.x > W - 14) { enemy.x = W - 14; enemy.vx *= -1; }

        const { fireChance } = diffParams();
        enemy.canAttack = Math.random() < fireChance;

        if (enemy.canAttack) enemy.state = EnemyState.ATTACK;
        break;
      }

      case EnemyState.ATTACK:
        enemyShoot(enemy);
        enemy.canAttack = false;
        enemy.state = EnemyState.MOVE;
        break;

      case EnemyState.DEAD:
        break;
    }

    enemy.node.setAttribute("x", enemy.x - 10);
    enemy.node.setAttribute("y", enemy.y - 10);

    if (enemy.y > H + 18) enemy._dead = true;
  }

  function updateEnemies() {
    const { spawnPerSec } = diffParams();
    game.spawnAcc += spawnPerSec / 60;
    while (game.spawnAcc >= 1) {
      spawnEnemy();
      game.spawnAcc -= 1;
    }

    for (const e of game.enemies) updateEnemy(e);

    for (let i = game.enemies.length - 1; i >= 0; i--) {
      const e = game.enemies[i];
      if (e._dead) {
        if (e.node && e.node.parentNode) e.node.parentNode.removeChild(e.node);
        game.enemies.splice(i, 1);
      }
    }
  }

  // -----------------------------
  // Player
  // -----------------------------
  function updatePlayer() {
    const p = game.player;

    if (key.left) p.x -= p.speed;
    if (key.right) p.x += p.speed;

    p.x = Math.max(16, Math.min(W - 16, p.x));

    if (game.shotCool > 0) game.shotCool--;

    if (key.shot && game.shotCool === 0) {
      spawnBullet(p.x, p.y - 14);
      game.shotCool = 7;
      playSE(audio.seShot);
    }

    if (game.invFrames > 0) game.invFrames--;

    syncPlayerShape();
  }

  // -----------------------------
  // Collision
  // -----------------------------
  function dist2(ax, ay, bx, by) {
    const dx = ax - bx, dy = ay - by;
    return dx * dx + dy * dy;
  }

  function checkCollision() {
    const p = game.player;
    const b = game.boss;

    // bullets vs enemies
    for (let bi = game.bullets.length - 1; bi >= 0; bi--) {
      const blt = game.bullets[bi];

      // vs boss
      if (b.alive && b.node) {
        const hitBoss =
          (blt.x >= b.x - b.w / 2 && blt.x <= b.x + b.w / 2) &&
          (blt.y >= b.y - b.h / 2 && blt.y <= b.y + b.h / 2);

        if (hitBoss) {
          if (blt.node && blt.node.parentNode) blt.node.parentNode.removeChild(blt.node);
          game.bullets.splice(bi, 1);

          b.hp -= 10;
          playSE(audio.seHit);
          if (b.hp <= 0) killBoss();
          continue;
        }
      }

      // vs normal enemies
      for (let ei = game.enemies.length - 1; ei >= 0; ei--) {
        const e = game.enemies[ei];
        if (e.kind === "proj" || e.kind === "bproj") continue;
        if (e.state === EnemyState.DEAD) continue;

        const hit = dist2(blt.x, blt.y, e.x, e.y) < (blt.r + 10) * (blt.r + 10);
        if (hit) {
          if (blt.node && blt.node.parentNode) blt.node.parentNode.removeChild(blt.node);
          game.bullets.splice(bi, 1);

          e.hp -= 1;
          playSE(audio.seHit);

          if (e.hp <= 0) {
            e.state = EnemyState.DEAD;
            e._dead = true;
            game.score += 50;
          } else {
            e.node.setAttribute("fill", "#ffd1dc");
          }
          break;
        }
      }
    }

    if (game.invFrames > 0) return; // ★無敵中は以降の被弾判定をスキップ

    // enemy body vs player
    for (const e of game.enemies) {
      if (e.kind === "proj" || e.kind === "bproj") continue;
      if (e.state === EnemyState.DEAD) continue;

      const hit = dist2(p.x, p.y, e.x, e.y) < (p.r + 10) * (p.r + 10);
      if (hit) {
        e._dead = true;
        damagePlayer();
      }
    }

    // enemy projectiles vs player
    for (const e of game.enemies) {
      if (e.kind !== "proj" && e.kind !== "bproj") continue;
      const hit = dist2(p.x, p.y, e.x, e.y) < (p.r + e.r + 2) * (p.r + e.r + 2);
      if (hit) {
        e._dead = true;
        damagePlayer();
      }
    }
  }

  function damagePlayer() {
    if (game.invFrames > 0) return;

    game.lives -= 1;
    game.invFrames = 60; // ★1秒無敵（60fps想定）

    if (game.lives <= 0) {
      changeState(State.GAME_OVER);
    }
  }

  // -----------------------------
  // UI
  // -----------------------------
  function renderHUD() {
    const sec = Math.floor(game.playT / 60);
    const top = `SCORE:${game.score}  LIFE:${game.lives}  DIFF:${game.difficulty.toUpperCase()}  TIME:${sec}s`;
    game.ui.textTop.textContent = top;
  }

  // -----------------------------
  // Main loop
  // -----------------------------
  function tick() {
    game.t++;

    if (game.state === State.PLAY) {
      game.playT++;
      updateDifficulty();
      updatePlayer();
      updateBoss();
      updateEnemies();
      updateBullets();
      checkCollision();
    }

    renderHUD();
    requestAnimationFrame(tick);
  }

  // boot
  changeState(State.INIT);
  requestAnimationFrame(tick);
})();
