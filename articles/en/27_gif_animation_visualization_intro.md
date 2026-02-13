---
layout: default
title: Qiita Articles
---

# 27.【Visualization】Understanding Difficult Semiconductor Physics and Control Theory Through Animation
tags: ["Visualization", "Python", "matplotlib", "Education", "Technical Explanation"]

---

## Introduction 👀

Semiconductor physics and control theory are fields that are  
**not easy to grasp intuitively from static textbook diagrams alone**.

Examples include:

- Band structures of pn junctions  
- Step responses of control systems  
- Behavior changes when gain or bias is adjusted  

These phenomena are fundamentally **multidimensional**, involving:

> **Space × Time × Conditions**

However, what textbooks usually present is only  
📘 *a single cross-section under a specific condition*.

As a result,  
**continuity of change and causal relationships must be mentally reconstructed by the reader**.

---

## 🧠 What I Did

Using Python (matplotlib), I combined:

- 📐 **3D visualization**
- ⏱ **Time evolution**
- 🎞 **GIF animation**

to create **visualizations that can be played directly inside an article**.

The goal is simple:

> Before reading equations or explanations,  
> readers should be able to say,  
> **“Ah, so this is how it moves.”**

---

## 📦 About This Article Series

This experiment is organized as a **three-article series**:

1️⃣ **Introduction (this article)**  
　The concept of animation as a tool for understanding  

2️⃣ **Example ①: pn Junction**  
　Visualizing band structures with *3D × bias sweep*  

3️⃣ **Example ②: P Control**  
　Comparing system responses with different P gains using animation  

All examples are topics that are  
**normally explained using static figures in textbooks**.

---

## ✨ Summary

- The equations are correct  
- The static diagrams are also correct  

However, they represent only  
**a single slice of a multidimensional phenomenon**.

Animation is a tool for  
**connecting those slices across time and conditions**.

In the next article,  
this approach will be applied concretely to  
**pn junction band structures** 👉
