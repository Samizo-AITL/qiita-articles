---
layout: default
title: qiita-articles
---

# 904. 【LLM Runaway: Case】🧨 How an LLM Turned an “Obvious Fact” into a Useless Tech Article
topics: ["LLM", "Qiita", "Technical Writing", "Failure Case"]

---

## 🧩 Overview

While using an LLM to draft a technical article,  
an **obvious fact** —

> **“A PCB with only passive components cannot be controlled”**

— was published as if it were a meaningful technical article.

This post shares that failure case.

The page used as the concrete example is here:

- [Zenn Articles / 03_hardware](https://samizo-aitl.github.io/zenn-articles/articles/03_hardware/)

Although the content itself was correct,  
it had a critical problem:

**the reader gained no new action, decision, or option after reading it.**

---

## 🔍 What Happened

- 🎯 Target  
  A PCB composed only of **passive components** (resistors, capacitors, etc.)
- 📝 What the article explained  
  - Why such a circuit cannot be controlled  
  - Why it cannot be adjusted afterward
- 📉 Result  
  - No KiCad operations appeared  
  - No explanation of how to choose component values  
  - Nothing concrete to do after finishing the article  

---

## ⚠️ The Problem

The issues in this case are very clear:

- 👀 The article covered something readers already knew, or were not struggling with  
- 📖 It ended with explanations of correctness only  
- 🛠 It did not lead to any actual work, configuration, or decision  

In short:

> **Correct, but not worth reading**

---

## 🤖 Why Did This Become an Article?

LLMs tend to behave in the following way:

- ✍️ Prefer topics that are easy to explain  
- 🧠 Increase explanation volume to avoid misunderstanding  
- ✅ Consider a text “done” once it is well-formed  

As a result,  
an accident occurs where **“obvious facts” are turned into articles**.

This is not about correctness.  
It is about **article value**.

---

## 📌 Summary

- Accuracy and article value are not the same  
- Explaining “why something cannot be done” often creates no reader value  
- Leaving topic selection to an LLM is dangerous  

This case shows a failure that **anyone using LLMs for technical writing can encounter**.

The real criterion is not correctness, but:

> **What does the reader gain after reading this?**

---

This English version is ready to be placed alongside the JP version  
(e.g. `904_llm_failure_obvious_not_value_en.md`).
