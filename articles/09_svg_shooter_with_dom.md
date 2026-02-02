---
layout: default
title: Qiita Articles
---

# 09.【JS】SVG(DOM)だけでシューティングを完成させた（Canvas不要） 
tags: [JavaScript, SVG, Web, 初心者]

---

# 🎮 何ができる？

**SVGだけ**で、ミニシューティングゲームを最後まで作りました。

- 🚀 自機・弾・敵・当たり判定・スコア・ライフ・ゲームオーバーまで実装
- 🧩 図形はすべて **SVG × DOM**
- 🔍 `querySelector` / `setAttribute` で操作
- 🛠 DevToolsで状態が見えるのでデバッグが楽

「Canvasは難しそう…」という人向けの  
**DOM感覚で作れるシューティング**です。

---

## 🎮 操作方法

- ⬅ ➡：移動（`←` `→` / `A` `D`）
- 🔫：連射（`Space`）
- 🔄：リスタート（`R`）
- 📱 スマホ：画面下のボタン

---

## 🤔 なぜ Canvas じゃなく SVG？

Canvasは「描画結果」を作る仕組みなので、  
**あとから特定の弾や敵を触るのが難しい**です。

SVGはDOMなので、

- 🎯 弾も敵も **要素**
- 🔍 `querySelector` で取得できる
- ✏ `setAttribute` で座標を書き換えるだけ
- 🧠 DevToolsで状態が丸見え
- 📄 Git diffで図形差分も追える

👉 **仕組み理解・教材用途ではSVGがかなり強い**です。

---

## 🧩 コア部分：DOM操作（例）

弾は `<circle>` を生成し、  
**座標（`cx`,`cy`）を書き換えるだけ**で移動します。

```js
const bullet = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "circle"
);

bullet.setAttribute("cx", x);
bullet.setAttribute("cy", y);
bullet.setAttribute("r", 3);
svg.appendChild(bullet);

// 移動：cyを書き換えるだけ
bullet.setAttribute("cy", y - 5);
```

> 💡 Canvasのような再描画ループは不要です。

---

## ▶️ 完成版デモ（そのまま遊べます）

👇 **こちらをクリック**  
[https://samizo-aitl.github.io/qiita-articles/demos/svg-shooter/](https://samizo-aitl.github.io/qiita-articles/demos/svg-shooter/)

※ 別タブで開きます

---

## ✅ まとめ

- ✨ SVGはDOM → 操作・理解・デバッグが圧倒的に楽
- 🎮 シューティング程度ならSVGで十分
- 📘 学習・教材・デモ用途にとても向いている

次は以下を追加予定です。

- 👾 敵のパターン化  
- 🌊 弾幕表現  
- ⚡ 当たり判定の最適化

---

## 🔜 このゲームの続き

この記事（09）は  
**「SVG(DOM)だけでゲームが最後まで作れる」**  
ことを見せる回です。

このあと、

- **10**：ゲームが壊れないように整理する（FSM導入）
- **11**：難易度・敵AIで遊び心地を変える
- **12**：完成版（操作・停止・再開まで全部入り）

という形で発展させています。

👉 **とりあえず遊びたい人は 12 だけ見ればOK**  
👉 作り方に興味があれば 10 / 11 もどうぞ

