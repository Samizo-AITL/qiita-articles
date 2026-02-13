---
layout: default
title: qiita-articles
---

# 42. 【GitHub Pages】🧮 How to Render Math (MathJax) on GitHub Pages (Jekyll)
topics: ["GitHubPages", "Jekyll", "MathJax", "LaTeX", "Qiita"]

---

On Qiita, mathematical expressions (LaTeX) are rendered automatically  
just by writing them in Markdown.

On the other hand, GitHub Pages (Jekyll)  
**does not render math expressions by default**.

In this article, we explain how to:

> **Keep the same syntax as Qiita (`$...$`, `$$...$$`)**  
> and render mathematical expressions correctly on GitHub Pages

using a **minimal, copy-and-paste–friendly configuration**.

---

## 🎯 Goal

We aim to achieve the following:

- ✍️ Write `$...$` / `$$...$$` directly in Markdown  
- 🌐 Render math expressions using MathJax on GitHub Pages  
- 🔁 Reuse the **same Markdown source** for both Qiita and GitHub Pages  

---

## 🧩 Prerequisites

- GitHub Pages (**Project Pages**)
- Jekyll enabled
- `baseurl` configured in `_config.yml`

---

## ⚙️ Configure `_config.yml`

First, configure Jekyll to assume MathJax-based math rendering.

```yml
markdown: kramdown
kramdown:
  input: GFM
  syntax_highlighter: rouge
  math_engine: mathjax
```

📌 Notes

- `math_engine: mathjax` tells Jekyll  
  **to parse Markdown assuming MathJax-style math**
- The actual rendering is handled **by the browser**, not by Jekyll

---

## 🧠 Add MathJax to `head.html`

Next, load MathJax in `_includes/head.html`.

```html
<script>
  window.MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']]
    }
  };
</script>
<script defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>
```

📌 Notes

- Use `defer` to load MathJax safely after DOM construction  
- Explicitly define **Qiita-compatible math delimiters**

---

## ✏️ Writing Math in Markdown

### Inline Math

Ohm’s law is expressed as:

$V = IR$

(This is the basic **V–I characteristic**, voltage vs. current.)

---

### Block Math

A representative transfer function of a second-order system is:

$$
G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}
$$

You can write it exactly the same way as on Qiita.

---

## 🔍 Live Demo (Rendered Output)

You can verify that math expressions are **actually rendered**  
using this real demo page:

- [Demo Page (MathJax Rendering)](https://samizo-aitl.github.io/qiita-articles/articles/en/demo_math_mermaid.html)

---

## ⚠️ Common Pitfalls

- MathJax is **not rendered by Jekyll itself**  
  → Rendering is done by **browser-side JavaScript**
- If `head.html` is not included from  
  `_layouts/default.html`, MathJax will not work

---

## 📝 Summary

- ✅ GitHub Pages can render math using MathJax  
- ✅ The same `$...$` / `$$...$$` syntax as Qiita can be reused  
- ✅ **One Markdown source can serve both Qiita and GitHub Pages**
