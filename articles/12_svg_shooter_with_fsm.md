---
title: "12.【JS】SVGシューティングをFSMで整理する｜DOMゲームを壊さないための中間設計"
tags: ["JavaScript", "SVG", "FSM", "GameDev"]
---

# 🎮 SVGシューティングを FSM で整理する  
— DOMゲームを「動く」から「壊さずに育てる」へ —

⚠️ **この記事は「完成版」ではありません。**

最初に位置づけをはっきりさせます。

- **07_**：SVG + DOM だけで「とりあえず動くゲーム」を作る  
- **08_（この記事）**：そのゲームを *壊れない形に整理* する  
- **09_**：整理した構造に *難易度・敵AI* を足す  
- **10_**：**完成版（遊ぶだけならここだけ見ればOK）**

👉  
**ゲームを遊びたい人は 10_ へ直行してください。**  
この記事は「作る側のための整理メモ」です。

---

## 07_ では何をやったか

07_ では、Canvas を使わずに

- SVG
- DOM 操作
- requestAnimationFrame

だけでシューティングゲームを成立させました。

- 🚀 自機
- 👾 敵
- 💥 弾
- 🎯 当たり判定
- ☠ ゲームオーバー

👉 **ちゃんと動くことは確認できた**

---

## でも、作っていると違和感が出る

機能を足し始めると、コードにこういうものが増えてきます。

- `if (isGameOver)`
- `if (!started)`
- `if (paused)`
- `if (canInput)`

---

## ⚠️ 07_ の限界

- ❌ if が増え続ける
- ❌ 開始前 / プレイ中 / 終了後が混線する
- ❌ 仕様追加で別の挙動が壊れる

👉 原因ははっきりしています。

> **ゲームの「状態」が  
> コード上で明示されていない**

---

## 🧠 解決策：FSM（有限状態機械）

この記事でやることはシンプルです。

> **ゲームが今どの状態かを  
> 1つの変数で表す**

難しい理論は使いません。

---

## 🧩 状態定義

```js
const State = {
  INIT: "init",         // 初期化
  READY: "ready",       // 開始待ち
  PLAY: "play",         // プレイ中
  GAME_OVER: "game_over"
};

let currentState = State.INIT;
```

👉 「今どの状態か」を必ずここで管理します。

---

## 🔄 状態遷移は1か所に集める

```js
function changeState(next) {
  console.log(`STATE: ${currentState} → ${next}`);
  currentState = next;
}
```

- どこから
- どこへ
- いつ移動したか

👉 ログを見るだけでゲームの流れが分かります。

---

## 🎮 メインループを FSM 前提で整理する

07_ では if が散らばっていましたが、  
FSM を入れるとこう書けます。

```js
function gameLoop() {
  switch (currentState) {

    case State.INIT:
      initGame();
      changeState(State.READY);
      break;

    case State.READY:
      // スタート入力待ち
      break;

    case State.PLAY:
      updatePlayer();
      updateEnemies();
      updateBullets();
      checkCollision();
      break;

    case State.GAME_OVER:
      // リスタート待ち
      break;
  }

  requestAnimationFrame(gameLoop);
}
```

✨ 今「何をしているゲームか」が一目で分かる  
✨ if 地獄から抜け出せる

---

## ⌨️ 入力処理も状態で意味を変える

```js
document.addEventListener("keydown", e => {

  if (currentState === State.READY && e.code === "Space") {
    changeState(State.PLAY);   // 開始
  }

  if (currentState === State.GAME_OVER && e.code === "KeyR") {
    changeState(State.INIT);   // 再スタート
  }
});
```

👉 入力は「状態遷移のきっかけ」になる  
👉 無駄なフラグ管理が消える

---

## 🧠 SVG(DOM) と FSM は相性がいい

- SVG要素は「ある / ない」が明確
- DOMは構造を持つ
- FSMは振る舞いを整理する

👉 Canvas より **設計を説明しやすい**  
👉 教材向き

---

## 📐 全体構造（この段階）

```
Game FSM
 ├─ INIT
 ├─ READY
 ├─ PLAY
 └─ GAME_OVER
      │
      └─ SVG(DOM)
           ├─ player
           ├─ bullets
           └─ enemies
```

---

## ✨ この段階で得られるもの

- 見た目はまだ地味
- 07_ とほぼ変わらない

でも、

- 壊れにくくなった
- 追加仕様の置き場が見えた
- 次に何を足すかが整理された

---

## 🔮 次（09_）でやること

- 📈 スコア・時間で難易度を変える
- 🤖 敵の行動を状態で分ける
- 「FSMを入れた意味」を体感できるようにする

---

## 🎯 まとめ（正直版）

- この記事は **遊ばせるための記事ではない**
- **作る側が迷子にならないための記事**
- ゲームとして遊びたいなら **10_ だけ見ればOK**

FSMは目的ではありません。  
**ゲームを壊さずに作り続けるための道具**です。
