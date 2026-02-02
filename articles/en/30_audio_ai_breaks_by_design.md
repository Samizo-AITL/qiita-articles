---
layout: default
title: Qiita Articles
---

# 30.【Voice AI Design】Why Voice Generation AIs Break So Easily  
## Why Directly Connecting an LLM Leads to Collapse

tags: ["Voice Generation AI", "LLM", "FSM", "System Design", "Generative AI"]

---

## 🎧 Why Do Voice Generation AIs Break So Easily?  
### — 🤖 Why Directly Connecting an LLM Causes Failure

Voice generation AIs are **far more fragile than text generation systems**.  
However, this is not a problem of model performance or training data.

💡 **The root cause is structural design.**

In this article, we examine—through a **design and control perspective**—

- ❓ Why voice generation AIs fail so easily  
- ⚠️ Why directly connecting an LLM leads to accidents  
- 🧩 What kind of structure prevents failure  

---

## 🔚 Conclusion First

> 🧠 **Voice generation AI is not a generation problem — it is a control problem.**

The moment an LLM is placed at the center of speech generation,  
the voice AI becomes **almost guaranteed to be unstable**.

---

## ⏱ Why Voice Is Harder Than Text

### 📝 Text Is a “Static Medium”
- Can be generated in batches  
- Can be revised or rolled back  
- Even if partially broken, it remains readable  

### 🔊 Voice Is a “Time-Continuous Medium”
- Once spoken, sound cannot be erased  
- Latency directly destroys the experience  
- Any mid-stream failure is immediately obvious  

👉 In other words, voice is:

> 🎯 **A real-time control target**

---

## 💥 Typical Failure Patterns in Voice Generation AI

### ① 🗣 Endless Talking
- End-of-utterance conditions are ambiguous  
- LLM judges “continuing feels more natural”  

### ② 🔄 Fragile to Interruptions
- System collapses the moment a human speaks  
- Input and output collide  

### ③ 🧊 Silent Freezing
- System state becomes unclear  
- No defined condition to resume  

⚠️ All of these are caused by  
**design flaws, not model limitations**.

---

## 🔌 Why Directly Connecting an LLM Breaks the System

A common architecture looks like this:

```
🎤 Audio Input → 🤖 LLM → 🔊 Audio Output
```

Problems with this structure:

- LLMs **do not hold state**
- They cannot control time sequences
- End conditions are ambiguous
- Interruptions cannot be handled  

👉 Conclusion:

> ❌ **LLMs cannot sit at the center of a control loop**

---

## 🧭 Viewing Voice AI as an FSM Changes Everything

If we view voice AI as an  
**FSM (Finite State Machine)**, the structure becomes surprisingly simple.

### 📦 Typical States

- 💤 Idle  
- 👂 Listening  
- 🧠 Thinking  
- 🔊 Speaking  
- ✋ Interrupted  
- 🚨 Error / Fallback  

👉 With just these,  
**almost all behavior can be expressed**.

---

## 🏗 Correct Placement: LLM on the “Outside”

A stable architecture looks like this:

```
🧩 FSM (Control)
 ├─ 🎤 Audio Input
 ├─ 🔊 Audio Output
 └─ 🤖 LLM (content generation only)
```

The LLM’s responsibility is limited to:

- 📝 What to say  
- 🗨 How to structure the utterance  

Meanwhile, the FSM controls:

- ⏰ When to speak  
- 🛑 When to stop  
- ✋ Whether to interrupt  

---

## 🚫 Do NOT Optimize “Naturalness” in Voice Generation

The most dangerous mindset in voice AI design is:

> “Let’s make it sound more natural.”

⚠️ *Naturalness cannot be formally defined as an evaluation function.*  
Optimizing something that cannot be defined **inevitably leads to runaway behavior**.

What design must guarantee instead:

- ✅ Clear states  
- ✅ Explicit transition conditions  
- ✅ Safe recovery paths  

That is **control integrity**, not expressiveness.

---

## 🎭 Voice AI Is Not a “Conversation AI”

A common misconception:

- ❌ Conversation AI  
- ⭕ **State-transition AI**

Voice feels emotional, but internally,  
it is **pure mechanical control**.

---

## 📌 Summary

- 🎧 Voice generation AI is not a generation problem  
- ⏱ It is a time-series control problem  
- 🤖 Putting an LLM at the center causes failure  
- 🧩 Putting an FSM at the center brings stability  
- 🛰 The LLM belongs on the outside  

---

## 🔜 Next Article Preview

- 🧩 Concrete FSM designs for voice AI  
- ✋ Handling interruption, silence, and resumption  
- 🔌 Keeping speech generation out of the control loop  

Voice is fragile —  
**and that fragility is exactly what makes its design interesting.**

---

*(The GitHub-hosted Markdown is the canonical source; the Qiita version is a curated extract.)*
