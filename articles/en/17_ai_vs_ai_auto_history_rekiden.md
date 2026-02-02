---
layout: default
title: Qiita Articles
---

# 17.【Rekiden】Let AI vs AI Drive History Automatically  
## Give It an Evaluation Function, and Sengoku Moves on Its Own

tags: [AI, ChatGPT, Game Design, Automation, Sengoku, Simulation]

---

## 🏁 Introduction

In Rekiden-15, we showed that  
**“just pasting a template into AI is enough to start a game.”**

In Rekiden-16, we clarified that  
**AI behaves as an FSM (Finite State Machine).**

Now comes the next question.

> Can history progress without a player?

The answer is **YES**.

---

## 🎯 Conclusion: Give AI an Evaluation Function, and It Will Fight on Its Own

The final key that turns AI into a game system is the:

**Evaluation Function**

- What is considered “good”
- What is considered “bad”

Once this is defined,  
**AI will keep choosing actions even without human input.**

---

## 🤖 What “AI vs AI” Means in Rekiden

In Rekiden, AI vs AI is defined as follows:

- Takeda AI: acts according to Takeda’s evaluation function
- Uesugi AI: acts according to Uesugi’s evaluation function
- Progression AI: manages state and transitions only

👉 The key idea is **role separation**.

---

## 🧮 Minimal Evaluation Functions

### Takeda Clan AI (Example)

```text
Evaluation Criteria:
- Preserve own troop strength
- Expand control over Shinano
- Ensure survival of key commanders
- Avoid reckless frontal assaults
```

### Uesugi Clan AI (Example)

```text
Evaluation Criteria:
- Superiority in direct confrontation
- Maintain morale
- Secure battlefield initiative
- Minimize withdrawals
```

This is already sufficient.

---

## 🔍 Why This Works

At each turn, the AI implicitly performs:

1. Understand the current state
2. Enumerate possible actions
3. Score each action using the evaluation function
4. Select the action that seems “best”

This is a textbook example of:

> **Decision-Making AI**

---

## 🔁 Example of AI vs AI Progression

```text
Turn 1:
Takeda AI: Prepares the Woodpecker Strategy (force preservation)
Uesugi AI: Fortifies positions and prepares to intercept
→ State: Sustained tension

Turn 2:
Takeda AI: Advances a detached force
Uesugi AI: Detects movement and shifts main forces
→ State: Local engagement begins

Turn 3:
Both AIs: Evaluation drops due to rising attrition
→ State: Full-scale battle
```

**No human input is involved.**

---

## 📜 This Is “Automatic War Chronicle Generation”

At this stage, Rekiden is no longer:

- A game ❌
- A novel ❌
- A historical explanation ❌

👉 It becomes an **automatic war chronicle generation system**.

With the same template:

- Change the evaluation function
- Change personality (cautious / aggressive)

and you get **a different history every time**.

---

## ⚖️ Plausibility Over Reproducibility

What matters is not:

> “Did it match historical fact?”

but rather:

- Does it feel plausible?
- Does it make sense for a Sengoku warlord?

Rekiden deliberately entrusts this judgment to  
**AI’s commonsense reasoning**.

---

## 🧭 The Endpoint of Rekiden

Across Rekiden-15 to 17, the system evolves as follows:

- **15_**: Template = initial state
- **16_**: AI = FSM
- **17_**: AI = decision-making agent

This results in:

> **A historical simulation that requires no game engine**

---

## ⚠️ What Makes This Dangerous (Important)

To be honest:

- It can generate infinite alternate histories
- It can progress beyond human intent
- It can mass-produce “plausible lies”

This power is **both strong and dangerous**.

Rekiden is also:

> **An experiment to observe that boundary**

---

## 🧪 Possible Directions Beyond 17_

- Numerical evaluation functions
- Alliances and betrayals between multiple AIs
- Year-by-year autonomous historical progression
- Educational and research-oriented simulators

Beyond this point,  
we are firmly in **research territory**.

---

## ✍️ Closing

AI is no longer merely  
“something that answers questions.”

It is an entity that **holds state, evaluates, and acts**.

Rekiden-17 marks the moment when:

> AI is promoted to a “subject of history” itself

---

(To be continued)
