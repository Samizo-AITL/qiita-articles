---
layout: default
title: qiita-articles
---

# 906. 【LLM Runaway: Countermeasures】🛠 Practical Rules to Keep LLM-Written Tech Articles Simple
topics: ["LLM", "Qiita", "Operational Rules", "Technical Writing"]

---

## 🧩 Overview

Based on the case study (904) and analysis (905),  
this article summarizes **practical rules to prevent technical articles from becoming unnecessarily complex when using LLMs**.

These are not ideals or theory.  
They are the **minimum rules required to actually prevent real-world failures**.

---

## 🛠 Rule 1: Fix the Article Type First

Every article must be classified into **one of the following types**:

- 🧭 Procedure article  
- 📝 Configuration / setup note  
- ⚠️ Failure case  

No other types are allowed.

The reason is simple:  
**articles outside these categories rarely increase the reader’s actionable work after reading.**

---

## 🔍 Rule 2: Check Two Conditions at the Beginning

If a topic does not satisfy **both** of the following, it must not be published:

- A **concrete action** the reader will perform after reading is clearly stated  
- **Specific tool names, operations, or configuration items** (e.g., KiCad) are included  

If either condition is missing, the topic is rejected.

---

## 🚫 Rule 3: Ban “States,” Not Words

What should be banned are not specific words, but the following states:

- ❌ No new deliverables after reading  
- ❌ No concrete task or operation described  
- ❌ Ending with “this cannot be done”  

If an article falls into any of these states,  
it is judged as **having no value**, even if the content is correct.

---

## 🤖 Rule 4: Strictly Limit the Role of the LLM

The role of the LLM must be clearly constrained:

- The LLM is used **only for drafting**
- Final publication decisions are **always made by a human**
- The evaluation criterion is:  
  **“Can the reader immediately decide what to do next after reading?”**

If this constraint is broken,  
the same failures will occur again.

---

## 📌 Summary

- LLMs are powerful, but topic selection must not be delegated to them  
- Content that does not lead to action should be rejected, even if it is correct  
- Once evaluation criteria are fixed, articles do not become unnecessarily complex  

These rules are effective in **any situation where LLMs are used for technical writing**.

---

This English version is intended to be placed alongside the Japanese version  
(e.g. `906_llm_article_quality_control_rules_en.md`).
