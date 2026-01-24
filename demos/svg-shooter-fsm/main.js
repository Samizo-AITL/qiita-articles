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
    PAUSE: "pause",          // ★追加：一時停止
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
  // Game state
  // -----------------------------
  const game = {
    state: State.INIT,
    difficulty: Difficulty.EASY,
    score: 0,
    lives: 3,

    t: 0,             // total frames
    playT: 0,         // frames since PLAY start
    spawnAcc: 0,      // spawn accumulator
    shotCool: 0,      // player shot cooldown

    player: {
      x: W / 2,
      y: H - 40,
      r: 9,
      speed: 4
    },

    bullets: [],
    enemies: [],
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

  // キーボード入力は FSM に従って分離する
  document.addEventListener("keydown", (e) => {
    // ★ PLAY <-> PAUSE（Pキーで一時停止/再開）
    if (e.code === "KeyP") {
      if (game.state === State.PLAY) {
        changeState(State.PAUSE);
      } else if (game.state === State.PAUSE) {
        changeState(State.PLAY);
      }
      return;
    }

    // READY → PLAY は開始専用（Space をショットと共有しない）
    if (game.state === State.READY && e.code === "Space") {
      changeState(State.PLAY);
      return;
    }

    // リスタートは READY / GAME_OVER から
    if (e.code === "KeyR") {
      if (game.state === State.GAME_OVER || game.state === State.READY) {
        changeState(State.INIT);
      }
      return;
    }

    // PLAY 中のみ操作を受け付ける（PAUSE中は入力を止める）
    if (game.state !== State.PLAY) return;

    if (e.code === "ArrowLeft" || e.code === "KeyA") setKey("left", true);
    if (e.code === "ArrowRight" || e.code === "KeyD") setKey("right", true);
    if (e.code === "Space") setKey("shot", true);
  });

  document.addEventListener("keyup", (e) => {
    // PLAY 中のみキーを戻す（PAUSEでキー状態が残らないようにするのも有効）
    if (game.state !== State.PLAY) return;

    if (e.code === "ArrowLeft" || e.code === "KeyA") setKey("left", false);
    if (e.code === "ArrowRight" || e.code === "KeyD") setKey("right", false);
    if (e.code === "Space") setKey("shot", false);
  });

  // mobile: hold buttons
  const hold = (btn, onDown, onUp) => {
    const down = (e) => { e.preventDefault(); onDown(); };
    const up = (e) => { e.preventDefault(); onUp(); };
    btn.addEventListener("pointerdown", down);
    btn.addEventListener("pointerup", up);
    btn.addEventListener("pointercancel", up);
    btn.addEventListener("pointerleave", up);
  };

  // モバイル操作も FSM に従う（READY のショットボタン＝開始）
  hold(btnLeft, () => {
    if (game.state !== State.PLAY) return;
    setKey("left", true);
  }, () => setKey("left", false));

  hold(btnRight, () => {
    if (game.state !== State.PLAY) return;
    setKey("right", true);
  }, () => setKey("right", false));

  hold(btnShot, () => {
    if (game.state === State.READY) {
      changeState(State.PLAY);
      return;
    }
    if (game.state !== State.PLAY) return;
    setKey("shot", true);
  }, () => setKey("shot", false));

  btnRestart.addEventListener("click", () => changeState(State.INIT));

  // -----------------------------
  // Setup / reset
  // -----------------------------
  function clearGroup(g) {
    while (g.firstChild) g.removeChild(g.firstChild);
  }

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
  }

  function resetGameCore() {
    game.score = 0;
    game.lives = 3;
    game.difficulty = Difficulty.EASY;
    game.t = 0;
    game.playT = 0;
    game.spawnAcc = 0;
    game.shotCool = 0;

    game.player.x = W / 2;

    game.bullets = [];
    game.enemies = [];

    // 入力状態も初期化（重要）
    key.left = false;
    key.right = false;
    key.shot = false;

    clearGroup(gBullets);
    clearGroup(gEnemies);
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
      game.ui.textCenter.textContent = "SPACE で開始 / R でリセット";
      return;
    }

    if (next === State.PLAY) {
      game.ui.textCenter.textContent = "";
      // ※playTはPLAY突入時にリセットする設計だと「再開で時間が戻る」ので
      //   PAUSE解除時はここを叩かない（KeyPでPAUSE→PLAYに戻すのでここは通る）
      //   ただし、PAUSE解除でplayTを維持したい場合は下の1行を削除してください。
      // game.playT = 0;

      // ★PAUSE解除でキーが残って暴発しないようにする
      key.left = false;
      key.right = false;
      key.shot = false;
      return;
    }

    if (next === State.PAUSE) {
      game.ui.textCenter.textContent = "PAUSE (P で再開)";
      // ★停止時に入力を切る（押しっぱなし対策）
      key.left = false;
      key.right = false;
      key.shot = false;
      return;
    }

    if (next === State.GAME_OVER) {
      game.ui.textCenter.textContent = "GAME OVER  (R で再開)";
      // ★ゲームオーバー時も入力を切る
      key.left = false;
      key.right = false;
      key.shot = false;
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
  // Bullets
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
  // Enemies (Enemy FSM per unit)
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
    }

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

    // bullets vs enemies
    for (let bi = game.bullets.length - 1; bi >= 0; bi--) {
      const b = game.bullets[bi];

      for (let ei = game.enemies.length - 1; ei >= 0; ei--) {
        const e = game.enemies[ei];
        if (e.kind === "proj") continue;
        if (e.state === EnemyState.DEAD) continue;

        const hit = dist2(b.x, b.y, e.x, e.y) < (b.r + 10) * (b.r + 10);
        if (hit) {
          if (b.node && b.node.parentNode) b.node.parentNode.removeChild(b.node);
          game.bullets.splice(bi, 1);

          e.hp -= 1;
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

    // enemy body vs player
    for (const e of game.enemies) {
      if (e.kind === "proj") continue;
      if (e.state === EnemyState.DEAD) continue;

      const hit = dist2(p.x, p.y, e.x, e.y) < (p.r + 10) * (p.r + 10);
      if (hit) {
        e._dead = true;
        damagePlayer();
      }
    }

    // enemy projectiles vs player
    for (const e of game.enemies) {
      if (e.kind !== "proj") continue;
      const hit = dist2(p.x, p.y, e.x, e.y) < (p.r + e.r + 2) * (p.r + e.r + 2);
      if (hit) {
        e._dead = true;
        damagePlayer();
      }
    }
  }

  function damagePlayer() {
    if (game._justHit) return;
    game._justHit = true;

    game.lives -= 1;
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

    game._justHit = false;
  }

  // -----------------------------
  // Main loop
  // -----------------------------
  function tick() {
    game.t++;

    // ★PLAYのときだけ世界が進む（PAUSE中は完全停止）
    if (game.state === State.PLAY) {
      game.playT++;
      updateDifficulty();
      updatePlayer();
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
