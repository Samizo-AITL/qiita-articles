---
title: "【JS】FSMで難易度と敵AIを制御する｜SVGシューティング設計拡張"
tags: ["JavaScript", "SVG", "FSM", "GameDev", "AI"]
---

# 📈 FSMで難易度と敵AIを制御する  
*— SVGシューティングを「成長するゲーム」にする —*

前回の記事では、  
🎮 **SVGシューティングを FSM（有限状態機械）で整理**しました。

今回はその FSM を前提に、  
**ゲームらしさの核心**に踏み込みます。

---

## 🎯 今回やること

- 📈 難易度スケーリング（時間・スコア連動）
- 👾 敵AIの状態分岐（FSM in FSM）
- 🧠 if 文に戻らない拡張方法

---

## ⚠️ FSMが無いと何が起きるか

- 難易度調整が「数値いじり地獄」になる
- 敵の挙動が if / else で崩壊する
- 後から仕様追加できない

👉 **FSMは「拡張の土台」**です。

---

## 📊 難易度レベルを状態として定義

```js
const Difficulty = {
  EASY: "easy",
  NORMAL: "normal",
  HARD: "hard"
};

let difficulty = Difficulty.EASY;
```

---

## 📈 スコア連動で難易度遷移

```js
function updateDifficulty(score) {
  if (score > 1000) {
    difficulty = Difficulty.HARD;
  } else if (score > 500) {
    difficulty = Difficulty.NORMAL;
  }
}
```

👉 **「条件分岐」だが、  
FSMの *外* に増殖しないのが重要**

---

## 👾 敵AIも FSM で作る

### 敵の状態設計

```js
const EnemyState = {
  SPAWN: "spawn",     // ✨ 出現
  MOVE: "move",       // ➡ 移動
  ATTACK: "attack",   // 🔫 攻撃
  DEAD: "dead"        // ☠ 撃破
};
```

---

## 🔁 敵ごとの FSM ループ

```js
function updateEnemy(enemy) {
  switch (enemy.state) {
    case EnemyState.SPAWN:
      enemy.state = EnemyState.MOVE;
      break;

    case EnemyState.MOVE:
      if (enemy.canAttack) {
        enemy.state = EnemyState.ATTACK;
      }
      break;

    case EnemyState.ATTACK:
      shoot(enemy);
      enemy.state = EnemyState.MOVE;
      break;
  }
}
```

👉 **敵1体＝小さなFSM**  
👉 プレイヤーFSMと干渉しない

---

## 📈 難易度 × 敵AI の接続

```js
function configureEnemy(enemy) {
  if (difficulty === Difficulty.HARD) {
    enemy.speed = 4;      // ⚡ 高速
    enemy.fireRate = 0.5; // 🔥 高頻度
  }
}
```

✨ FSMは変えない  
✨ **パラメータだけ差し替える**

---

## 🧠 FSMが「AIっぽく」見える理由

- 🤖 状態ごとに振る舞いが明確
- 🔁 状態遷移＝意思決定に見える
- 📐 ロジックが図として説明できる

👉 実際は **純FSM + 数値制御**  
👉 でも設計的には立派な AI

---

## 📐 全体構造（09版）

```
Game FSM
 ├─ INIT
 ├─ READY
 ├─ PLAY
 │    ├─ Difficulty FSM 📈
 │    └─ Enemy FSM 👾👾👾
 └─ GAME_OVER
```

---

## ✨ まとめ

- ✅ FSMは「整理」だけでなく「拡張」のためにある
- ✅ 難易度・AIは FSM に**寄生させる**
- ✅ if 文を増やさずゲームが成長する

---

## 🔮 次回予告（10_）

- 🤖 FSM × 自動制御（自機AI / デモプレイ）
- 🧠 状態×スコア×行動履歴
- 🚀 AITL（FSM × 制御 × 知能）への接続
