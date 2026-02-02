---
layout: default
title: Qiita Articles
---

# 22.【Generative AI Experiment】Verifying with Temple Architecture  
## Comparing 10 Prompt Directive Variations in Image Generation

tags:
  - GenerativeAI
  - ImageGeneration
  - Prompt
  - Experiment
  - Architecture
  - Temple

---

## 🎯 Introduction

In the previous article, we used **“Kyoto landscapes”** as the theme and examined  
**how differences in prompt directive words affect image-generation results**.

This article is a continuation of that experiment.  
Here, we fix the theme to **“Temple Architecture”** and apply the same comparative method.

Unlike landscapes, architecture has clearly defined:

- Form  
- Structure  
- Style  
- Constraints  

As a result, **prompt directives act much more like explicit design inputs**.

🎯 *This experiment focuses not on mood, but on how structural directives take effect.*

---

## 🧠 Why Choose “Temple Architecture”?

Temple architecture is an excellent subject for image-generation experiments.

- 🏯 Highly standardized structures (roofs, columns, axes)  
- ⏳ Clear distinctions between eras and styles  
- 🧱 Difficult to completely collapse even when abstracted  

In short:

> **The difference between vague and precise instructions becomes visually obvious**

If the previous “landscape” experiment leaned toward atmosphere,  
this one is firmly **structure- and design-oriented**.

---

## 🔬 Experimental Conditions (Fixed Rules)

The following conditions are fixed throughout the experiment:

- Theme keyword: **Japanese temple architecture**
- Variables per run: **only one changed element**
- Models: DALL·E / Stable Diffusion / Midjourney, etc. (not specified)
- Observation targets:
  - Structural clarity  
  - Stylistic consistency  
  - Degree of abstraction  
  - Staging (light and composition)  

🔬 *Variables are minimized so that the effective change can be clearly identified.*

---

## ⚙️ Base Prompt (Common)

The following prompt is used as the **common base**,  
and only the differences are modified in each experiment.

```text
Japanese temple architecture,
wooden structure,
clean composition,
natural lighting,
no text, no logo, no watermark
```

⚙️ *Priority is given to observing differences, not overall image quality.*

---

## 🔬 “Temple Architecture” Fixed — 10-Pattern Experiment Table

| No. | Change Type | Prompt Difference | Main Visual Change | Observation Focus |
|----:|-------------|-------------------|-------------------|-------------------|
| 1 | Noun | `photograph of Japanese temple architecture` | Photo-like realism | Attraction to real temples |
| 2 | Noun | `illustration of Japanese temple architecture` | Iconic rendering | Organized composition and color |
| 3 | Abstraction | `abstract visualization of temple architecture` | Simplified forms | Limits of structural retention |
| 4 | Specificity | `realistic wooden temple structure` | Structural emphasis | Clear columns and beams |
| 5 | Emotion | `calm and quiet temple architecture` | Static feeling | Reduced saturation and staging |
| 6 | Emotion | `dramatic temple architecture` | Theatrical | Emphasized light and shadow |
| 7 | Era | `Edo period Japanese temple architecture` | Style fixation | Era overrides realism |
| 8 | Contemporary | `modern reinterpretation of temple architecture` | Reinterpretation | Changes in materials and form |
| 9 | Viewpoint | `aerial view of temple complex` | Bird’s-eye layout | Placement and axiality |
|10 | Viewpoint | `interior view of temple hall` | Interior space | Column layout and depth |

---

## 🔬 Generated Image Comparison (10 Patterns)

![Temple architecture 10 patterns experiment](https://samizo-aitl.github.io/qiita-articles/assets/images/image_generation/temple_10patterns_experiment.png)

*Figure 1: Ten generated results with temple architecture fixed,  
changing only directive words in the prompt.*

---

## 🧠 Observations and Findings

### ① In Architecture, “Structural Words” Have Top Priority

Words such as:

- `architecture`
- `structure`
- `wooden`

constrain output **far more strongly than in landscape themes**.

👉 In architectural prompts,  
**noun precision directly equals structural precision**.

---

### ② Even When Abstracted, Structure Does Not Fully Collapse

Even with `abstract visualization` specified, elements such as:

- Layered roofs  
- Vertical–horizontal relationships  
- Symmetry  

are preserved to a certain degree.

🧠 Temple architecture is a **structurally robust subject**.

---

### ③ Emotion Words Act on the “Decorative Layer”

- calm  
  → lower saturation, uniform lighting  
- dramatic  
  → backlighting, strong contrast  

Rather than altering the building itself,  
these words mainly affect **light, sky, and surrounding elements**.

---

### ⚠️ ④ Era Specification Completely Overrides Style

Terms like `Edo period` instantly fix:

- Architectural forms  
- Ornamentation  
- Color palettes  

⚠️ *Extremely powerful, but prone to overriding other instructions.*

---

### ⑤ Viewpoint Changes “How the Structure Is Understood”

- aerial view  
  → understanding layout and temple complex composition  
- interior view  
  → understanding column grids and spatial scale  

👉 **Choose the viewpoint based on what you want the viewer to understand**.

---

## ⚙️ Practical Implications

- 🧱 Architectural visuals  
  → **Place material and structural terms first**
- ⏳ When unifying style  
  → **Prioritize era specification**
- 📘 For explanatory purposes  
  → **Viewpoint specification is critical**

---

## ✅ Summary

- In architectural themes, prompts function almost as **design constraints**
- Even with abstraction, structure does not break easily
- Compared to landscapes, **logical difference observation is much clearer**

By progressing from **landscape → architecture**,  
one gains a deeper understanding of how image-generation prompts operate.

---

_End._
