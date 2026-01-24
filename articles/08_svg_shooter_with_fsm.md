---
title: "【JS】SVGシューティングをFSMで整理する｜DOMゲームを壊さない設計へ"
tags: ["JavaScript", "SVG", "FSM", "GameDev"]
---

# 🎮 SVGシューティングを FSM で整理する  
*— DOMゲームを「動く」から「設計できる」へ —*

前回の記事では、**Canvas を使わずに SVG + DOM 操作だけで  
シューティングゲームを完成**させました ✨

👉 自機・敵・弾・当たり判定・ゲームオーバー  
👉 **すべて DOM ノードとして制御**

しかし、実装が進むにつれて **ある違和感**が出てきます。

---

## ⚠️ 07版の限界

- ❌ `if (isGameOver)` が増殖する  
- ❌ 「開始前 / プレイ中 / 終了後」が混線する  
- ❌ 仕様追加で既存ロジックが壊れる  

👉 原因は明確です。  
**「状態（State）」がコード上で定義されていない**。

---

## 🧠 解決策：FSM（有限状態機械）

ゲームは本質的に **状態遷移の集合**です。

```
INIT → READY → PLAY → GAME_OVER → RESTART
```

そこで今回は、  
🎯 **SVGシューティングに FSM（Finite State Machine）を導入**します。

---

## 🧩 状態設計（State 定義）

```js
const State = {
  INIT: "init",        // 🔧 初期化
  READY: "ready",      // ⏳ 開始待ち
  PLAY: "play",        // 🎮 プレイ中
  GAME_OVER: "game_over" // ☠ 終了
};

let currentState = State.INIT;
```

---

## 🔄 状態遷移関数（唯一の入口）

```js
function changeState(next) {
  console.log(`STATE: ${currentState} → ${next}`);
  currentState = next;
}
```

👉 **状態遷移を一本化**  
👉 ログだけでゲームの流れが追える 👀

---

## 🎮 メインループを FSM 化する

```js
function gameLoop() {
  switch (currentState) {
    case State.INIT:
      initGame();              // 🔧 初期化
      changeState(State.READY);
      break;

    case State.READY:
      // ⏳ スタート入力待ち
      break;

    case State.PLAY:
      updatePlayer();          // 🚀 自機
      updateEnemies();         // 👾 敵
      updateBullets();         // 💥 弾
      checkCollision();        // 🎯 衝突判定
      break;

    case State.GAME_OVER:
      // ☠ リスタート待ち
      break;
  }

  requestAnimationFrame(gameLoop);
}
```

✨ **if地獄、完全消滅**  
✨ 「今なにをしているゲームか」が一目で分かる

---

## ⌨️ 入力処理も状態で制御

```js
document.addEventListener("keydown", e => {
  if (currentState === State.READY && e.code === "Space") {
    changeState(State.PLAY);   // ▶ START
  }

  if (currentState === State.GAME_OVER && e.code === "KeyR") {
    changeState(State.INIT);   // 🔄 RESTART
  }
});
```

👉 **入力＝状態遷移トリガ**  
👉 バグりにくい 👍

---

## 🧠 FSM × SVG(DOM) の相性が良い理由

- 🧱 SVG要素は **存在 / 非存在 = 状態**
- 🧩 DOMは **構造を持ったオブジェクト**
- 🔁 FSMは **振る舞いの制御**

👉 Canvas より **設計が可視化しやすい**  
👉 教材・設計解説に向く ✍️

---

## 📐 全体構造イメージ

```
FSM
 ├─ 🔧 INIT        : 初期化
 ├─ ⏳ READY       : 開始待ち
 ├─ 🎮 PLAY        : 更新・衝突
 └─ ☠ GAME_OVER   : 停止・再開待ち
        │
        └─ SVG(DOM)
             ├─ 🚀 player
             ├─ 💥 bullets
             └─ 👾 enemies
```

---

## ✨ まとめ

- ✅ SVGシューティングは **FSMを入れると一気に設計になる**
- ✅ DOMゲームは **「状態 × 構造」** で考えると壊れない
- ✅ この構成は **AI制御・難易度制御** にも自然に拡張できる

---

## 🔮 次回予告（09_）

- 📈 FSM × 難易度スケーリング  
- 🤖 敵AIの状態分岐  
- 🧠 スコアに応じたゲーム挙動変化
