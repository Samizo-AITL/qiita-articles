---
title: "【Python】電卓の中で何が起きてるか、アニメっぽく書いてみた"
tags: ["Python", "アルゴリズム", "初心者"]
---

電卓って一瞬で答えが出るけど、中では順番に処理してます。
超ざっくり、アニメしてる感じで書いてみました。

```python
import time

def anim(t):
    print(t)
    time.sleep(0.4)

anim("📥 数字を受け取る")
a, b = 2, 3

anim("➕ 演算子を確認")
op = "+"

anim("🧠 計算中…")
if op == "+":
    r = a + b

anim(f"✅ RESULT = {r}")
```

アルゴリズムって、意外と「順番に進んでるだけ」だったりします。
