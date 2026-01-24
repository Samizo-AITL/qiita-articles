---
title: "【JS】SVGシューティング完成版｜FSM設計で「ちゃんと遊べるゲーム」を作る"
tags: ["JavaScript", "SVG", "FSM", "GameDev"]
---

# 🎮 SVGシューティング完成版  
*— FSM設計で「ちゃんと遊べるゲーム」を作る —*

ここまでの記事では、

- 🧠 FSM（有限状態機械）でゲームを整理し
- 📈 難易度と敵AIを状態として拡張してきました

今回はついに――  
**「設計を全部載せた完成ゲーム」を出します。**

---

## ▶ デモ（完成版）

👉 **そのまま遊べる完成デモ**  
```
/qiita-articles/demos/svg-shooter-fsm/
```

- 🎮 キーボード操作
- 📱 スマホ操作対応
- 🔁 リスタート可能
- 📈 時間とスコアで難易度上昇

---

## 🎯 ゲーム仕様（完成版）

- 🚀 自機移動（左右）
- 💥 連射ショット
- 👾 敵ランダム出現
- 🎯 当たり判定
- ❤️ ライフ制
- ☠ ゲームオーバー
- 🔄 リスタート

👉 **「デモ」じゃなく「ゲーム」**

---

## 🧠 全体構造（完成形）

```
Game FSM
 ├─ INIT        🔧 初期化
 ├─ READY       ⏳ 開始待ち
 ├─ PLAY        🎮 ゲーム進行
 │    ├─ Difficulty FSM 📈
 │    ├─ Enemy FSM 👾
 │    └─ Collision 🎯
 └─ GAME_OVER   ☠ 終了
```

---

## 🧩 メインループ（完成版）

```js
function gameLoop() {
  if (state === State.PLAY) {
    updatePlayer();      // 🚀
    updateEnemies();     // 👾
    updateBullets();     // 💥
    checkCollision();    // 🎯
    updateDifficulty(); // 📈
  }

  renderHUD();
  requestAnimationFrame(gameLoop);
}
```

👉 FSM が **ゲームの背骨**  
👉 描画・入力・AIが絡まらない

---

## 👾 敵出現ロジック（完成用）

```js
function spawnEnemy() {
  const enemy = createEnemy();
  configureEnemy(enemy); // 難易度反映 📈
  enemies.push(enemy);
}
```

- EASY：🐢 遅い・少ない
- HARD：⚡ 速い・多い・撃つ

---

## 🕹 操作方法

- ← / → or A / D：移動
- Space：ショット
- R：リスタート
- 📱 画面ボタン対応

---

## ✨ このゲームでやっていること

- ❌ Canvas 不使用
- ✅ SVG + DOM だけ
- ✅ FSM による設計
- ✅ 拡張可能な構造

👉 **教材としても、ゲームとしても成立**

---

## 🧠 この先できる拡張

- 🤖 自動プレイAI
- 📊 リプレイ保存
- 🧠 学習型難易度調整
- 🎨 スキン差し替え
- 🕹 コントローラ対応

---

## 🎯 まとめ

- 🎮 SVG + DOM だけで「ちゃんとしたゲーム」は作れる
- 🧠 FSM を入れると **壊れない**
- 📈 設計すれば、あとからいくらでも育つ
