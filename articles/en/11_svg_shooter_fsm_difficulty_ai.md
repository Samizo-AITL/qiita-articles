---
layout: default
title: Qiita Articles
---

# 11. [JavaScript] Adding Difficulty and Enemy AI to an SVG Shooter  
## — When FSM Changes How the Game *Feels*
tags: ["JavaScript", "SVG", "FSM", "GameDev"]

---

## 🎮 Adding Difficulty and Enemy AI to an SVG Shooter  
— The Moment FSM Changes the Gameplay Experience —

⚠️ **This article is NOT the final version.**

Here is the position of this article in the series:

- **09**: Made the game run using SVG + DOM  
- **10**: Organized the structure with FSM so it wouldn’t break  
- **11 (this article)**: Add *difficulty and enemy AI* on top of that structure  
- **12**: Final version (if you just want to play, this is enough)

👉 **If you want to play the game, go straight to 12.**  
This article focuses on *how the gameplay experience changes*.

---

## There Is Only One Goal

> **It’s the same game —  
> but as time passes, it starts to feel different.**

No flashy visuals.  
The goal is to make the **effect of FSM obvious through interaction**.

---

## 📈 Treat Difficulty as a State

First, define difficulty as an enum.

```js
const Difficulty = {
  EASY: "easy",
  NORMAL: "normal",
  HARD: "hard"
};

let difficulty = Difficulty.EASY;
```

👉 The key point is to treat difficulty as a **state**, not a flag.

---

## ⏱ Difficulty Changes Automatically

Update the state based on score or elapsed time.

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

- No player input required  
- It changes naturally as you play  

👉 **Before you notice, it gets harder.**

---

## 👾 Give Each Enemy Its Own FSM

Enemies graduate from being “just falling boxes.”

```js
const EnemyState = {
  SPAWN: "spawn",
  MOVE: "move",
  ATTACK: "attack",
  DEAD: "dead"
};
```

Each enemy holds its own state.

```js
enemy.state = EnemyState.SPAWN;
```

---

## 🔄 Enemy Behavior (Very Simple Version)

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

👉 You can clearly read **why** the enemy acts the way it does.

---

## 🎯 Where Difficulty Affects Gameplay

Change parameters based on difficulty.

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

- EASY: slow, rarely shoots  
- HARD: fast, shoots often  

👉 Same visuals — **completely different behavior**.

---

## 🧠 Why FSM Works Here

- Game-wide behavior: Game FSM  
- Difficulty control: Difficulty FSM  
- Per-enemy behavior: Enemy FSM  

Each is **independent**.

👉 You can change one without breaking the others.

---

## 📐 Structural Overview (at This Stage)

```
Game FSM
 └─ PLAY
     ├─ Difficulty FSM
     ├─ Enemy FSM (per enemy)
     └─ Collision
```

---

## ✨ What Changes at This Point

- The stage looks the same  
- But as time passes, it gets busier  
- Replaying feels different each time  

👉 **This is the moment it starts to feel like a real game.**

---

## 🔮 What Comes Next (12)

- UI cleanup  
- Control instructions  
- Pause / restart  
- Polish it into a proper demo  

👉 **If you just want to play, 12 is all you need.**

---

## 🎯 Summary

- Treat difficulty and enemy AI as **states**  
- FSM gives behavior a clear reason  
- You can change the feel without changing visuals  

Next is the **final version (12)**.
