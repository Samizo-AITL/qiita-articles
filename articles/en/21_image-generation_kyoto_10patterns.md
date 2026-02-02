---
layout: default
title: Qiita Articles
---

# 21.【Generative AI Experiment】How Much “Kyoto” Can Change  
## Comparing 10 Prompt Directive Variations in Image Generation

tags:
  - GenerativeAI
  - ImageGeneration
  - Prompt
  - Experiment
  - Kyoto

---

## 🎯 Introduction

When using image-generation AI, it’s easy to fall into this situation:

> *“The image looks plausible, but I don’t know why it turned out that way.”*

In this article,  
we **fix the theme to “Kyoto”**,  
and change **only the “directive words” inside the prompt** to observe:

- What changes  
- Which visual elements change  
- And how much they change  

🎯 **Goal**  
👉 To understand prompts  
**not as “magic spells,” but as control inputs**.

---

## 🧠 Why Choose “Kyoto”?

“Kyoto” is an excellent subject for observing image-generation behavior.

- 🏙 A real city with abundant training data  
- 🏯 A mix of tradition, tourism, daily life, and modern urban space  
- 🎨 Easily shifts between realism, illustration, and abstraction  

In short:

> **Small wording differences produce visually obvious changes**

This article is  
**not about finding the “correct” image, but about observing change**.

---

## 🔬 Experimental Conditions (Fixed Rules)

The following conditions are fixed throughout the experiment:

- Theme word: **Kyoto / 京都**
- Variables per run: **only one changed element**
- Models: DALL·E / Stable Diffusion / Midjourney, etc. (not specified)
- Observation targets:
  - Composition  
  - Atmosphere  
  - Realism  
  - Abstraction level  

🔬 *Ensure that “what was changed” is always unambiguous.*

---

## ⚙️ Base Prompt (Common to All Tests)

The following prompt is used as the **common base**,  
and only the differences are modified in each experiment.

```text
Kyoto landscape,
clean composition,
natural lighting,
no text, no logo, no watermark
```

⚙️ *The goal here is not to generate a “good” image,  
but to make differences easy to observe.*

---

## 🔬 “Kyoto” Fixed — 10-Pattern Experiment Table

| No. | Change Type | Prompt Difference | Main Visual Change | Observation Focus |
|----:|-------------|-------------------|-------------------|-------------------|
| 1 | Noun | `Kyoto landscape photograph` | Photo / tourism-like | Attraction to real locations |
| 2 | Noun | `Kyoto landscape illustration` | Poster / artwork style | Color and composition cleanup |
| 3 | Abstraction | `abstract visualization of Kyoto landscape` | Buildings dissolve | Atmosphere over meaning |
| 4 | Specificity | `realistic Kyoto street scene` | Everyday life, alleys | Increased realism |
| 5 | Emotion | `calm and quiet Kyoto landscape` | Static, low saturation | Light and color suppression |
| 6 | Emotion | `dramatic Kyoto landscape` | Overstaged visuals | Strong clouds and sunsets |
| 7 | Era | `Kyoto scenery in Edo period style` | Nihonga / woodblock style | Style overrides realism |
| 8 | Era | `modern Kyoto cityscape` | Contemporary urban feel | Deviation from “tourist Kyoto” |
| 9 | Viewpoint | `aerial view of Kyoto` | Bird’s-eye composition | Emphasis on geography |
|10 | Viewpoint | `street-level view of Kyoto` | Human-eye perspective | Depth and narrative |

---

## 🔬 Generated Image Comparison (10 Patterns)

![Kyoto 10 patterns experiment](https://samizo-aitl.github.io/qiita-articles/assets/images/image_generation/kyoto_10patterns_experiment.png)

*Figure 1: Ten generated results with “Kyoto” fixed,  
changing only directive words in the prompt.*

---

## 🧠 Observations and Findings

### ① The First Noun Defines the Worldview

- `photograph`
- `illustration`
- `visualization`

This **single noun at the beginning**  
almost completely determines the image’s direction.

🧠 *The most important word for locking the visual world.*

---

### ② Abstract Words Dissolve “Meaning”

Adding words like:

- `abstract`
- `dreamlike`
- `inspired by`

causes intentional ambiguity in:

- Building shapes  
- Road structures  
- Spatial consistency  

👉 **Ambiguity is not a bug, but an exploration parameter.**

---

### ③ Emotion Words Control Color and Light

- calm / quiet  
  → lower saturation, morning/evening light, mist  
- dramatic  
  → strong contrast, backlighting, dramatic clouds  

🧠 Emotion words do not control emotions,  
**they control visual staging**.

---

### ⚠️ ④ Era Specification Is the Strongest Parameter

Words like:

- `Edo period`
- `modern`

instantly override:

> architecture, clothing, color palette, and composition

⚠️ *Extremely powerful, but often ignores other instructions.*

---

### ⑤ Viewpoint Fixes the Composition

- `aerial view`
- `street-level view`

almost forcibly determine:

- Camera position  
- Depth  
- Information density  

👉 **If composition control is the goal, this should be prioritized.**

---

## ⚙️ Practical Implications

- 🎯 Eyecatch images  
  → Start with noun + emotion
- 📘 Educational diagrams  
  → Explicitly use `diagram / schematic / precise`
- 🎨 Atmospheric visuals  
  → Abstract terms + negative prompts
- 🔬 Comparative experiments  
  → Fixed theme + one-word difference

---

## ✅ Summary

- Prompts are not magic spells  
- Prompts are **control inputs**  
- Ambiguity is not bad — it is **data**  
- Changing just one word can dramatically alter results  

Start with:

**“Fixed theme × one-word difference”**

This is the fastest way to truly understand prompt behavior.

---

_End._
