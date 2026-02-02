---
layout: default
title: Qiita Articles
---

# 36.【Physical AI Design】💥 Why Directly Connecting an LLM Always Fails  
## Latency, Non-Determinism, and Loss of Control

tags:
  - Physical AI
  - LLM
  - Control Engineering
  - FSM
  - System Design

---

## 💥 Why Directly Connecting an LLM Always Fails  
## Latency, Non-Determinism, and Loss of Control

In the previous article, we clarified that  
**Physical AI is not a problem of intelligence, but a problem of design**.

So why do so many teams still fall into the same idea?

> “LLMs have become this smart—  
> why not just let them handle control and decision-making too?”

Here is the conclusion, stated plainly:

**The moment you do that, the system collapses structurally.**

This article explains—  
not by intuition, but by **structure**—  
why directly inserting an LLM into a control loop is guaranteed to fail.

---

## 🧠 The Conclusion First

Direct LLM integration fails for three fundamental reasons:

- ⏳ **Latency**
- 🎲 **Non-determinism**
- 🔀 **State destruction**

This is not a matter of tuning or refinement.  
It is a **combination that cannot work by design**.

---

## 💣 The Triple Failure Set

### ⏳ Latency: It Misses the Deadline

In Physical AI, control loops operate in **real time**.

Examples include:

- Motor control  
- Attitude stabilization  
- Voice interruption handling  
- Safety stop decisions  

These require responses on the order of **milliseconds to tens of milliseconds**.

Now compare that with an LLM:

- Response time fluctuates  
- Depends on network, load, and generation length  
- You cannot guarantee *when* the next token arrives  

**Any component that may or may not respond in time  
is disqualified the moment it enters a control loop.**

---

### 🎲 Non-Determinism: It Cannot Be Reproduced

In control engineering, the most dangerous property is this:

> Under identical conditions, the system behaves differently.

LLMs are inherently:

- Sample-based  
- Probabilistic  
- Context-dependent  

Which means:

> Same input  
> Same state  
> → **Different output**

This is normal for an LLM.

In control systems, however, this means:

- Impossible to test  
- Impossible to verify  
- Impossible to certify  

“Sometimes it works” is not success.  
**It is failure by design.**

---

### 🔀 State Destruction: It Breaks the FSM

Most Physical AI systems—explicitly or implicitly—rely on  
**finite state machines (FSMs)**.

Typical states include:

- Initializing  
- Idle  
- Active  
- Error  
- Safe stop  

When an LLM is directly connected, it tends to:

- Skip states based on semantic judgment  
- Ignore “is this allowed now?” checks  
- Logically override safety states  

This is not a “bad decision”.

It is the inevitable result of  
**placing a component that does not understand the FSM  
inside the FSM itself**.

---

## 🔧 What This Looks Like from a Control Perspective

From a control engineering viewpoint, an LLM is **not a control element**.

- No defined transfer function  
- No fixed response time  
- No stability analysis possible  

And yet, if you insert it into a control loop, the outcome is clear:

> **Instability is guaranteed.**

This is not a tuning problem.  
It is a **structural design error**.

---

## 🔗 Connection to Earlier Failures

We have already seen this failure pattern in other domains.

- 🎮 **Game design structured by FSMs**  
  → Ignoring state boundaries causes instant collapse
- 🔊 **Voice AI interruption failures**  
  → Injecting decisions during Speaking breaks the system

Different domains, same root cause:

👉 **An uncontrollable element was placed inside the control core**

Only the surface changes.  
**The failure structure is identical.**

---

## ❌ Common Counterarguments — and Why They Fail

### “But humans operate this way”
→ Humans are **parallel, redundant, and adaptive controllers**.  
LLMs are not.

### “We can just add stricter rules”
→ That means you are **building an FSM**.  
You should place it explicitly—and let it stay in control.

---

## 🧭 Summary

> LLMs are intelligent.  
> But they are **not controllable**.

Physical AI design is about  
**where intelligence is placed**, not how powerful it is.

In the next article, we will show:

- Where an LLM *can* be placed safely  
- How to separate PID, FSM, and LLM roles  
- Why a **three-layer architecture** is the only stable solution  

At that point, the boundary between  
**“usable intelligence” and “forbidden intelligence”**  
will finally become explicit.

---
