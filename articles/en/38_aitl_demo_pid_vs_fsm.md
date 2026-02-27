---
layout: default
title: qiita-articles
---

# 38.【Physical AI Design】🧪 Is AITL Really Robust?｜PID Only vs AITL Side-by-Side
tags:
  - PhysicalAI
  - AITL
  - Demo
  - ControlEngineering
  - Visualization
---

## 🧪 Is AITL Really Robust?  
## PID Only vs AITL — Shown Side-by-Side

In the previous articles, we established that:

- Physical AI is a **design problem**, not a learning problem
- Directly connecting an LLM causes **structural failure**
- A robust architecture requires a **PID × FSM × LLM three-layer structure**

But one question always remains:

> “The theory makes sense.  
> But does it actually work?”

In this article,  
**no new theory is introduced.**

We show **only the difference in behavior**.

---

## ℹ️ What “AITL” Means in This Article

In this article, **AITL** refers to the following configuration:

- **PID for real-time control**
- **FSM for explicit state management and mode switching**
- LLM is **not** part of the control loop

That is,

> **AITL = PID + FSM (as used here)**

All comparisons below are limited to  
**whether an FSM exists or not**.

---

## 👀 Purpose of This Article

- Explaining design philosophy ❌  
- Mathematical derivations ❌  

We do only one thing:

> **Observe how behavior changes  
> when the structure changes under identical conditions**

---

## 🧠 Structures Being Compared

We compare the following two cases.

### 🔵 Case A: PID ONLY
- Real-time control by PID alone
- No explicit state management
- Post-disturbance behavior left entirely to PID dynamics

### 🟢 Case B: AITL (PID + FSM)
- Real-time control by PID
- FSM placed above PID
- Control mode switches based on system state

**Plant, disturbance, and initial conditions are identical.**

The only difference is:  
👉 **Whether an FSM exists or not**

---

## 🖥️ Demo (Watch First)

First,  
**just watch — don’t analyze yet.**

<section class="aitl-demo" style="margin:0;padding:0;">
  <iframe
    src="https://samizo-aitl.github.io/aitl-animation-demos/demo/js-svg/aitl-control-flow.html"
    style="display:block;width:100%;height:750px;border:none;border-radius:12px;background:#000;margin:0;"
    loading="lazy"
    referrerpolicy="no-referrer">
  </iframe>
</section>

---

## 🔍 What to Look For (Minimal Explanation)

### 🔵 Top: PID ONLY
- A disturbance is applied
- The system responds
- **Steady-state error remains**
- The system never “returns” in a semantic sense

This is **correct behavior for PID**.  
PID stabilizes dynamics,  
but it does not understand *meaning* or *state recovery*.

---

### 🟢 Bottom: AITL (PID + FSM)
- Disturbance is detected
- State transitions to “disturbance”
- Control mode is switched
- **The system returns to the original target state**

Nothing magical happens here:

- PID did not become smarter ❌  
- No learning occurred ❌  

👉 **Only the FSM recognized the system state**

That is all.

---

## 🧩 What This Demonstrates

This demo proves a single point:

> **Robustness comes from structure,  
> not from algorithms**

- Same PID
- Same parameters
- Same disturbance

Yet the outcome changes.

**Only the structure was changed.**

---

## 🧭 Summary

- AITL is not an ideology  
- Not magic  
- Not “AI getting smarter”  

It is simply **correct separation of responsibilities**:

- PID for real-time stability
- FSM for state and safety
- LLM for external reasoning (outside the loop)

As long as this separation is preserved,  
Physical AI systems become **far more robust**.

---

## 🔗 Full Architecture & Demo Index

The full design framework and additional demos are collected here:

[Samizo-AITL Portal](https://samizo-aitl.github.io/)

This is not promotion.  
It is an **index of the design system**.
