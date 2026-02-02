---
layout: default
title: Qiita Articles
---

# 35.【Physical AI Design】🤖⚙️ What Is Physical AI?  
## Why AI Breaks When It Enters the Real World

tags:
  - Physical AI
  - Embodied AI
  - Design Philosophy
  - Control Engineering
  - LLM

---

## 🤖⚙️ What Is Physical AI?  
## Why AI Breaks When It Enters the Real World

In recent years, terms like **“Physical AI”** and **“Embodied AI”** have suddenly become common.  
Robots, drones, voice interfaces, factories, autonomous driving—  
**AI moving into the physical world is now inevitable.**

At the same time, we see countless reports like these:

- It worked in a demo, but became unstable on real hardware  
- Adding an LLM made it smarter, but its behavior broke  
- Letting AI handle safety control actually made things more dangerous  

This article makes the reason explicit.

---

## 🧠 Conclusion (Stated Clearly Up Front)

Physical AI is **not a problem of intelligence**.

It is a **design problem**:  
placing AI into a world that has  
**time ⏱️, continuous state 📈, and physical constraints ⚡ (V–I, safety)**.

The moment this premise is ignored,  
**even the most advanced AI will break.**

---

## 🔍 The Fundamental Difference from Software AI

Let’s first clarify the difference between software AI and physical AI.

| Aspect | Software AI | Physical AI |
|---|---|---|
| Time | Can stop or wait | **Never stops** |
| State | Discrete, abstract | **Continuous, physical** |
| Failure | Can retry | **Cannot be undone** |
| Constraints | Logical | **Physical (V–I, safety)** |

With chatbots or game AI:

- Delays are acceptable (“just wait a bit”)  
- Incorrect outputs can be retried  

In physical AI:

- Motors keep moving  
- Voltage and current budgets cannot be exceeded  
- A single mistake can cause damage or accidents  

**The rules of the world are completely different.**

---

## 🤖 Why “Making It Smarter” Still Causes Failure

This is where many people misunderstand the problem.

> “It breaks because the AI isn’t smart enough.”  
> “It’s unstable because the training data is insufficient.”

This is almost always wrong.

The real issue is:

- **Where the AI is placed**  
- **Which loop it is inserted into**

In the real world, priorities are:

- Real-time control  
- Stability  
- Reproducibility  

If you carelessly connect an AI that has:

- Variable response time  
- Non-deterministic outputs  
- State-skipping behavior  

to such a system, **failure is inevitable**.

---

## ❌ Common Misconceptions

### ❌ Misconception ①: “It needs more training”
→ **No.**  
No amount of training eliminates real-time latency.

### ❌ Misconception ②: “Directly connecting an LLM makes it smarter”
→ **It usually makes things worse.**  
Intelligence and controllability are not the same.

### ❌ Misconception ③: “AI judgment guarantees safety”
→ **The opposite is true.**  
Safety is guaranteed by **structure**, not judgment.

---

## ✅ Defining Physical AI as a Design Concept

Let’s translate the vague buzzword into a precise design term.

> **Physical AI is the system design problem of embedding AI  
> into systems that have real-time behavior, continuous dynamics,  
> and physical constraints.**

This is:

- Not an AI algorithm problem  
- Not a model accuracy problem  

It is an **architectural problem**.

---

## 🧭 What This Series Will Cover

From here, we will address:

- Why **direct LLM integration always fails**  
- What **non-breaking placement** looks like in physical AI  
- How **PID, FSM, and LLM should be separated**  
- How **structural differences manifest as behavioral differences**

We will pull Physical AI down from a buzzword  
and turn it into a **reusable design philosophy**.

Next, we will break down  
**why directly connecting an LLM is structurally doomed**,  
from the perspectives of control theory and FSMs.

---
