---
title: "11.【JS】SVGシューティングに難易度と敵AIを足す｜FSMで“体感が変わる”ゲームへ"
tags: ["JavaScript", "SVG", "FSM", "GameDev"]
---

# 🎮 SVGシューティングに難易度と敵AIを足す  
— FSMで「遊び心地」が変わる瞬間 —

⚠️ **この記事は完成版ではありません。**

- **09_**：SVG + DOM でゲームを動かした  
- **10_**：FSMで壊れない構造に整理した  
- **11_（この記事）**：その構造に *難易度と敵AI* を足す  
- **12_**：完成版（遊ぶだけならここだけ見ればOK）

👉 **ゲームを遊びたい人は 12_ へ。**  
この記事は「体感がどう変わるか」を確認する回です。

---

## 目的はひとつだけ

> **同じゲームなのに、  
> 時間が経つと“別の遊び心地”になる**

派手な演出はしません。  
**FSMを入れた意味が、操作して分かる**ことを目指します。

---

## 📈 難易度は「状態」として扱う

まず、難易度を enum で定義します。

```js
const Difficulty = {
  EASY: "easy",
  NORMAL: "normal",
  HARD: "hard"
};

let difficulty = Difficulty.EASY;
```

👉 フラグではなく「状態」として扱うのがポイント。

---

## ⏱ 難易度は自動で切り替える

スコアや経過時間を元に、状態を更新します。

```js
function updateDifficulty(score, timeSec) {
  if (score > 800 || timeSec > 40) {
    difficulty = Difficulty.HARD;
  } else if (score > 300 || timeSec > 20) {
    difficulty = Difficulty.NORMAL;
  } else {
    difficulty = Difficulty.EASY;
  }
}
```

- プレイヤー操作は不要
- 遊んでいるだけで変わる

👉 **気づいたらキツくなっている**

---

## 👾 敵にも FSM を持たせる

敵は「ただ落ちてくる箱」から卒業します。

```js
const EnemyState = {
  SPAWN: "spawn",
  MOVE: "move",
  ATTACK: "attack",
  DEAD: "dead"
};
```

各敵は自分の状態を持ちます。

```js
enemy.state = EnemyState.SPAWN;
```

---

## 🔄 敵の振る舞い（超シンプル版）

```js
function updateEnemy(enemy) {
  switch (enemy.state) {

    case EnemyState.SPAWN:
      enemy.state = EnemyState.MOVE;
      break;

    case EnemyState.MOVE:
      moveEnemy(enemy);
      if (canAttack(enemy)) {
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

👉 行動の理由がコードから読み取れる。

---

## 🎯 難易度が「体感」に効くポイント

難易度ごとにパラメータを変えます。

```js
function getDifficultyParams() {
  switch (difficulty) {
    case Difficulty.HARD:
      return { speed: 2.5, fireRate: 0.02 };
    case Difficulty.NORMAL:
      return { speed: 1.8, fireRate: 0.01 };
    default:
      return { speed: 1.2, fireRate: 0.005 };
  }
}
```

- EASY：遅い・撃たない
- HARD：速い・よく撃つ

👉 見た目は同じ、**中身だけ違う**。

---

## 🧠 FSMが効いている理由

- ゲーム全体：Game FSM
- 難易度：Difficulty FSM
- 敵1体ごと：Enemy FSM

それぞれが **独立している**。

👉 どれかを変えても、他が壊れない。

---

## 📐 構造イメージ（09時点）

```
Game FSM
 └─ PLAY
     ├─ Difficulty FSM
     ├─ Enemy FSM (per enemy)
     └─ Collision
```

---

## ✨ この段階で起きる変化

- 同じステージなのに
- 時間が経つと忙しくなる
- 何度も遊ぶと感覚が違う

👉 **「ゲームっぽくなった」瞬間**。

---

## 🔮 次（12_）でやること

- UI整理
- 操作説明
- 一時停止・リスタート
- デモとして完成させる

👉 **遊ぶだけなら12_だけ見ればOK**。

---

## 🎯 まとめ

- 難易度と敵AIは「状態」として扱う
- FSMを入れると“理由のある動き”になる
- 見た目を変えなくても、体感は変えられる

次は **完成版（12_）** です。
