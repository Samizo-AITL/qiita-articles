---
layout: default
title: qiita-articles
---

# 47. 【LLM Runaway: Analysis】🔍 Why LLMs Tend to Choose Low-Value Topics
topics: ["LLM", "Qiita", "Technical Writing", "Analysis"]

---

## 🧩 Overview

Based on the failure case discussed in the previous article,  
this post analyzes **why LLMs tend to select topics with low reader value**.

The concrete example used for analysis is the following page:

- [Zenn Articles / 03_hardware](https://samizo-aitl.github.io/zenn-articles/articles/03_hardware/)

This is not a subjective impression.  
The behavior is整理ed **based on observed output characteristics**.

---

## 🔍 Observed LLM Behavior

The following tendencies were consistently observed in the LLM’s output:

- ✍️ **Prioritizing “correct explanations”**  
- 🧠 **Expanding into general or abstract discussions**  
- ✅ **Completing text even when it does not lead to any action**

These behaviors are natural for text generation,  
but **they are fatal for technical articles**.

---

## 📉 Conditions That Reduce Article Value

Article value drops sharply when the following conditions overlap:

- The topic is chosen without checking **what the reader will do afterward**  
- The article type (procedure, configuration note, failure case) is undefined  
- **Concrete tool names or operations** (e.g., KiCad) are absent  

Even in this state,  
the LLM still judges the article as **“complete.”**

---

## 🧪 Analysis Results

The conclusion from this analysis is simple:

- Even correct content has no value if **the reader’s actions do not increase**  
- LLMs choose topics based on **explainability**, not usefulness  
- Unless stopped by a human, **the same failures will be reproduced**

This is not a matter of insufficient capability.  
It is a result of **missing evaluation criteria**.

---

## 📌 Summary

- The problem is not LLM performance  
- The problem is **failing to fix topic-selection and evaluation criteria on the human side**  
- The key question is not “Can this be explained?” but  
  **“What does the reader gain after reading?”**

These findings apply to **anyone using LLMs for technical writing**.

---

This English version is intended to be placed alongside the Japanese version  
(e.g. `47_llm_theme_selection_problem_verification_en.md`).
