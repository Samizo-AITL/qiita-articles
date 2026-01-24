---
title: "【JS】SVG(DOM)だけでシューティングを完成させた（Canvas不要）"
tags: [JavaScript, SVG, Web, 初心者]
private: false
---

## 動いてるところ（動画）

<video
  src="https://raw.githubusercontent.com/Samizo-AITL/qiita-articles/main/assets/videos/svg-shooter-demo.mp4"
  controls
  autoplay
  loop
  muted
  playsinline
  style="max-width:100%; border:1px solid #ccc; border-radius:10px;">
</video>

---

## 何ができる？

- SVGだけで「自機・弾・敵・当たり判定・スコア・ライフ・ゲームオーバー」まで実装
- 図形はすべてDOM（`querySelector` / `setAttribute` で操作）
- DevToolsで状態が見えるので、デバッグが楽

---

## 操作

- 移動：`←` `→` または `A` `D`
- 連射：`Space`
- リスタート：`R`
- スマホ：画面下のボタン

---

## なぜCanvasじゃなくSVGなのか

Canvasは「描画結果」を作る仕組みなので、図形そのものを後から触りにくいです。

SVGはDOMなので、弾も敵も「要素」です。

- `querySelector` で取れる
- `setAttribute` で座標を書き換えられる
- DevToolsで今の座標や属性が見える
- Git diffで図形差分が追える

---

## コア部分：DOM操作（例）

弾は `<circle>` を生成し、座標だけ更新します。

```js
const bullet = document.createElementNS("http://www.w3.org/2000/svg", "circle");
bullet.setAttribute("cx", x);
bullet.setAttribute("cy", y);
bullet.setAttribute("r", 3);
svg.appendChild(bullet);

// 移動：cyを書き換えるだけ
bullet.setAttribute("cy", y - 5);
```

---

## 完成版コード

完成版はここ（単一HTML）です：

- `demos/svg-shooter/index.html`

（リポジトリに置いて、ブラウザで開くだけで動きます）

---

## まとめ

- SVGはDOM → 操作・デバッグが楽
- シューティング程度ならSVGで十分作れる
- 仕組み理解・教材・デモ用途で特に強い

次は「敵のパターン化」「弾幕」「当たり判定の最適化」を足す予定です。

