---
layout: default
title: Qiita Articles
---

# 23.【Generative AI Experiment】Japanese vs English  
## Same Meaning, Different Results in Image Generation Prompts

tags:
  - GenerativeAI
  - ImageGeneration
  - Prompt
  - Experiment
  - Japanese
  - English

---

## 🎯 Introduction

In image-generation AI, the following situation occurs frequently:

> *“The instruction means the same thing, but the result is different.”*

This phenomenon is especially pronounced when comparing  
**Japanese prompts and English prompts**,  
and it cannot be dismissed as a simple translation issue.

In this article, under **the same theme and conditions**, we compare:

- Japanese-language prompts  
- English-language prompts  

to clarify:

- Why differences occur  
- Where those differences appear  

🎯 *The core focus of this article is to show that **language itself is a design variable**.*

---

## 🧭 Position of This Article

This article is a continuation of the following experiment series:

- Part 1: Kyoto landscapes (10 directive variations)  
- Part 2: Temple architecture (10 directive variations)

In the first two experiments, we observed:

- What to specify  
- Which layer it affects (atmosphere / structure)  
- And how it takes effect  

This time, we keep the theme the same and treat  
**the language of the prompt itself as the variable**.

🧭 *The goal is to isolate the effect of “the language used,” not the content of the instruction.*

---

## 🔬 Experimental Conditions (Fixed Rules)

All of the following are fixed:

- Theme: **Japanese temple architecture**
- Models: DALL·E / Stable Diffusion / Midjourney, etc. (not specified)
- Variable: **prompt language only**
- Comparison targets:
  - Composition stability  
  - Structural preservation  
  - Stylistic consistency  
  - Staging (color, light, atmosphere)  

🔬 *All variables except language are eliminated to make differences explicit.*

---

## ⚙️ Base Prompts (Japanese / English)

### 🇯🇵 Japanese Base Prompt

```text
日本の寺院建築,
木造構造,
落ち着いた雰囲気,
自然な光,
文字なし, ロゴなし
```

---

### 🇺🇸 English Base Prompt

```text
Japanese temple architecture,
wooden structure,
calm atmosphere,
natural lighting,
no text, no logo
```

※ The semantic content is intentionally aligned.

⚙️ *This comparison focuses on interpretation, not translation accuracy.*

---

## 🔬 Generated Result Comparison (Japanese vs English)

![Japanese vs English prompt comparison](https://samizo-aitl.github.io/qiita-articles/assets/images/image_generation/japanese_vs_english_prompt_comparison.png)

*Figure 1: Comparison of generated results under the same theme and conditions,  
showing how outputs differ between Japanese and English prompts.*

---

## 🧠 Key Observed Differences

### ① Structural Stability

- **Japanese**
  - Roofs and columns tend to fluctuate
  - Architectural styles are more likely to mix
- **English**
  - Structural elements are stable
  - Roofs, axes, and column layouts remain consistent

👉 **If structural control is the goal, English is overwhelmingly superior.**

---

### ② Atmospheric Expression

- **Japanese**
  - More emotional and expressive
  - Mist, dusk scenes, and Nihonga-like aesthetics appear frequently
- **English**
  - Atmosphere is more restrained
  - Light sources and saturation are controllable

🧠 Japanese strongly affects the  
**emotional and staging layers**.

---

### ③ Behavior of Abstract Terms

Even when the intended meaning of “abstract” is the same:

- Japanese  
  → Painterly, impressionistic tendencies
- English (`abstract`)  
  → Simplification of form while preserving structure

👉 **English abstraction is closer to “technical abstraction.”**

---

### ⚠️ ④ Differences in Era Specification

#### Japanese
```text
江戸時代の寺院建築
```

- Nihonga-like rendering
- Atmosphere prioritized
- Lower realism

#### English
```text
Edo period Japanese temple architecture
```

- Architectural style is fixed
- Roof shapes and ornamentation are stable
- Higher realism

⚠️ *Era specification is far more reproducible when written in English.*

---

## 🧠 Why These Differences Occur

### ① Difference in Training Data Volume

- English: overwhelmingly large
- Japanese: limited in both volume and granularity

👉 English prompts are often **interpreted directly**,  
👉 Japanese prompts tend to go through **translation and reinterpretation**.

---

### ② Difference in Term Density

In English:

- architecture  
- structure  
- lighting  

are **fixed technical terms**.

In Japanese:

- Interpretation depends more on context  
- Emotional nuance is easily introduced  

---

## ⚙️ Language Usage Guidelines (Important)

| Purpose | Recommended Language |
|------|----------------------|
| Structural control | English |
| Reproducibility | English |
| Comparative experiments | English |
| Atmosphere and emotion | Japanese |
| Japanese-style expression | Japanese |

👉 **It’s not about which is correct, but that they serve different roles.**

---

## ⚙️ Practical Implications

- 🔬 Analysis and validation  
  → Use English prompts as the baseline
- 🎨 Expression and world-building  
  → Combine with Japanese prompts
- 🧱 Serious control  
  → English primary + Japanese supplementary

---

## ✅ Summary

- Even with the same meaning, different languages produce different results
- Japanese excels at **emotional control**
- English excels at **structural control**
- Prompt language is **one of the design variables**

By being conscious of language choice,  
image generation shifts **from randomness to control**.

---

## Closing Remarks

In this article, we compared **Japanese and English prompts**  
under the same theme and conditions.

What became clear is that language differences are not merely superficial,  
but act as **independent design variables in image generation**.

- Japanese strongly influences emotion and staging  
- English provides stable control over structure and reproducibility  

Rather than deciding which is “better,”  
the key is recognizing their **different functional roles**  
and using them appropriately based on purpose.

When prompts are treated not as spells,  
but as **decomposed control inputs**,  
image generation moves away from chance  
and closer to intentional design.

---

_End._
