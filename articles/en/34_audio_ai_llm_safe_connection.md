---
layout: default
title: Qiita Articles
---

# 34.【Voice AI Design】Safely Connecting an LLM  
## Why It Belongs Only in the Thinking State

tags: ["Voice Generation AI", "LLM", "FSM", "Control Structure", "Generative AI Design"]

---

## 🤖 Safely Connecting an LLM  
### — 🧩 Why It Belongs Only in the Thinking State

Through the previous articles, the voice AI has already been transformed into a stable system:

- 🧩 Fully managed by an FSM  
- 🔊 Speaking is under strict control  
- ✋ Interruptions no longer cause collapse  

In other words, **the skeleton is complete**.

Only now is it safe to  
**bring the LLM back into the system.**

---

## 🎯 Purpose of This Article

- Reconfirm **where placing an LLM causes failure**  
- Determine **where placing an LLM does not break the system**  
- Present a **minimal and safe Voice × LLM coupling structure**  

👉 We are still not building a “chat AI.”  
**First, we decide on a placement that never causes accidents.**

---

## ❌ Places Where an LLM Must NOT Be Used (Reconfirmed)

### 🔊 Speaking
- Strict real-time constraints  
- Immediate stopping required  
- Streaming control involved  

👉 **LLMs are too slow**

---

### 👂 Listening
- Interruption decisions must be immediate  
- Physical signals are sufficient  

👉 **Semantic understanding is unnecessary**

---

### ✋ Interrupted
- Immediate transitions are critical  
- Any delay leads to failure  

👉 **There is no room for an LLM**

---

## ⭕ The Only Place Where an LLM Is Allowed

### 🧠 Thinking

The Thinking state:

- Has relaxed time constraints  
- Produces no sound  
- Is not interruption-sensitive  
- Returns results as text  

👉 **A perfect match for LLM characteristics.**

---

## 🧩 The Correct FSM × LLM Structure

```
🧩 FSM
 ├─ 👂 Listening
 ├─ 🧠 Thinking ──▶ 🤖 LLM (utterance content generation)
 ├─ 🔊 Speaking
 └─ ✋ Interrupted
```

Key principles:

- FSM → LLM is **one-way**
- The LLM **never changes state**
- The LLM **never issues commands**

👉 **The LLM is a component, not a controller.**

---

## 🔌 Information You May — and Must Not — Pass to the LLM

### ⭕ Safe to Pass
- The latest input text  
- The purpose of the utterance (e.g., reply, confirmation, rejection)  
- Maximum character length  
- Tone constraints (e.g., neutral, formal)

### ❌ Never Pass
- State transition rules  
- Interruption logic  
- Timing control  
- Continuation decisions  

👉 **The moment control information is passed, the system breaks.**

---

## 🧪 Pseudocode (FSM × LLM)

```python
if state == "Thinking":
    text = llm_generate(prompt)
    state = "Speaking"
    play_tts(text)
```

Key points:

- The LLM is called **only once per Thinking state**
- Its output is **just a string**
- The FSM alone decides the next state  

---

## 🚫 Common and Dangerous Anti-Patterns

### ❌ Asking the LLM “What should we do next?”
→ State management collapses

### ❌ Asking the LLM “Should I keep speaking?”
→ Infinite speech

### ❌ Letting the LLM decide interruptions
→ Immediate failure

---

## 🧠 Why This Structure Is Stable

- The FSM controls **time**
- The FSM controls **input and output**
- The FSM absorbs **exceptions**
- The LLM generates **meaning only**

👉 Responsibility separation is complete.

---

## 📌 Summary

- 🤖 Place the LLM only in the Thinking state  
- 🧩 The FSM always retains control  
- 🔊 Never put an LLM in Speaking  
- ✋ Never use an LLM for interruption decisions  
- 🏗 The LLM is “external intelligence,” not the core  

---

## 🏁 Series Conclusion

In this series, we fixed the structure of voice AI by establishing that:

- 🎧 Voice generation AI is a control problem, not a generation problem  
- 🧩 Systems centered on FSMs do not collapse  
- ✋ Interruptions are normal behavior, not exceptions  
- 🤖 LLMs must be confined strictly to the Thinking state  

Even so, many people will still say:

> 🎭 “I want it to feel more conversational”  
> 🤝 “I want it to feel like talking to a human”

But that is **not a design objective — it is a desire for performance.**

The minimum requirement for a voice AI to *appear intelligent*  
is **not** imitation of conversation.

It is simply this:

- States are explicit  
- Transitions are predictable  
- The system can always recover from failure  

That is **control integrity**.

This series ends by  
**breaking the illusion of conversational AI.**

Anything beyond this  
can be explored later — if and when it is truly needed.

---

*(The GitHub-hosted Markdown is the canonical source; the Qiita version is a curated extract.)*
