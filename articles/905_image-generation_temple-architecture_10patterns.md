---
title: "【生成AI実験】寺院建築で検証する｜画像生成プロンプト指示語10パターン比較"
tags:
  - 生成AI
  - 画像生成
  - プロンプト
  - 実験
  - 建築
  - 寺院
private: false
---

## はじめに

前回は「京都の風景」をテーマに、  
**画像生成プロンプトにおける指示語の違いが、出力結果にどのような差を生むか**を検証した。

本記事ではその続編として、  
テーマを **「寺院建築（Temple Architecture）」** に固定し、  
同様の手法で比較実験を行う。

風景と異なり、建築は

- 形状
- 構造
- 様式
- 制約条件

が明確であるため、  
**プロンプト指示がより「設計入力」に近い形で効いてくる**。

---

## なぜ「寺院建築」を選んだか

寺院建築は、画像生成実験の題材として非常に優れている。

- 構造が定型化されている（屋根・柱・軸線）
- 時代・様式の差が明確
- 抽象化しても完全には崩れにくい

つまり、

> **曖昧な指示と、厳密な指示の差が露骨に可視化される**

という特徴を持つ。

前回の「風景」が雰囲気寄りの実験だとすれば、  
今回は **構造・設計寄りの実験**である。

---

## 実験条件（固定ルール）

以下の条件をすべて固定する。

- テーマ語：**Japanese temple architecture**
- 1回の実験で変える要素：**1つのみ**
- モデル：DALL·E / Stable Diffusion / Midjourney など（特定しない）
- 評価対象：
  - 構造の明瞭さ
  - 様式の一貫性
  - 抽象化の度合い
  - 演出（光・構図）

---

## ベースプロンプト（共通）

以下をベースとし、各実験では差分のみを変更する。

```text
Japanese temple architecture,
wooden structure,
clean composition,
natural lighting,
no text, no logo, no watermark
```

---

## 「寺院建築」固定・10パターン実験表

| No. | 変更点 | プロンプト差分 | 主な変化 | 観測ポイント |
|----:|--------|----------------|----------|--------------|
| 1 | 名詞 | `photograph of Japanese temple architecture` | 実写寄り | 実在寺院への吸着 |
| 2 | 名詞 | `illustration of Japanese temple architecture` | 図像化 | 構図と配色の整理 |
| 3 | 抽象度 | `abstract visualization of temple architecture` | 形状の簡略化 | 構造の保持限界 |
| 4 | 具体性 | `realistic wooden temple structure` | 構造強調 | 柱・梁の明確化 |
| 5 | 感情語 | `calm and quiet temple architecture` | 静的 | 彩度・演出低下 |
| 6 | 感情語 | `dramatic temple architecture` | 演出的 | 光・陰影の強調 |
| 7 | 時代 | `Edo period Japanese temple architecture` | 様式固定 | 写実より時代優先 |
| 8 | 現代 | `modern reinterpretation of temple architecture` | 再解釈 | 材料・形の変化 |
| 9 | 視点 | `aerial view of temple complex` | 俯瞰構成 | 配置・軸線 |
|10 | 視点 | `interior view of temple hall` | 内部空間 | 柱配置・奥行き |

---

## 生成結果の比較（10パターン）

※ ここに10パターン比較画像を挿入する


![Temple architecture 10 patterns experiment](https://samizo-aitl.github.io/qiita-articles/assets/images/image_generation/temple_10patterns_experiment.png)

*図1：寺院建築をテーマに、指示語のみを変更した10パターンの生成結果*

---

## 観測結果の整理

### ① 建築では「構造語」が最優先で効く

- `architecture`
- `structure`
- `wooden`

といった語は、  
風景よりも**はるかに強く出力を拘束**する。

👉 建築テーマでは、  
**名詞の精度＝構造精度**。

---

### ② 抽象化しても構造は完全には崩れない

`abstract visualization` を指定しても、

- 屋根の重なり
- 垂直・水平の関係
- 対称性

はある程度保持される。

👉 寺院建築は **構造的に「強い対象」**。

---

### ③ 感情語は「装飾レイヤ」に作用する

- calm  
  → 彩度低下、均一照明
- dramatic  
  → 逆光、強コントラスト

建築そのものよりも、  
**光・空・周辺要素に影響**が出る。

---

### ④ 時代指定は様式を完全に上書きする

`Edo period` のような指定は、

- 建築形式
- 装飾
- 色彩

を一気に固定する。

👉 **時代指定は建築テーマでも最強クラスのパラメータ**。

---

### ⑤ 視点指定は「理解の仕方」を変える

- aerial view  
  → 配置・伽藍構成の理解
- interior view  
  → 柱割・スケール感の理解

👉 **何を理解させたいかで視点を選ぶべき**。

---

## 実運用への示唆

- 建築ビジュアル生成では  
  **材料・構造語を先に置く**
- 様式を揃えたい場合は  
  **時代指定を最優先**
- 説明用途では  
  **視点指定が最重要**

---

## まとめ

- 建築テーマでは、プロンプトはほぼ「設計条件」
- 抽象語はあっても、構造は簡単には壊れない
- 風景よりも **論理的な差分観測が可能**

「風景 → 建築」と進めることで、  
画像生成プロンプトの理解は一段深まる。

---

## 次のステップ

- 室内（和室・茶室）での視点・光源実験
- 建築 → 内部空間への展開
- 同一寺院テーマでのモデル差比較

※ 次回は  
**「室内空間」をテーマに、視点と制約の効き方を検証する。**

---

以上。
