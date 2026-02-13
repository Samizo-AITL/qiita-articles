---
layout: default
title: Qiita Articles
---

# 006.【Python基礎】 結果をグラフで確認する

## 📈 Pythonで「結果を見て確認する」

計算結果は、  
**グラフにすると一目で分かります。**

ここでは、  
V–I 特性を **グラフで可視化**します。

---

## ✅ できること

- 計算結果をグラフで表示できる  
- 挙動を視覚的に理解できる  
- VS Codeでそのまま実行できる  

---

## ⚡ デモ：V–I 特性の表示

```python
import numpy as np
import matplotlib.pyplot as plt

R = 100.0

I = np.linspace(0, 0.05, 50)
V = R * I

plt.plot(I, V)
plt.xlabel("Current I [A]")
plt.ylabel("Voltage V [V]")
plt.title("V–I Characteristic (Ohm's Law)")
plt.grid(True)

plt.show()
```

---

## ▶ 実行の様子

![python_basic_02](https://samizo-aitl.github.io/qiita-articles/assets/images/python_basic_02.png)

---

## 📄 README による補足

フォルダには README.md を置き、

- 何ができるか  
- どう実行するか  

だけを書いています。

![python_basic_03](https://samizo-aitl.github.io/qiita-articles/assets/images/python_basic_03.png)

---

## 💡 ポイント

- 計算 → 実行 → 可視化 が一連でできる
- グラフは理解を助ける道具
- VS Codeは「作業場」

---

## 📝 まとめ

- Pythonは「計算」だけでなく「確認」に使える
- 見える化すると理解が速い

これで Python 基礎は十分です。
