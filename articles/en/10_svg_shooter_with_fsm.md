---
layout: default
title: Qiita Articles
---

# 10. [JavaScript] Structuring an SVG Shooter with FSM  
## — An Intermediate Design to Keep DOM Games from Breaking
tags: ["JavaScript", "SVG", "FSM", "GameDev"]

---

## 🎮 Structuring an SVG Shooter with FSM  
— From “It Runs” to “It Can Grow Without Breaking” —

⚠️ **This article is NOT about a finished game.**

Let’s clarify the position of this article first:

- **09**: Build a shooting game that *simply works* using SVG + DOM  
- **10 (this article)**: Organize that game so it *doesn’t break*  
- **11**: Add *difficulty control and enemy AI* on top of that structure  
- **12**: **Final version** (if you just want to play, this is enough)

👉  
**If you just want to play the game, jump straight to 12.**  
This article is a *design note for people who are building the game*.

---

## What We Did in 09

In 09, we built a shooting game **without Canvas**, using only:

- SVG  
- DOM manipulation  
- `requestAnimationFrame`  

We implemented:

- 🚀 Player  
- 👾 Enemies  
- 💥 Bullets  
- 🎯 Collision detection  
- ☠ Game over  

👉 **We confirmed that the game works.**

---

## But Something Feels Wrong When You Keep Adding Features

As you extend the game, the code starts filling up with things like:

- `if (isGameOver)`
- `if (!started)`
- `if (paused)`
- `if (canInput)`

---

## ⚠️ The Limitations of 09

- ❌ `if` statements keep multiplying  
- ❌ Pre-start / playing / post-game states get mixed  
- ❌ Adding one feature breaks something else  

👉 The cause is very clear:

> **The game’s “state”  
> is not explicitly represented in the code.**

---

## 🧠 Solution: FSM (Finite State Machine)

What we do in this article is simple:

> **Represent the current game state  
> with a single variable.**

No complicated theory is required.

---

## 🧩 State Definition

```js
const State = {
  INIT: "init",         // initialization
  READY: "ready",       // waiting to start
  PLAY: "play",         // playing
  GAME_OVER: "game_over"
};

let currentState = State.INIT;
```

👉 The current state of the game is **always managed here**.

---

## 🔄 Centralize State Transitions

```js
function changeState(next) {
  console.log(`STATE: ${currentState} → ${next}`);
  currentState = next;
}
```

- Where did we come from?  
- Where are we going?  
- When did the transition happen?  

👉 Just looking at the logs tells you how the game flows.

---

## 🎮 Restructuring the Main Loop Around FSM

In 09, conditionals were scattered everywhere.  
With FSM, the main loop becomes this:

```js
function gameLoop() {
  switch (currentState) {

    case State.INIT:
      initGame();
      changeState(State.READY);
      break;

    case State.READY:
      // waiting for start input
      break;

    case State.PLAY:
      updatePlayer();
      updateEnemies();
      updateBullets();
      checkCollision();
      break;

    case State.GAME_OVER:
      // waiting for restart
      break;
  }

  requestAnimationFrame(gameLoop);
}
```

✨ You can instantly see **what kind of game this is right now**  
✨ You escape from `if`-statement hell

---

## ⌨️ Input Handling Changes Meaning by State

```js
document.addEventListener("keydown", e => {

  if (currentState === State.READY && e.code === "Space") {
    changeState(State.PLAY);   // start
  }

  if (currentState === State.GAME_OVER && e.code === "KeyR") {
    changeState(State.INIT);   // restart
  }
});
```

👉 Input becomes a **trigger for state transitions**  
👉 Redundant flag management disappears

---

## 🧠 SVG (DOM) and FSM Work Well Together

- SVG elements clearly exist or do not exist  
- DOM has explicit structure  
- FSM organizes behavior  

👉 Easier to explain design than Canvas-based games  
👉 Very suitable for teaching and learning

---

## 📐 Overall Structure at This Stage

```
Game FSM
 ├─ INIT
 ├─ READY
 ├─ PLAY
 └─ GAME_OVER
      │
      └─ SVG (DOM)
           ├─ player
           ├─ bullets
           └─ enemies
```

---

## ✨ What You Gain at This Point

- The visuals are still simple  
- It doesn’t look very different from 09  

But:

- The game is harder to break  
- You can see where new features should go  
- The next steps are clearly organized  

---

## 🔮 What Comes Next (11)

- 📈 Change difficulty based on score or time  
- 🤖 Split enemy behavior into states  
- Make the **benefits of FSM tangible**  

---

## 🎯 Honest Summary

- This article is **not about playing the game**  
- It is about **not getting lost while building it**  
- If you just want to play, **skip to 12**

FSM is not the goal.  
It is simply a **tool for continuing development without breaking the game**.
