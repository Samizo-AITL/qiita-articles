---
title: "【JS】SVGシューティング完成版｜FSM設計で『壊れないゲーム構造』を作る"
tags: ["JavaScript", "SVG", "FSM", "GameDev"]
---

# 🎮 SVGシューティング完成版  
— FSM設計で「ちゃんと遊べて、ちゃんと拡張できる」構造を作る —

本記事は **SVG + JavaScript だけ**で作ったシューティングゲームの完成版です。  
Canvas は使っていません。

ポイントは見た目ではなく **設計** です。

- FSM（有限状態機械）でゲーム全体を制御
- 難易度・敵挙動を FSM から分離
- 機能追加しても壊れない構造

---

## ▶ デモ（完成版）

そのまま遊べる完成デモ  
https://samizo-aitl.github.io/qiita-articles/demos/svg-shooter-fsm/

対応内容：

- 🎮 キーボード操作
- 📱 スマホ操作対応
- 🔁 リスタート
- ⏸ PAUSE（FSM制御）
- 📈 時間・スコアによる難易度変化

---

## 🎯 ゲーム仕様

- 🚀 自機左右移動
- 💥 連射ショット（クールダウン制御）
- 👾 敵ランダム出現
- 🎯 当たり判定
- ❤️ ライフ制
- ☠ ゲームオーバー
- 🔄 リスタート
- ⏸ 一時停止（FSM）

---

## 🧠 全体構造（FSM完成形）

```
Game FSM
├─ INIT        : 初期化
├─ READY       : 開始待ち
├─ PLAY        : ゲーム進行
│   ├─ Difficulty FSM   : 難易度制御（EASY / NORMAL / HARD）
│   ├─ Enemy FSM        : 敵の状態遷移（SPAWN → MOVE → ATTACK → DEAD）
│   ├─ Input Gate       : 入力の有効 / 無効を制御
│   └─ Collision        : 当たり判定
├─ PAUSE       : 一時停止
└─ GAME_OVER   : 終了
```

FSM は **「何をするか」ではなく「してよいか」を決める層**です。

---

## 🧩 メインループ（FSM前提）

```js
function tick() {
  if (game.state === State.PLAY) {
    updatePlayer();
    updateEnemies();
    updateBullets();
    checkCollision();
    updateDifficulty();
  }

  renderHUD();
  requestAnimationFrame(tick);
}
```

---

## 🎯 まとめ

- SVG + DOM だけでもゲームは作れる
- FSMを入れると「壊れない構造」になる
- 設計しておけば、あとから育てられる

「今動く」より「あとで壊れない」  
それが、この完成版の一番の価値です。
