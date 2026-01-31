---
title: "【可視化】pn接合バンド構造を3Dアニメーションで見てみる"
tags: ["半導体", "pn接合", "可視化", "Python", "matplotlib"]
author: Samizo-AITL
---

## 静止図だと、何が分かりづらい？ 🤔

pn接合のバンド図は、教科書ではだいたいこうです👇

- 横軸：位置 x  
- 縦軸：エネルギー  

しかし実際には、

- **印加バイアス Va**
- **内蔵電位 Vbi**
- **空乏層幅の変化**

が絡み、  
バンドは **条件によって連続的に変形**します。

---

## 🎞 3Dアニメで見てみる

今回作った GIF はこちら👇

![pn band energy surface](https://raw.githubusercontent.com/Samizo-AITL/qiita-articles/main/demos/gif_anim/pn_band_energy_surface.gif)

### 軸の意味
- x軸：位置（p → n）  
- y軸：印加バイアス Va  
- z軸：エネルギー（Ec / Ev）

👉 **「バンドが曲がる」ではなく、  
👉「エネルギー“面”が動く」**  
ということが一目で分かります。

---

## 🧩 GIF生成コード（抜粋）

```python
ani = FuncAnimation(fig, update, frames=Nv, interval=200)
ani.save("pn_band_energy_surface.gif", writer="pillow", fps=5)
```

- Va を掃引しながら  
- エネルギー面を1枚ずつ追加  
- 3D surface を「成長」させる構成  

📌 **回しているのではなく、条件を積み上げている**のがポイントです。

---

## ✨ この可視化で伝えたいこと

- 空乏層が「広がる」とはどういう意味か  
- バイアスでバリアが下がるとは何か  

これらが、  
**数式なしでも直感的に理解できる**ようになります。

次は、  
制御理論で同じことをやります 👉
