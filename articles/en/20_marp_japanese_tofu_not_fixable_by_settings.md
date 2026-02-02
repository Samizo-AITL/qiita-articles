---
layout: default
title: Qiita Articles
---

# 20.【Marp】Why Japanese “Tofu” (□) Cannot Be Fixed by Settings  
## The Structural Relationship Between PPTX and Fonts

tags:
  - Markdown
  - Marp
  - PowerPoint
  - Fonts
  - GitHubActions

---

## 🎯 What This Article Is About

In the previous article,  
I described how **Japanese text turns into □ (tofu)** when generating PPTX files with  
**Marp × GitHub Actions**.

👉 This is **not a solution article**.

This article has only one purpose:

> **To explain, structurally, why Japanese tofu cannot be fixed by “tweaking settings.”**

---

## Conclusion (Up Front)

**Japanese tofu is not caused by missing Marp settings.**  
**It is a structural consequence of how PPTX and fonts work.**

Therefore:

- Changing the viewer  
- Replacing fonts in PowerPoint  
- Temporarily “fixing” it locally  

may appear to work, but:

**the problem will reappear in CI.**

---

## 🧠 What “Tofu” (□) Really Is

First, the basics.

- □ is not character encoding corruption  
- It is not a UTF-8 issue  

It simply means:

**The font does not contain the glyph for that character.**

In PPTX:

- A specific font is assigned  
- If that font lacks a glyph  

PowerPoint may **render □ instead of falling back**.

---

## 💣 Why This Happens So Easily with Marp + PPTX

### The Core Problem: `code` / `pre`

In Marp:

- Inline code  
- Code blocks  

are rendered using **monospace fonts**.

However:

- Most monospace fonts  
- **do not contain Japanese glyphs**

As a result:

- HTML: browsers automatically apply font fallback  
- PPTX: font is fixed → □ appears  

👉  
This is the **main reason** why  
“it looks fine in HTML but breaks in PPTX.”

---

## ❌ Why It Feels Like “Settings Fixed It”

Common attempts:

- Replacing fonts in PowerPoint  
- Changing the viewer  
- Installing Japanese fonts locally  

These may indeed:

- Fix it *temporarily*  
- Fix it *on that machine*  

But in CI:

- The environment is not the same  
- The viewer does not exist  

👉  
**Fixes without reproducibility are meaningless in CI.**

---

## 🔁 Why the Problem Reappears in CI

In CI environments:

- OS images are clean  
- Fonts are minimal  
- No viewer behavior is involved  

In other words:

> **“It worked locally” guarantees nothing.**

The reappearance of tofu in CI  
is **expected behavior**, not an anomaly.

---

## 🧩 Where the Only Correct Fix Actually Is

The conclusion is clear.

- Not PowerPoint  
- Not the viewer  
- Not GitHub Actions  

👉  
**The only reproducible fix point is font specification  
in Marp front matter (CSS) from the start.**

That is the **only place** where behavior can be controlled consistently.

---

## ⚠️ Why This Still Isn’t a “Perfect Solution”

To be honest:

- Few monospace fonts fully support Japanese  
- Font fallback differs by environment  
- PPTX itself is a black box  

Which means:

> **There is currently no 100% safe configuration.**

What you *can* do is:

- Minimize recurrence probability  
- Avoid known landmines  

That’s the realistic limit.

---

## 🧠 Practical Judgment Rule

When in doubt, ask this one question:

> **Is this actually “code”?**

- YES → use `code` / `pre`  
- NO → use normal text  

**Do not put Japanese explanations inside code blocks.**  
This alone eliminates most incidents.

---

## Summary

- Japanese tofu is not a bug  
- It is not a misconfiguration  
- It is a **structural issue of PPTX and fonts**

Therefore:

- Tuning settings won’t solve it  
- Changing environments won’t prevent recurrence  

This is a problem that must be  
**understood and avoided**, not “fixed.”

---

## 📌 Final Takeaway (One Line)

> **Japanese tofu is not a problem that can be solved by configuration.**

---

### Related Articles

- **18**  
  Creating Presentation Slides (HTML / PPTX) from Markdown in VS Code【Marp】

- **19**  
  Trying to Auto-Generate Slides from Markdown with GitHub Actions — and Getting Stuck on Japanese “Tofu”【Marp】

---

_End._
