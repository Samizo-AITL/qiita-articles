---
layout: default
title: Qiita Articles
---

# 14.【JS】SVG vs Canvas: Building the Same Shooter Resulted in Totally Different Experiences
tags: ["JavaScript", "SVG", "Canvas", "GameDev", "Web"]

---

## 🎮 SVG vs Canvas: The Same Shooter Felt Completely Different

I built the same shooting game twice:  
one version in **SVG**, and one in **Canvas**.

To jump straight to the conclusion:  
this isn’t about which one is better —  
**the experience itself is fundamentally different**.

---

## ▶ Demo (Playable Right Away)

### SVG Version (With FSM, Stability-Oriented)
[https://samizo-aitl.github.io/qiita-articles/demos/svg-shooter-fsm/](https://samizo-aitl.github.io/qiita-articles/demos/svg-shooter-fsm/)

### Canvas Version (Flashy, Effect-Focused)
[https://samizo-aitl.github.io/qiita-articles/demos/canvas-shooter/](https://samizo-aitl.github.io/qiita-articles/demos/canvas-shooter/)

Try them first.  
The explanation can wait.

---

## 🎮 Controls

### SVG Version

- ← / → or A / D: Move  
- Space: Shoot  
- R: Restart  
- (Mobile) Bottom on-screen buttons: Move / Shoot / Restart  

※ Designed primarily for keyboard input.

---

### Canvas Version

- Mouse move: Ship movement  
- Space: Shoot  
- R: Restart  

※ Controls are intentionally minimal.  
The Canvas version includes BGM and sound effects  
(enabled after the first user interaction).

---

## 🧠 What I Felt After Building Them

### Impression of the SVG Version

- Calm, stable movement  
- Clear state visibility  
- Feels safe to play for long sessions  

It feels like  
“a properly controlled, well-managed game.”

---

### Impression of the Canvas Version

- Lightweight motion  
- Flashy visuals  
- Fast response that feels great  

It’s fully committed to  
“being fun the moment you touch it.”

---

## 🆚 Technical Differences (Without Going Too Deep)

In short:

- **SVG**
  - DOM elements are directly visible  
  - Structure is easy to reason about  
  - Works well with state management  

- **Canvas**
  - Lightweight rendering  
  - Easy to layer visual effects  
  - Excels at visual feedback and feel  

Detailed design and performance discussions  
are intentionally skipped this time.

---

## 🤔 So… Which One Is the Right Choice?

Honestly:

- If you want to build calmly and carefully → **SVG**  
- If you want to let players have flashy fun → **Canvas**

This isn’t about superiority.  
It’s really about **purpose and personal preference**.

---

## 🎯 Summary

- I built the same shooter in both SVG and Canvas  
- Not just visuals, but controls and overall feel changed  
- Both approaches have clear strengths  

Before starting, I thought:  
“Canvas is probably the obvious choice.”

But after actually building both,  
the strengths of SVG became very clear as well.

This is one of those things you only really understand  
**after building and playing it yourself**.

---

If you’re interested,  
both implementations are available as-is  
in the GitHub repository.

Thanks for reading.
