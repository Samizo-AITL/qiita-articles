---
layout: default
title: Qiita Articles
---

title: "28.【可視化】pn接合バンド構造を3Dアニメーションで見てみる"
tags: ["半導体", "pn接合", "可視化", "Python", "matplotlib"]

---

## 静止図だと、何が分かりづらい？ 🤔

pn接合のバンド図は、教科書ではたいてい次の形で示されます。

- 横軸：位置 x  
- 縦軸：エネルギー  

しかし実際の pn 接合では、

- **印加バイアス Va**
- **内蔵電位 Vbi**
- **空乏層幅の変化**

が同時に関係し、  
バンド構造は **条件に応じて連続的に変形**します。

静止図では、  
この「条件による変化の流れ」を掴むのが難しいのが正直なところです。

---

## 🎞 3Dアニメで見てみる

そこで、pn接合のバンド構造を  
**位置 × バイアス × エネルギー** の 3D で可視化しました。

![pn band energy surface](https://samizo-aitl.github.io/qiita-articles/demos/gif_anim/pn_band_energy_surface.gif)

### 軸の意味
- x軸：位置（p → n）  
- y軸：印加バイアス Va  
- z軸：エネルギー（Ec / Ev）

👉 **「バンドが曲がる」ではなく、  
👉「エネルギー“面”が条件とともに動く」**  
ということが直感的に分かります。

---

## 🧩 GIF生成コード（抜粋）

この GIF は、Python（matplotlib）で  
**バイアス条件を1ステップずつ追加しながら描画**しています。

```python
from matplotlib.animation import FuncAnimation

ani = FuncAnimation(fig, update, frames=Nv, interval=200)
ani.save("pn_band_energy_surface.gif", writer="pillow", fps=5)
```

- Va を掃引  
- エネルギー面を順に追加  
- 3D surface を「成長」させる構成  

📌 **3D図を回しているのではなく、  
📌 条件を積み上げていくアニメ**なのがポイントです。

---

## 📎 使用したPythonコード

GIF生成に使用したコードはこちらです👇

- pn接合バンド構造 3Dアニメ生成  
  https://github.com/Samizo-AITL/qiita-articles/blob/main/demos/gif_anim/pn_junction_band_surface_animation.py

そのまま実行すると、  
この記事で使っている GIF が出力されます。

---

## ✨ この可視化で伝えたいこと

- 空乏層が「広がる」とはどういう意味か  
- バイアスでバリアが「下がる」とは何か  

これらを、  
**数式や文章の前にイメージとして掴む**ことが目的です。

次の記事では、  
制御理論（P制御）を同じ方法で可視化します 👉
