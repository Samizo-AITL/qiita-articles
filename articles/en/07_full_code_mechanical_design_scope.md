---
layout: default
title: Qiita Articles
---

# 07. FreeCAD, LaTeX, and Klayout Are the Same  
## — The Common Structure of Full Code Design
tags: Mechanical Design, CAD, FreeCAD, LaTeX, Klayout, RTL, Git

---

## 🏁 Introduction (Final Article)

Throughout this series, we have covered:

- 🧩 Using FreeCAD in a **code-driven** way  
- 🔀 How to divide responsibilities between GUI and code  
- 🔍 Turning designs into **meaningful diffs** with Git  

In this final article, I want to zoom out  
and make **one clear statement**:

> 💡 **FreeCAD, LaTeX, Klayout, and even RTL  
> are all doing exactly the same thing.**

There is no difficult theory here.  
This is a **structural explanation**, optimized for Qiita.

---

## 🔑 The Most Important Rule of Full Code Design

Let’s start with the conclusion.

> 🧱 **Never edit the final artifact directly.  
> Edit only the source that generates it.**

That’s it.

- ❌ Do not edit drawings directly  
- ❌ Do not modify PDFs by hand  
- ❌ Do not edit GDS files directly  

👉 **Always modify the source code.**

This single rule is the boundary between  
**Full Code design and everything else**.

---

## 🛠 The Case of FreeCAD

### 😵 Typical GUI-Based Design

- Edit sketches  
- Manually change dimensions  
- Forget what the previous state was  

👉 Diffs are unclear  
👉 Design intent disappears  

---

### ✅ Code-Driven Design (Articles 03–06)

```text
Design code (.py / Spreadsheet)
        ↓
Geometry generated in FreeCAD
        ↓
STEP / Drawings
```

- 🟢 The source of truth is **code**  
- 👀 CAD is for **visualization and verification**  
- 🔄 Changes appear as **code diffs**  

👉 Reviewable in Git  
👉 Regeneratable at any time  

---

## 📄 The Case of LaTeX

This is the most familiar example.

```text
design.tex
    ↓
pdf
```

- 🟢 `.tex` is the source of truth  
- 📄 `.pdf` is a generated artifact  
- ✏ Fixes always go back to `.tex`  

No one says:

> “Let’s just fix the PDF directly.”

👉 **FreeCAD should follow the same structure.**

---

## 🧬 The Case of Klayout (Semiconductor Layout)

Exactly the same applies to Klayout.

```text
.ly / .py
    ↓
GDS
```

- ❌ Do not edit GDS directly  
- 🟢 Generation scripts are the source  
- 🔍 Diffs live in `.ly` / `.py`  

👉 Rules are preserved  
👉 Derived designs are easy  

---

## ⚙️ The Case of RTL (Verilog, etc.)

RTL design follows the same rule.

```text
design.v
    ↓
netlist / layout
```

- 🟢 `.v` is the authoritative design  
- 🧱 Netlists are generated artifacts  
- 🔍 Reviews happen on code diffs  

👉 **Editing the artifact is a losing move**  
in this world.

---

## 🧩 One Structure, Everywhere

The tools are different,  
but the **structure is identical**.

| Domain | 🟢 Source of Truth (SSOT) | 📦 Generated Artifact |
|---|---|---|
| FreeCAD | Python / Spreadsheet | STEP / Drawings |
| LaTeX | `.tex` | PDF |
| Klayout | `.ly` / `.py` | GDS |
| RTL | `.v` / `.sv` | Netlist |

👉 **Source = Code**  
👉 **Artifacts are always regenerated**

---

## ✅ How to Tell If It’s Full Code Design

If you are unsure in practice, ask just these questions:

- 🔧 When making a change, what do you edit?
  - ❌ PDF / CAD / GDS  
  - ✅ Code  
- ♻ Can you delete the artifact and regenerate it?
- 🔍 Can you review changes via Git diffs?

If the answers are YES,  
that design is **Full Code**.

---

## ⚖ You Don’t Have to Code Everything

This is often misunderstood.

You do **not** need to code:

- 🎨 Minor aesthetic tweaks  
- 🧪 Final manual adjustments  
- ⏱ One-off explorations  

What matters is:

> 🧠 **Only encode what you want to explain later.**

---

## 💪 Why This Is Powerful

- 🔁 Design changes become diffs  
- 🗣 Reviews become possible  
- 🤝 Handover becomes easier  
- ❓ “Why is it like this?” is preserved  

This is not about automation.

👉 It is about **treating design as an asset**.

---

## 🏁 Final Words

What this entire series has tried to say  
from start to finish is just one thing:

> 🏗 **Design is not about producing artifacts.  
> It is about preserving the rules that generate them.**

Whether it is FreeCAD, LaTeX, Klayout, or RTL,  
**the structure is the same**.

In the future, when you hear phrases like:

- “Let’s manage CAD with code”
- “Let’s generate PDFs via CI”

I hope this series helps you judge  
whether that approach will **empower design or break it**.

---

**✨ Full Code Mechanical Design / End ✨**
