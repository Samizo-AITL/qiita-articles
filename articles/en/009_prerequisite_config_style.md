---
layout: default
title: qiita-articles
---

# 009.【Markdown Basics】⚙️ _config.yml and style.css Are Document Specifications

## 📌 Position of This Article

This article defines the prerequisites for **document specification files**  
required in addition to the Markdown content itself.

---

## ⚙️ The Role of _config.yml

`_config.yml` is not merely a configuration file.  
It is the **specification definition for the entire document set**.

Its main roles are as follows:

- 🧩 Fixing Markdown interpretation rules  
- 📐 Defining LaTeX formula rendering conditions  
- 🗂 Fixing site structure and URL structure  

---

## 🎨 The Role of style.css

`style.css` is not for decoration.  
It is a **specification that controls readability and information density**.

The controlled elements include:

- 🧱 Visibility of heading hierarchy  
- 💻 Line spacing and font size of code blocks  
- 📐 Margins around mathematical formulas  

---

## ❓ Why They Are Treated as Specifications

If these settings depend on individuals, the following problems occur:

- Document readability becomes inconsistent  
- Materials cannot be reused as educational content  
- 🤖 The structure read by AI systems changes every time  

By fixing them as specifications, these issues are avoided.

---

## ✅ Prerequisite Conclusion

In this project, the following rule is fixed as a prerequisite:

> Markdown content  
> ＋ `_config.yml`  
> ＋ `style.css`  
> are treated as a single document specification set.

---

## 🔗 Related Prerequisite Articles

- [007.【Markdown Basics】: Markdown Is the Standard Format for Practical Documents](007_prerequisite_markdown.md)
- [008.【Markdown Basics】: GitHub Pages Is the Execution Environment for Markdown](008_prerequisite_github_pages.md)
