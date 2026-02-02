---
layout: default
title: Qiita Articles
---

# 01. From GUI CAD to Code-Based Mechanical Design
tags: Mechanical Design, CAD, Python

---

## Introduction

Most mechanical design work today is done using GUI-based CAD tools.  
But have you ever thought:

> “If someone asked me to recreate this design from scratch, it would be a pain.”

To treat design as a **reusable asset**, I choose to describe designs not through GUI operations, but as **code**.

In this article, I introduce this approach as  
**Full Code Mechanical Design**.

---

## The Limitations of GUI CAD

GUI CAD tools are extremely convenient for creating geometry.  
However, they have a fundamental weakness: **design intent is hard to preserve**.

For example:

- Why was this dimension chosen?
- Under what conditions does the shape change?
- Can this design be reused for another project?

Such information tends to be buried in operation histories or lost entirely.

As a result, designs often become **one-off deliverables**,  
making reuse and automation difficult.

---

## Thinking of Design as Code

When people hear “designing with code,” they may think:

> “Are you saying we should abandon CAD?”

That is not the point.

By “coding a design,” I mean:

- Expressing dimensions as **parameters**
- Expressing design decisions as **conditional logic**
- Expressing design rules as **functions and structures**

The focus shifts from the final geometry itself to  
**the rules that generate the geometry**.

---

## What Is Full Code Mechanical Design?

In Full Code Mechanical Design:

- Drawings and GUI operations are not the final deliverables
- The true design artifact is the **code**
- CAD is used for visualization and verification

Because the code directly contains:

- Dimensional dependencies
- Constraints
- Design intent

you can later understand **why the design is the way it is**.

---

## GUI Operations vs Code-Based Design

The difference between GUI CAD and code-based design can be summarized as follows:

| Aspect | GUI CAD | Code-Based Design |
|---|---|---|
| Reproducibility | Person-dependent | High |
| Change tracking | Difficult | Easy with Git |
| Design intent | Hard to preserve | Explicit |
| Reusability | Manual | Parameter-driven |

The ability to track differences is especially powerful for  
design reviews and long-term maintenance.

---

## Who Is This Approach For?

This approach is not suitable for every designer.

It works especially well for people who:

- Rebuild designs repeatedly
- Create many similar parts or variants
- Want to share or teach design rules
- Are comfortable with programming languages like Python

For single, one-off designs, GUI CAD may still be faster.

---

## How to Start Small

You don’t need to convert everything into code from day one.

Good starting points include:

- Writing dimension calculations as code
- Managing parameter tables in code
- Automating only part of the geometry generation

Using **GUI CAD and code together** is often the most practical approach.

---

## Conclusion

Designing with code is not just about efficiency.

It is a way to transform design from a  
**one-time task** into a **reusable knowledge asset**.

Rather than rejecting GUI CAD,  
code-based design complements its limitations.

Keeping this option in your toolbox greatly expands  
your freedom as a mechanical designer.

---

## References & Notes

This article is a Qiita-oriented summary of ideas organized in the following resource:

- Full Code Mechanical Design  
  [https://samizo-aitl.github.io/full-code-mechanical-design/](https://samizo-aitl.github.io/full-code-mechanical-design/)


This article focuses on sharing the **conceptual framework**.  
For concrete code examples and usage conditions,  
please refer to the page above.

