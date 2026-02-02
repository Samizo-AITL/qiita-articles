---
layout: default
title: Qiita Articles 
---

# 15.【Rekiden】Start a Sengoku SLG Just by Pasting a Template into AI  
## The 1561 Battle of Kawanakajima Scenario

tags: [AI, ChatGPT, Game Design, Sengoku, Simulation]

---

## 🏁 Introduction

Do you still think:

> “Making a game means writing an engine”?

In this article, I introduce a design where **you write no code at all**,  
and instead use **AI like ChatGPT as the game engine itself**.

All you need is **a single template**.

---

## 🎮 Conclusion: Paste This Template into AI and the Game Starts

Paste the following **scenario template**  
directly into ChatGPT, Claude, Gemini, or any LLM.

---

### 📋 Game Scenario Template (Copy & Paste)

```text
■ Takeda Clan (Takeda Shingen) Template

[Play Log: The Battle of Kawanakajima (Takeda Shingen)]

■ Player Information
- Player Name: your_name_here
- Faction: Takeda Clan (Takeda Shingen)
- Initial Base: Tsutsujigasaki Residence (Kai Province)
- Retainers: Yamagata Masakage, Baba Nobuharu, Naitō Masatoyo,
             Kōsaka Masanobu, Sanada Yukitaka
- Initial Troops: 20,000

■ Scenario Information
- Title: The Battle of Kawanakajima
- Year: 1561
- Initial State: Facing the Uesugi army, on the eve of decisive battle
- Enemy Faction: Uesugi Clan (18,000 troops)
```

---

## ▶️ How to Start the Game (IMPORTANT)

After pasting the template, **you must explicitly start the game**.

Paste the following immediately after the template:

```text
Please start the game with this scenario.
You are the Game Master (GM).
I will choose actions as Takeda Shingen.

Describe the current situation first,
then present available actions.
```

---

## 🤔 What Happens Next?

The AI interprets the template as follows:

- You = **the player (a nation / faction)**
- AI = **the Game Master (GM)**
- Current state = **1561, the night before the decisive battle**

In other words, the AI will respond like:

> “You are Takeda Shingen.  
> The armies face each other at Kawanakajima.  
> What will you do next?”

And the game begins.

---

## ▶️ How to Play

The AI will describe the situation and propose options such as:

- Execute the Woodpecker Strategy (Kitsutsuki-senpō)
- Launch a night raid
- Prioritize reconnaissance
- Withdraw temporarily and reorganize

You respond freely, for example:

```text
Assign the detached force to Yamamoto Kansuke
and deploy before dawn.
```

→ **The game state updates and progresses**

---

## 🔍 Why This Works

### ① Structured Natural Language = State Machine

- Player definition  
- Initial state  
- Enemy faction  

This is effectively a **finite state machine (FSM)** written in natural language.

### ② Delegate the Hard Parts to AI

- Situation understanding  
- Branch generation  
- Narrative development  
- Outcome resolution  

All the parts that would be **painful to implement in code**  
are handled entirely by the AI.

---

## 📐 This Is Not an “Article” — It’s a Game Definition

This template is:

- A novel ❌  
- World-building notes ❌  
- Game code ❌  

👉 It is a **game engine definition written in natural language**.

That’s why it works immediately with:

- ChatGPT  
- Claude  
- Gemini  

Just paste and play.

---

## 🏯 The Rekiden Experiment

Rekiden is an experiment in:

> “History × Simulation × AI”

built with the **minimum possible structure**.

- No GUI  
- No rulebook  
- No implementation  

There is only **one template**.

---

## 🔧 Possible Extensions

This design is easy to extend:

- Define explicit victory conditions  
- Let AI handle probability (dice-style resolution)  
- Run the Uesugi clan with another AI in parallel  
- Turn it into multiplayer  

---

## ✍️ Closing

The assumption that  
“games must be built with code”  
is rewritten for the **AI era**.

This template is the **smallest possible implementation** of that idea.

If you’re curious,  
paste it into an AI and **fight Kawanakajima yourself**.

---

(To be continued: Rekiden Scenario Design)
