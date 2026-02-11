---
layout: default
title: Qiita Articles
---

# 40. [IEEE Paper] A Minimal LaTeX Structure for Finishing Control Systems Papers Without Breakage (IEEEtran PoC)
tags: LaTeX, IEEE, ControlSystems, PaperWriting, IEEEtran

---

## 🎯 What this article covers

In the previous article (39),  
I described how I first fixed the environment and workflow  
before writing an IEEE Control Systems paper in LaTeX.

This article is the continuation.

Here, I directly present:

> **A minimal LaTeX structure that can survive all the way to the end  
> of an IEEE Control Systems paper.**

- I do not explain the paper’s technical content  
- I do not explain control theory  

I focus **only on the LaTeX structure**.

---

## 📌 Assumptions (the reality of Control Systems papers)

IEEE Control Systems papers (e.g., TCST) usually require all of the following:

- IEEEtran two-column format  
- Equations (PID, state-space)  
- Figures (block diagrams, FSMs)  
- Tables (experimental conditions, KPIs)  
- Appendices  
- Author biography  

In other words:

> **If you add these elements later, the structure will almost certainly break.**

Therefore, in this PoC:

> **The LaTeX structure is designed from the beginning  
> with a “finish-ready” state in mind.**

---

## 🗂 Overall structure (overview)

```
2025_HUMANOID_TCST/
├─ main.tex            % control tower
├─ abstract.tex
├─ intro.tex
├─ related.tex
├─ system.tex
├─ results.tex
├─ discussion.tex
├─ conclusion.tex
├─ refs.bib
├─ figures/
└─ appendices/
```

Key points:

- **`main.tex` is minimal and fixed**
- All content is separated using `\input{}`
- Appendices and biography are assumed from the start

---

## 🧩 Minimal `main.tex` skeleton

```latex
\documentclass[journal]{IEEEtran}

% ===== Packages =====
\usepackage{amsmath,amssymb,amsfonts}
\usepackage{graphicx}
\usepackage{booktabs}
\usepackage[caption=false,font=footnotesize]{subfig}
\usepackage{cite}
\usepackage{url}
\usepackage{newtxtext,newtxmath}
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,fit,backgrounds,calc}
\usepackage{hyperref}

\begin{document}

\title{Cross-Node Humanoid Robot Control: FSM, PID, State-Space and LLM Integration}
\author{Shinichi Samizo,~\IEEEmembership{Member,~IEEE}}

\maketitle

\input{abstract}

\begin{IEEEkeywords}
Humanoid Robots, Fault-Tolerant Control, FSM, PID, State-Space Methods, LLM
\end{IEEEkeywords}

\input{intro}
\input{related}
\input{system}
\input{results}
\input{discussion}
\input{conclusion}

\bibliographystyle{IEEEtran}
\bibliography{refs}

\end{document}
```

At this stage, the only thing that matters is:

> **Does this structure compile cleanly all the way to the end?**

---

## 🧠 Why `\input{}`-based modularization is essential

Control Systems papers inevitably grow later with equations, figures, tables,  
and appendices.

Keeping everything in a single file makes:

- Git diffs unreadable  
- Refactoring risky  
- Debugging painful  

`main.tex` should remain:

> **A control tower that defines structure only.**

---

## ⚠️ Planning appendices and biography from the beginning

In IEEE papers, the following are common pitfalls:

- Appendix table numbering  
- Biography placement  

This PoC assumes from the start that:

- `\appendices`
- `\begin{IEEEbiographynophoto}{...}`

will be used.

👉 **Do not add them later.**

---

## 🧨 Preventing BibTeX failures during early drafts

When references are empty, BibTeX may fail.

A temporary workaround is:

```latex
\nocite{*}
```

Remove it before submission.

---

## 🚀 What this structure enables

- Safe addition of figures, equations, and FSMs  
- Appendices that grow without breaking layout  
- A paper that can be completed including biography  

In short:

> **Only the content remains to be written.**

---

## ✅ Summary

- IEEE Control Systems papers are **mostly structure design**  
- Creating a LaTeX PoC first is highly effective  
- `main.tex` should stay **minimal and fixed**

---

## 🔜 Next article

👉 **The final destination of the IEEE Control Systems LaTeX PoC (completed PDF link)**
