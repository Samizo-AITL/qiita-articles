---
layout: default
title: Qiita Articles
---

# 37.【Physical AI Design】🏗️ How to Build Systems That Don’t Break  
## The Three-Layer Architecture: PID × FSM × LLM

tags:
  - Physical AI
  - AITL
  - PID Control
  - FSM
  - Architecture Design

---

## 🏗️ How to Build Physical AI That Doesn’t Break  
## The Three-Layer Architecture: PID × FSM × LLM

In the previous article, we explained why  
**directly connecting an LLM to a control loop inevitably causes failure**.

The next natural questions are:

> “So where *should* we place the LLM?”  
> “How do we arrange the system so it doesn’t break?”

The answer is simple—yet unless it is **explicitly designed**, it will be violated.

That answer is the **three-layer architecture**:

> **PID × FSM × LLM**

---

## 🧠 The Conclusion Up Front

To keep Physical AI systems from breaking, you must clearly separate:

- **Real-time control**
- **State management and safety**
- **Reasoning and redesign**

The moment you let a single component handle all of them,  
the system collapses.

---

## 🧱 The Three-Layer Architecture at a Glance

```
[ LLM ]        ← Reasoning / Re-design (non-real-time)
   ↑
[ FSM ]        ← Mode management / Safety transitions
   ↑
[ PID ]        ← Real-time control / Stability
```

The key rule is simple:

> **The deeper the layer, the stricter the requirements.**  
> Upper layers may be slow. Lower layers may not fail.

---

## 🟢 Inner Layer: PID (Real-Time and Stability)

### The Role of PID
- Real-time control
- Stability guarantees
- Immediate response

PID control may look old-fashioned, but it is  
**the only layer directly connected to the physical world**.

- Response times on the order of milliseconds
- Oscillation or divergence leads directly to damage
- Behavior can be analyzed mathematically

What this layer demands is not intelligence, but **certainty**.

👉 **AI must never be placed here.**

---

## 🟡 Middle Layer: FSM (State and Safety)

### The Role of FSM
- Mode management
- Explicit state transitions
- Exception and error handling
- Safety guarantees

Most Physical AI systems already have an FSM—  
**even if it is never written down**.

Typical states include:

- Initializing
- Idle
- Active
- Error
- Safe stop

If these states are not explicitly coded,  
LLMs or ad-hoc human logic will eventually **step over them**.

The FSM decides:

- “Is this action allowed *now*?”
- “This action is *never* allowed.”

It is the system’s **last line of defense**.

---

## 🔵 Outer Layer: LLM (Reasoning and Re-design Only)

### The Correct Role of an LLM
- Situation assessment
- Policy decisions
- Parameter re-design
- Interpretation of logs and history

The critical mindset here is:

> **Use the LLM to think—not to act.**

In this layer:

- Real-time performance is unnecessary
- Non-determinism is acceptable
- Delayed responses are fine

That is exactly **why** the LLM belongs on the outside.

---

## 🚫 Forbidden Placements

### ❌ Putting an LLM inside the PID loop
- Latency causes immediate instability
- Zero reproducibility

### ❌ Letting an LLM decide safety
- Decisions fluctuate with context
- “It seemed okay this time” becomes an accident

### ❌ Omitting the FSM
- State management collapses
- Everything becomes ad hoc and brittle

---

## ✅ The One Design Rule to Remember

> **Let the LLM think.  
> Do not let it move.**

That single sentence prevents  
**90% of Physical AI accidents**.

---

## 🧭 What This Architecture Really Means

This three-layer structure makes one thing explicit:

- Physical AI is **not** an AI algorithm problem
- It is a **system architecture problem**

LLMs are powerful—  
but they are **not universal**.

Only when placed in the correct layer  
do they become truly usable intelligence.

---

## 🔜 Next Article

In the next piece, we will show—visually and concretely—  
that this architecture actually works by comparing:

- PID only
- PID + FSM (AITL)

side by side in a **running demo**.

Not theory.  
Just **behavior**.
