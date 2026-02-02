---
layout: default
title: Qiita Articles
---

# 33.【Voice AI Design】Interruptions Break Voice AI  
## What Really Happens When a Human Speaks During Speaking

tags: ["Voice Generation AI", "FSM", "Interruption", "Design Philosophy", "Control Structure"]

---

## ✋ Interruptions Break Voice AI  
### — 🔥 What Happens When a Human Speaks While the AI Is Speaking

This is the moment where **voice AI fails most dramatically**.

> 🔊 The AI is speaking  
> 👤 A human starts speaking

Most voice AI demos  
**deliberately avoid this moment**.

The reason is simple:

**They were never designed for it.**

---

## 🎯 Purpose of This Article

- To show that interruptions are **not exceptions**  
- To treat speaking interruption as an **FSM extension**  
- To define the **minimum conditions for a voice AI that does not break**  

👉 We still don’t need conversational polish.  
**First, it must not break.**

---

## ❌ Common Failure Patterns

### ① 🔊 Keeps Talking
- Ignores human speech
- Microphone input and speaker output collide

### ② 🧊 Silent Freeze
- TTS stops
- System state becomes unknown

### ③ 🤯 Dual State
- Is it Speaking or Listening?
- The FSM collapses

👉 All of these are caused by **undefined state transitions**.

---

## 🧠 Interruption Is Not an “Error”

A critical perspective:

> ✋ **Interruption is normal behavior**

In human conversation:

- Talking over each other  
- Backchannel responses  
- Self-corrections  

happen constantly.

Designing voice AI under the assumption  
that it will *never* be interrupted  
is guaranteed failure.

---

## 🧩 Adding an Interruption State to the FSM

We extend the FSM from article (32)  
by adding a **dedicated interruption state**.

### 📦 Added States

- ✋ **Interrupted**  
  External speech detected during Speaking

- 👂 **Listening**  
  Accepting input after interruption

---

## 🔄 FSM with Interruption (Full View)

```
💤 Idle
  │
  ▼
🔊 Speaking
  │ (Human speech detected)
  ▼
✋ Interrupted
  │
  ├──▶ 👂 Listening   (Listen to the human)
  └──▶ 💤 Idle        (Abort and stop)
```

🔑 Key points:

- Speaking → Interrupted is **immediate**
- Thinking is NOT involved
- The FSM **forcibly takes control**

---

## ⏱ Do NOT Be “Smart” About Interruption Detection

A common mistake here:

- ❌ Using an LLM to judge interruption
- ❌ Understanding content before stopping

The correct approach:

> 🎚 **Decide immediately using physical signals**

Examples:
- Volume threshold  
- Microphone input level  
- VAD (Voice Activity Detection)

👉 **Meaning comes later.**

---

## 🔊 What Must Happen During Speaking Interruption

The moment interruption is detected:

1. 🔇 Immediately stop TTS  
2. 🧩 Transition FSM to Interrupted  
3. 🎤 Separate output from input  
4. 👂 Move to Listening  

Changing this order causes failure.

---

## 🚫 What NOT to Do During Interruption Handling

- ❌ Wait until the AI finishes speaking  
- ❌ Try to stop “naturally”  
- ❌ Preserve conversational flow  

👉 That is **performance**, not control.

---

## 🧠 The Biggest Benefit of an Interruption FSM

- No overlapping speech  
- No silent freezes  
- The current state is always known  
- Debugging becomes possible  

🎯 This alone places the system  
within the **minimum acceptable range for real-world voice AI**.

---

## ✋ Interruption Demo

A demo is provided to observe  
interruption behavior under FSM control.

▶ Demo  
https://samizo-aitl.github.io/qiita-articles/demos/audio-fsm-interrupt/

This demo demonstrates:

- Immediate audio stop  
- Speaking → Interrupted transition  
- FSM-driven control  

---

## 📌 Summary

- ✋ Interruption is normal behavior  
- 🔊 Speaking must stop immediately  
- 🧩 The FSM holds authority  
- 🎚 Detection is based on physical signals  
- 🤖 LLMs must NOT decide interruptions  

---

## 🔜 Next Article (34)

- 🤖 Safely reconnecting the LLM  
- Why it belongs only in the Thinking state  
- A minimal and safe Voice × LLM architecture  

Next time,  
**the LLM finally returns — safely.**

---

*(The GitHub-hosted Markdown is the canonical source; the Qiita version is a curated extract.)*
