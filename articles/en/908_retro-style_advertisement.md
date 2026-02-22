---
layout: default
title: qiita-articles
---

# 908. Creating a “Kansai TV Shopping–Style” Tech Stack Promo Image with Generative AI  
Character-Driven Prompt Engineering (Practical Example)

topics: ["GenerativeAI", "PromptEngineering", "GitHub", "GitHubPages", "Python", "VSCode"]

---

![Kansai TV shopping–style tech stack promo image](../../assets/images/900/908_retro-style_advertisement.png)

## 📌 Purpose of This Article

In this article, we examine how far generative AI image outputs can be pushed  
when **cultural context and character traits are specified very strongly**.

In article 907, we covered a *generic TV advertisement tone*.  
In 908, we go one step further by explicitly specifying:

- Kansai-style local TV shopping program  
- Cheerful “uncle and auntie” characters  
- 👍 thumbs-up gesture  
- Blazing fire background (intentionally excessive)

The result of these conditions is the image shown at the top.

---

## 🎯 Key Points

- The underlying tech stack is exactly the same:
  - GitHub  
  - GitHub Pages  
  - Python  
  - VSCode  
- Only the **presentation constraints** are changed  
- Character, gesture, and background instructions strongly affect the final output  

Generative AI tends to  
**prioritize visual and theatrical constraints over technical meaning**  
when filling the composition.

---

## ⚡ Base Prompt Used (English)

```text
A high-energy Japanese TV shopping advertisement, Kansai style.
Cheerful middle-aged Japanese man and woman, both giving a big thumbs-up gesture.
Exaggerated expressions, loud and friendly Kansai vibe.

Background is fully covered with dramatic blazing flames and spark effects.
Top headline text: “GitHub! Python! VSCode!”
Big central punch phrase in Japanese: “ITやで!”
Everything looks over-the-top, flashy, and intentionally excessive.

Include generic icon-like visuals for:
- GitHub
- Python
- A code editor (VSCode-like)

Poster layout, bold outlines, saturated colors.
No real brand logos, use look-alike icons.
High resolution, sharp readable text, no watermark.
```

---

## 🧩 Instructions That Had the Strongest Effect

The following instructions were particularly effective.

### 1️⃣ Gesture Specification

```text
both giving a big thumbs-up gesture
```

- Fixes the pose of the characters  
- Greatly stabilizes the perceived character identity  
- Without this, hand poses often become ambiguous  

---

### 2️⃣ Concrete Background Instead of Abstract Words

```text
Background is fully covered with dramatic blazing flames
```

- Concrete nouns like **fire, flames, explosions**  
  are reproduced far more reliably than abstract words like “energetic”

---

### 3️⃣ Explicit Cultural Context

```text
Kansai style
loud and friendly Kansai vibe
```

This affects:

- Japanese text phrasing  
- Degree of facial exaggeration  
- Color saturation and visual density  

---

## ⚠ Common Failure Patterns

| Issue | Mitigation |
|---|---|
| Broken text | Reduce small text elements |
| Logo distortion | Avoid official logos |
| Weak atmosphere | Specify background and gestures |
| Not ad-like enough | Use “exaggerated” / “over-the-top” |

---

## 🧪 Minimal Prompt Version

```text
Kansai-style Japanese TV shopping ad.
Cheerful middle-aged man and woman, both thumbs-up.
Blazing fire background, loud and flashy.
Headline: “GitHub! Python! VSCode!”
Big Japanese punch text: “ITやで!”
Poster layout, no watermark.
```

---

## ✅ Summary

- Generative AI is **highly sensitive to cultural, character, and motion cues**  
- The tech stack does not need to change to create a completely different impression  
- “Technology × Advertising Direction” is a practical communication method  

Article 907 shows a *general-purpose* pattern.  
Article 908 is a *fully pushed, exaggerated example*.

Possible next steps include:

- A reduced-text, higher-stability version  
- Exporting Kansai-style humor for an international audience  

That concludes this article.
