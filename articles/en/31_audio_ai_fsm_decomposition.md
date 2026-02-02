---
layout: default
title: Qiita Articles
---

# 31.【Voice AI Design】Decomposing Voice AI with an FSM  
## Speaking, Silence, and Interruptions Were All States

tags: ["Voice Generation AI", "FSM", "Design Philosophy", "Control Structure", "Generative AI"]

---

## 🧩 Decomposing Voice AI with an FSM  
### — 🔄 Speaking, Silence, and Interruptions Were All States

In the previous article (30), we reached the following conclusion:

> 🎧 **Voice generation AI is not a generation problem — it is a control problem**

In this article, we go one level deeper and  
**fully decompose voice AI as an FSM (Finite State Machine).**

---

## 🎯 Purpose of This Article

- To understand voice AI behavior not as “feelings,” but as **states**  
- To make failure points explicit as **missing state transitions**  
- To establish a **design foundation** for the next article (where sound is actually produced)  

👉 No sound yet.  
**Before making noise, we build a structure that does not break.**

---

## ❌ Common Failure Pattern (No FSM)

Many voice AIs implicitly assume states like:

- It’s talking  
- It’s probably listening  
- It’s sort of waiting  

This is equivalent to **not defining states at all**.

As a result:

- Infinite speaking  
- Silent freezing  
- Immediate failure on interruption  

occur inevitably.

---

## 🧠 Voice AI Is a Collection of States

All voice AI behavior can be reduced to these questions:

- What is it doing right now?  
- When is it allowed to move on?  
- What event should interrupt it?  

👉 Answering these questions is the role of an **FSM**.

---

## 📦 Minimal FSM Structure (Start Here)

A minimal FSM for voice AI requires only the following.

### 🧩 States

- 💤 **Idle**  
  Waiting state (doing nothing)

- 👂 **Listening**  
  Receiving audio input

- 🧠 **Thinking**  
  Preparing utterance content (LLM, etc.)

- 🔊 **Speaking**  
  Outputting audio

- ✋ **Interrupted**  
  An interruption has occurred

- 🚨 **Error / Fallback**  
  Exception and failure handling

---

## 🔄 Overall State Transition Flow

```
💤 Idle
  │ (Audio input starts)
  ▼
👂 Listening
  │ (Input ends)
  ▼
🧠 Thinking
  │ (Generation complete)
  ▼
🔊 Speaking
  │ (Utterance finished)
  ▼
💤 Idle

🔊 Speaking
  │ (Human starts speaking)
  ▼
✋ Interrupted
  │ (Decision made)
  ├──▶ 👂 Listening
  └──▶ 💤 Idle

All states
  │ (Exception)
  ▼
🚨 Error / Fallback
```

👉 **This covers almost all voice AI behavior.**

---

## ⚠️ Important: The FSM Lives “Outside” Audio

A common misconception:

- ❌ The audio engine holds the state  
- ❌ The LLM manages the conversation state  

The correct model is:

> 🧩 **The FSM stands outside both audio and the LLM**

The FSM forcefully controls:

- When audio input is enabled  
- When audio output must stop  
- When the LLM is allowed to run  

---

## 🤖 States Where LLMs Are Allowed — and Not Allowed

### ⭕ Where LLMs Are Allowed
- 🧠 **Thinking**  
  → Generating utterance content only

### ❌ Where LLMs Must Not Be Used
- 🔊 Speaking (real-time control)  
- 👂 Listening (interruption judgment)  
- ✋ Interrupted (immediate decisions)

👉  
**Placing an LLM in time-critical states guarantees failure.**

---

## 🧊 Silence Is Not a Bug

Silent freezes are common, but from an FSM perspective,  
they are simply **undefined states**.

- Did Speaking finish?  
- Is Thinking still running?  
- Should it return to Idle?  

👉 **The transition conditions were never defined.**

---

## 🧩 The Biggest Advantage of FSM-ization

- Behavior becomes predictable  
- There is always a safe return path  
- Debugging becomes possible  
- Design can be validated before any sound is produced  

This has **nothing to do with model performance**.

---

## 🧩 FSM Visualization Demo

A simple demo is provided to visualize  
the voice AI FSM and its state transitions.

▶ Demo  
https://samizo-aitl.github.io/qiita-articles/demos/audio-fsm-visual/

This demo produces no sound and focuses entirely on  
**understanding states and transitions**.

---

## 📌 Summary

- 🎧 Voice AI is fundamentally a state-transition machine  
- 🧩 Any voice AI without an explicit FSM will break  
- 🤖 LLMs are responsible only for the Thinking state  
- ✋ Interruptions and silence are not “exceptions”  
- 🏗 The FSM must be completed before producing sound  

---

## 🔜 Next Article (32)

- 🔊 **Connecting minimal audio output to the FSM**  
- 🎚 A minimal implementation that abandons “naturalness”  
- 🧪 A voice AI that prioritizes not breaking  

Next time, **sound will actually be produced** —  
but only **sound that obeys the FSM**.

---

*(The GitHub-hosted Markdown is the canonical source; the Qiita version is a curated extract.)*
