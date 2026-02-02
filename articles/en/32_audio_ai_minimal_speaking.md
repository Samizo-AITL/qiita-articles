---
layout: default
title: Qiita Articles
---

# 32.【Voice AI Design】Connecting Minimal Audio to an FSM  
## A First Utterance That Doesn’t Break — by Abandoning “Naturalness”

tags: ["Voice Generation AI", "FSM", "TTS", "Design Philosophy", "Generative AI"]

---

## 🔊 Connecting Minimal Audio to an FSM  
### — 🧪 A First Utterance That Doesn’t Break by Abandoning “Naturalness”

In the previous article (31), we decomposed voice AI and concluded that its true nature is an  
**FSM (Finite State Machine)**.

In this article, we connect **the smallest possible audio output** to that FSM.

⚠️ The goal here is *not* to sound natural.  
🎯 The goal is to **produce sound without breaking, and always return safely**.

---

## 🎯 Goal of This Article

- Output sound **only in the FSM’s Speaking state**  
- Treat the end of speech as an **explicit event**  
- Do **not** use an LLM yet  
- Prioritize **control integrity** over “human-like” behavior  

---

## 🧩 Overall Minimal Structure

```
🧩 FSM
 ├─ 🎤 Audio Input (dummy in this article)
 ├─ 🔊 TTS (minimal)
 └─ ⏱ Timer / Completion Event
```

👉 **Audio is subordinate to the FSM.**  
It must never speak on its own.

---

## 📦 FSM Involvement Points (Reconfirmed)

- 🧠 Thinking: not used this time  
- 🔊 Speaking: **the only state allowed to output sound**  
- 💤 Idle: must always be returned to  

Unless the FSM explicitly allows it,  
audio **will not start, continue, or replay**.

---

## 🔊 The Philosophy of Minimal TTS

We completely ignore “quality” at this stage.

- Single phrase  
- Single volume  
- Single speaking rate  
- No emotion  

Example:

> “System has started.”

That is more than enough.

---

## 🧪 Pseudocode (FSM × Minimal Audio)

```python
state = "Idle"

def on_event(event):
    global state

    if state == "Idle" and event == "start":
        state = "Speaking"
        play_tts("System has started.")

    elif state == "Speaking" and event == "tts_finished":
        state = "Idle"
```

🔑 Key points:

- `play_tts()` **does not change state**
- Speech completion is an **explicit `tts_finished` event**
- After Speaking ends, the FSM **always returns to Idle**

---

## ⏱ Never Decide Speech Completion by “Feeling”

❌ Common mistakes  
- “The sound stopped, so it must be done”  
- “It probably finished speaking”  

⭕ Correct approach  
- Receive a **completion event from the TTS engine**  
- Notify the FSM explicitly  

👉 **The FSM decides the transition.**

---

## ✋ Why Interruptions Are NOT Added Yet

Adding interruptions at this stage would:

- Increase the number of states  
- Explode transition complexity  
- Make it unclear whether sound actually played  

This article **intentionally keeps things simple**.

- No interruptions during Speaking  
- Sound finishes → return to Idle  

Interruptions come **next time (33)**.

---

## 🚫 What You Must NOT Do at This Stage

- ❌ Connect an LLM  
- ❌ Stream audio continuously  
- ❌ Tune naturalness, emotion, or prosody  
- ❌ Make it “conversational”  

👉 All of that comes **after the FSM is complete**.

---

## 🧠 What You Gain at This Stage

- Sound **always plays**
- No infinite talking
- No silent freezes
- You can always tell where it stopped

🎉 With just this,  
the system is already **more robust than most voice AI demos**.

---

## 📌 Summary

- 🔊 Output sound only in the Speaking state  
- 🧩 The FSM controls everything  
- ⏱ Speech completion is handled as an event  
- 🚫 Abandon naturalness  
- 🏗 A non-breaking minimal structure comes first  

---

## 🔊 Minimal Demo

A minimal demo is provided where sound is produced  
**only when the FSM allows it**.

▶ Demo  
https://samizo-aitl.github.io/qiita-articles/demos/audio-fsm-minimal/

This demo verifies that:

- Sound plays only in the Speaking state  
- Speech completion is detected via explicit events  
- Infinite talking and silent freezes do not occur  

---

## 🔜 Next Article (33)

- ✋ What happens when a human speaks during Speaking?  
- 🔄 Adding an interruption FSM  
- 🧪 Handling the most failure-prone moment in voice AI  

Next is the **hell chapter**.  
We handle **interruptions**.

---

*(The GitHub-hosted Markdown is the canonical source; the Qiita version is a curated extract.)*
