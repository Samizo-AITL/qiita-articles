---
title: "【907】生成AIで「技術スタック宣伝画像」を作る：GitHub×Pages×Mermaid×LaTeX×Python×VSCode（プロンプト公開）"
tags:
  - 生成AI
  - PromptEngineering
  - GitHub
  - GitHubPages
  - Mermaid
  - LaTeX
  - Python
  - VSCode
private: false
---

![GitHub Pages Mermaid LaTeX Python VSCode](../assets/images/900/900_github-pages-mermaid-latex-python-vscode.png)

## この記事のねらい

この画像は「技術スタックの宣伝」を、**あえて強い広告トーン**に寄せて作っています。  
本記事は、**同系統の “おもしろ宣伝画像” を生成AIで作るためのプロンプト設計**を、コピペできる形でまとめます。  
海外ユーザーにも刺さるように、**英語プロンプト中心**です。

---

## 使い方（最短）

1. 画像生成（text-to-image）に下記プロンプトを投入  
2. できた画像を見て、**「文字量」「要素数」「誤字」**を調整  
3. 2〜5回回して当たりを選ぶ（当たりが出る確率が上がります）

---

## ベースプロンプト（英語）

> 目的：**技術スタックを“過剰に盛った宣伝ビジュアル”**として出す

```text
A humorous, high-impact promo poster for developers, styled like a retro Japanese TV infomercial.
Main headline: “GitHub! GitHub Pages! Mermaid! LaTeX! Python! VSCode!”
Big central punch text in Japanese: “最高!” (meaning “the best!”)
Vibrant gradients, bold outlines, sparkly background, dramatic lighting, exaggerated excitement.
Include playful icon-like visuals representing: GitHub (octocat), a website/page for GitHub Pages, a flowchart for Mermaid, a math formula card for LaTeX, a python mascot, and a code editor laptop for VSCode.
Composition: large headline on top, huge punch word in the center, small feature panels at the bottom.
Make it look like an energetic advertisement poster, comedic but readable.
Avoid real brand logos that are too exact; use generic look-alike icons.
High resolution, sharp text, poster layout, no watermark.
```

---

## 改造用プロンプト（差分パーツ集）

### 1) もっと海外向けに（英語コピー強め）

```text
Add a bold English badge: “WORLDWIDE HIT!”
Add a tagline: “All-in-One Docs + Diagrams + Math + Code”
Make typography mostly English, with one big Japanese punch word “最高!”
```

### 2) 文字を減らして安定させる（誤字対策）

```text
Reduce all small texts. Keep only:
Top headline, the big “最高!”, and one short English tagline.
Remove tiny captions and phone-number-like elements.
```

### 3) “ツール感”を上げる（ガジェット寄せ）

```text
Add more developer gear: laptop, terminal window, code snippets, diagram cards.
Keep it clean: fewer characters, stronger icons, larger spacing.
```

### 4) 背景を変えて量産（シリーズ化）

```text
Change background to: neon cyberpunk / minimal white studio / comic halftone / space nebula.
Keep the same layout and headline style.
```

---

## 失敗しやすい点（回避テク）

### 誤字・崩れ文字
- **小さい文字を増やすほど壊れます。**
- まずは **大文字3点セット（Headline / Punch word / Tagline）だけ**にすると安定します。

### 要素を詰め込みすぎ
- 「アイコン6種＋人物2人＋小パネル5個」などは崩れやすいです。  
- 最初は **アイコン6種＋文字3箇所**くらいが安定です。

### ロゴの扱い
- そのままのブランドロゴ再現は避け、**“それっぽい一般アイコン”**に寄せると安全です。

---

## 追加：この画像用の最小プロンプト（短縮版）

```text
Retro Japanese TV infomercial style developer promo poster.
Headline: “GitHub! GitHub Pages! Mermaid! LaTeX! Python! VSCode!”
Huge Japanese punch word: “最高!”
Sparkly background, bold gradient typography, comedic ad layout.
Include generic icons for website, flowchart, math, python, code editor.
High resolution, poster composition, no watermark.
```

---

## まとめ

- **ネタ系“宣伝画像”は、技術スタックの記憶定着に効きます。**
- まずは **文字を減らす→安定→差分で量産**が手堅いです。
- 反響が出たら、背景違い・コピー違いで **シリーズ化（908, 909...）**できます。

---
