---
layout: default
title: Qiita Articles
---

# 16.【Rekiden】Using AI as an FSM Turns It into Game Design  
## Driving Historical Simulation with State Transitions

tags: [AI, ChatGPT, FSM, Game Design, Sengoku, Simulation]

---

## 🏁 Introduction

In the previous article (Rekiden-15),  
we demonstrated a rather bold—but practical—idea:

**“Just paste a template into AI, and the game starts.”**

Naturally, the next question arises:

> Why does that actually work as a *game*?

The answer is simple.

**Because the AI is behaving as an FSM (Finite State Machine).**

---

## 🎯 Conclusion: AI Can Be Used as a Natural-Language FSM

FSMs (Finite State Machines) are a foundation of game design.

- States  
- Transitions  
- Conditions  

In Rekiden, these are defined **not in code, but in natural language**.

---

## 🧱 FSM Structure of a Rekiden Scenario

### States

Example: The 1561 Battle of Kawanakajima scenario

```text
S0: Eve of the decisive battle (armies facing each other)
S1: Reconnaissance and scouting phase
S2: Localized engagement
S3: Full-scale battle
S4: Outcome determined
```

The AI always keeps track—verbally—of:

**“Which state are we in right now?”**

---

### Transitions

Player input directly becomes the transition condition.

```text
Conditions:
- Choose a night raid → S0 → S2
- Choose the Woodpecker Strategy → S0 → S3
- Choose withdrawal → S0 → S1
```

There are no explicit `if` statements.  
**Transitions are decided by semantic understanding.**

---

### State Transition Diagram (Conceptual)

```text
[S0 Eve of Battle]
      ↓ Player Action
[S1 Reconnaissance]
      ↓ Contact
[S2 Local Engagement]
      ↓ Escalation
[S3 Main Battle]
      ↓ Result
[S4 Outcome Determined]
```

This is a **pure FSM**.

---

## 🔍 Why AI Can Do This

### ① States Are Stored as Textual Meaning

The AI holds:

- Current battlefield situation  
- Force balance  
- Morale  
- Terrain  

not as rigid numbers, but as **semantic context**.

This is exactly how a human Game Master operates.

---

### ② Transition Conditions Can Be Fuzzy

In traditional FSM implementations, you write things like:

```text
if (hp < 0) gameover
```

With AI, it becomes:

> “This action is highly likely to collapse the battle line.”

→ **Transitions include probability, context, and historical plausibility.**

---

## 📐 The Rekiden Template Is an FSM Specification

Look again at the Rekiden-15 template:

```text
Initial State: Facing the Uesugi army, on the eve of decisive battle
Enemy Faction: Uesugi Clan (18,000 troops)
```

In code terms, this is equivalent to:

```text
state = S0
enemy_power = high
```

In other words:

> **The template = initial state definition**

---

## ✅ Advantages of Using AI as an FSM

### ✔ No Implementation Required
- No engine
- No state management code

### ✔ Robust Against Branch Explosion
- Unexpected player actions rarely break the system

### ✔ Natural Historical Bias
- The AI judges “Is this plausible in historical context?”

---

## ⚠️ There Are Drawbacks

To be honest:

- No perfect reproducibility  
- Weak numerical precision  
- Impossible to debug  

But this is exactly the same nature as:

> **Tabletop RPGs (TRPGs)**

Rekiden is **not a numeric SLG**,  
but a **design-oriented SLG**.

---

## 🔁 What Changed from 15_ to 16_

- **15_**  
  Paste the template → Play
- **16_**  
  Understand it as an FSM → Design

Here, Rekiden takes a step:

> From “playing” to “designing”

---

## 🚀 Next Step (Preview of 17_)

Once you understand Rekiden as an FSM, the next phase is:

- Formalizing victory and defeat conditions  
- Evaluation functions (morale, attrition, time)  
- **AI vs AI autonomous progression**

In Rekiden-17,  
history will **advance without human intervention**.

---

## ✍️ Closing

AI is not just a convenient text generator.

It is an entity that **holds state, transitions, and evaluates outcomes**.

Once you accept that,  
a game engine **no longer needs to be written in code**.

Rekiden is that experiment.

---

(To be continued: Rekiden-17 — AI vs AI Autonomous War Chronicle)
