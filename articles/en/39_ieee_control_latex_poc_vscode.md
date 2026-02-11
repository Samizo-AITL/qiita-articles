---
layout: default
title: Qiita Articles
---

# 39. 【Paper Writing】 Preparing the LaTeX Environment for an IEEE Control Systems Paper
tags: LaTeX,IEEE,ControlEngineering,PaperWriting,VSCode

---

## 📝 Introduction

When writing an IEEE Control Systems paper (e.g., TCST),  
many authors get stuck **before the technical content itself** — at the LaTeX stage.

Typical problems include:

- Figures floating unpredictably  
- Tables breaking in two-column layout  
- Appendices turning into chaos  
- Author biographies not appearing at the end  

In this article, instead of discussing the technical content of the paper,  
I focus on the following experiment:

> **“Building a LaTeX structure that can survive all the way to the end  
> for an IEEE Control Systems paper.”**

This article is a **🧪 work-in-progress log** of that experiment.

---

## 🤔 Why I fixed the LaTeX structure first

Control Systems papers usually require **all of the following at once**:

- Two-column layout (IEEEtran)  
- Equations (PID / state-space)  
- FSM and block diagrams  
- Tables (experimental conditions, KPIs)  
- Appendices  
- Author biography  

In other words:

> **If you try to add these later, something will almost certainly break.**

So in this experiment:

- The content was allowed to be provisional  
- The results were allowed to be weak  

Instead, the priority was to prepare:

> **A LaTeX structure that would not collapse before reaching the end.**

---

## 🛠 Working environment

- Editor: VS Code  
- Class: `IEEEtran` (journal)  
- Build: Local LaTeX environment  

The actual working state looked like this:

![VS Code + IEEEtran working setup](https://github.com/Samizo-AITL/qiita-articles/blob/main/assets/images/39_1.png?raw=true)

---

## 🗂 Initial directory structure

Rather than writing everything in a single file,  
I started with a **modular structure** from the beginning.

```text
2025_HUMANOID_TCST/
├─ main.tex
├─ abstract.tex
├─ intro.tex
├─ related.tex
├─ system.tex
├─ results.tex
├─ discussion.tex
├─ conclusion.tex
├─ refs.bib
└─ figures/
```

Key points:

- `main.tex` acts as the **control tower**  
- All content is included via `\input{}`  
- Appendices and the biography are assumed from the start  

---

## ⛔ Do not “finish” at this stage

At this stage, it is important:

- Not to complete the PDF yet  
- Not to explain results  
- Not to explain theory  

The only question to answer is:

> **“Can this structure survive all the way to the end?”**

---

## 🎯 Goal of this experiment

At this point, the goals were:

- The IEEEtran two-column layout does not break  
- Appendices and the biography coexist correctly  
- Adding figures, tables, and equations does not destroy the structure  

The paper content itself can be **replaced later without pain**.

---

## 🔜 Next article

Next, I will publish:

- The minimal `main.tex` skeleton  
- Package selection rationale  
- A **finish-ready structure** including appendices and biography  

👉 **Minimal LaTeX structure PoC for IEEE Control Systems papers**

---

## ✅ Summary

- Many papers fail not because of content, but because of **structure**  
- Creating a LaTeX PoC first is surprisingly effective  
- This article is a **work log** of that experiment  

Next, I will present the structure itself.
