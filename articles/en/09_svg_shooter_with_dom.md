---
layout: default
title: Qiita Articles
---

# 09. [JavaScript] I Built a Complete Shooting Game Using Only SVG (No Canvas)
tags: [JavaScript, SVG, Web, Beginner]

---

## 🎮 What Does It Do?

I built a **complete mini shooting game using only SVG**.

- 🚀 Player ship, bullets, enemies, collision detection, score, lives, game over — all implemented  
- 🧩 All graphics are **SVG × DOM elements**  
- 🔍 Controlled via `querySelector` / `setAttribute`  
- 🛠 Game state is visible in DevTools, making debugging easy  

This is a **DOM-friendly shooting game**  
for people who feel that *“Canvas looks a bit intimidating…”*.

---

## 🎮 Controls

- ⬅ ➡: Move (`←` `→` / `A` `D`)  
- 🔫: Rapid fire (`Space`)  
- 🔄: Restart (`R`)  
- 📱 Mobile: On-screen buttons at the bottom  

---

## 🤔 Why SVG Instead of Canvas?

Canvas works by drawing pixels, which means:

> **It’s hard to interact with individual bullets or enemies afterward.**

SVG, on the other hand, is DOM-based:

- 🎯 Bullets and enemies are **elements**  
- 🔍 You can grab them with `querySelector`  
- ✏ Move them by updating attributes  
- 🧠 Their state is fully visible in DevTools  
- 📄 Even shape changes can be tracked with Git diffs  

👉 **For learning, teaching, and understanding game structure, SVG is extremely powerful.**

---

## 🧩 Core Idea: DOM Manipulation (Example)

Bullets are created as `<circle>` elements,  
and movement is achieved by **simply updating coordinates (`cx`, `cy`)**.

```js
const bullet = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "circle"
);

bullet.setAttribute("cx", x);
bullet.setAttribute("cy", y);
bullet.setAttribute("r", 3);
svg.appendChild(bullet);

// Movement: just update `cy`
bullet.setAttribute("cy", y - 5);
```

> 💡 No redraw loop like Canvas is required.

---

## ▶️ Live Demo (Playable)

👇 **Click here to play**  
[https://samizo-aitl.github.io/qiita-articles/demos/svg-shooter/](https://samizo-aitl.github.io/qiita-articles/demos/svg-shooter/)

*Opens in a new tab*

---

## ✅ Summary

- ✨ SVG is DOM → easier to manipulate, understand, and debug  
- 🎮 A shooting game is totally feasible without Canvas  
- 📘 Ideal for learning, teaching, and demos  

Planned additions include:

- 👾 Enemy behavior patterns  
- 🌊 Bullet-hell style barrages  
- ⚡ Optimized collision detection  

---

## 🔜 Continuation of This Game

This article (09) focuses on showing that:

> **A complete game can be built using SVG (DOM) alone.**

The series continues as follows:

- **10**: Organizing the game so it doesn’t break (introducing FSM)  
- **11**: Changing gameplay feel with difficulty control and enemy AI  
- **12**: Final complete version (play, pause, resume — everything included)  

👉 **If you just want to play, jump straight to 12**  
👉 If you want to learn how it’s built, check out 10 / 11 as well
