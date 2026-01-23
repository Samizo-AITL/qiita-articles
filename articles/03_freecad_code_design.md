---
title: GUI CADとコード設計をどう併用するか ― FreeCADで始める最小コード設計
tags:
  - 機械設計
  - CAD
  - FreeCAD
  - Python
qiita: true
published_at: 2026-01-23
---

## はじめに

前回の記事では、  
GUI CAD から一歩進んで **設計をコードとして記述する**  
という考え方を紹介しました。

次に出てくる疑問はこれです。

> 「そのコード、どうやって書くの？」

この記事では、  
**ChatGPTで設計コードを生成し、それをFreeCADに貼り付けて実行する**  
という、現実的な導入フローを紹介します。

---

## 今回やること

- ChatGPT で設計コードを生成する
- FreeCAD のマクロとして貼り付ける
- GUI操作なしで形状を生成する
- CAD は **確認専用** として使う

---

## 設計コードの生成（ChatGPT）

※ ChatGPT は設計判断を代行するものではなく、
　設計意図をコード化する補助として使用しています。

まず、設計内容を言語化して  
ChatGPT にコードを生成させます。

- 板の長さ・幅・板厚
- 長さによる板厚の設計判断
- 取付穴の配置ルール

![code_generation](https://samizo-aitl.github.io/qiita-articles/assets/images/03_6.png)

ここでは、  
**設計意図を文章で与え、コードとして出力させています。**

---

## FreeCAD マクロに貼り付ける

生成されたコードを、  
FreeCAD のマクロエディタにそのまま貼り付けます。

![macro_editor](https://samizo-aitl.github.io/qiita-articles/assets/images/03_7.png)

この時点では、  
まだ GUI でスケッチも操作もしていません。

---

## FreeCAD マクロコード

以下が、実際に使用したマクロです。

```python
import FreeCAD as App
import FreeCADGui as Gui
import Part

# =========================
# 設計パラメータ（設計の本体）
# =========================
W = 40.0     # 幅 [mm]
L = 120.0    # 長さ [mm]

# ---- 設計判断 ----
if L > 100:
    T = 8.0
else:
    T = 5.0

# 取付穴
HOLE_D = 6.0
EDGE_OFFSET = 10.0

# =========================
# ドキュメント準備
# =========================
doc = App.newDocument("CodeDesign_03")

# =========================
# ベース形状
# =========================
base = Part.makeBox(L, W, T)

# =========================
# 穴配置ルール
# =========================
holes = []

x_positions = [EDGE_OFFSET, L - EDGE_OFFSET]
y_positions = [W / 2]

for x in x_positions:
    for y in y_positions:
        hole = Part.makeCylinder(
            HOLE_D / 2,
            T + 1,
            App.Vector(x, y, -0.5)
        )
        holes.append(hole)

for h in holes:
    base = base.cut(h)

# =========================
# モデル登録
# =========================
part = doc.addObject("Part::Feature", "BasePlate")
part.Shape = base

# =========================
# 表示更新
# =========================
doc.recompute()
Gui.activeDocument().activeView().viewAxonometric()
Gui.SendMsgToActiveView("ViewFit")
```

---

## 実行結果（GUI操作なし）

マクロを実行すると、  
設計ルールに基づいた形状が生成されます。

![result](https://samizo-aitl.github.io/qiita-articles/assets/images/03_9.png)

- 再実行＝再設計
- 寸法変更＝派生設計
- 操作履歴は不要

---

## 何が「コード設計」なのか

重要なのは、形状ではありません。

```python
if L > 100:
    T = 8.0
else:
    T = 5.0
```

この **設計判断そのもの** が  
コードとして明示的に残ることが本質です。

GUI CAD では、  
この判断は操作の中に埋もれてしまいます。

---

## GUI CAD の役割は変わる

- コード：設計判断・ルール・再現性
- GUI CAD：形状の確認・視覚的チェック

この役割分担により、  
設計は「作業」ではなく **再利用可能な資産** になります。

---

## おわりに

ChatGPT で設計コードを生成し、  
FreeCAD でそのまま実行する。

この流れは、  
**コード設計を現実的に始める最短ルート** です。

次回は、  
**Part Design（Body / Sketch）とコード設計をどう接続するか**  
を扱います。

---

*Full Code Mechanical Design* は、  
ツールではなく **設計の考え方** です。

---

## 補足

本記事中のコードは設計手法の説明を目的とした例示です。
実運用・再配布を想定したものではありません。

実際の設計コードやライセンスについては、
以下のページで管理しています。

- Full Code Mechanical Design  
  https://samizo-aitl.github.io/full-code-mechanical-design/

※ FreeCAD の API は将来変更される可能性があります。
　本記事は考え方の説明を主目的としています。

