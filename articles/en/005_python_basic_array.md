---
layout: default
title: Qiita Articles
---

# 005.【Python Basics】 Calculate in Bulk

## 📊 You Can Calculate Many Values at Once with Python

Python is very good at  
**handling many numbers at the same time**.

Here, we calculate the  
**V–I relationship in bulk**  
by changing the current step by step.

---

## ✅ What You Can Do

- Handle multiple values at once  
- Execute the same calculation in bulk  
- Get free from manual and spreadsheet calculations  

---

## ⚡ Demo: Bulk Calculation of V–I Data

```python
import numpy as np

R = 100.0  # resistance [ohm]

I = np.linspace(0, 0.05, 50)  # current [A]
V = R * I                    # voltage [V]

print(V)
```

---

## 👀 What Is Happening

- Current **I** is an array (many values)  
- Voltage **V** is calculated all at once  
- No `for` loop is used  

👉 The key idea is **“calculate in bulk.”**

---

## 💡 Key Points

- Python processes data **in bulk**, not one by one  
- Even if the data size increases, the code stays almost the same  

---

## 📝 Summary

- Python is strong at large-scale calculations  
- You do not need to write the same calculation repeatedly  

That understanding is enough.
