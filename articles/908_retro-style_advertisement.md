---
layout: default
title: qiita-articles
---

# 908. 【生成AI活用】「関西テレビ通販ノリ」の技術スタック宣伝画像を作る｜キャラ指定プロンプト実例
topics: ["生成AI", "PromptEngineering", "GitHub", "GitHubPages", "Python", "VSCode"]

---

![関西テレビ通販風 技術スタック宣伝画像](../assets/images/900/908_retro-style_advertisement.png)

## 📌 この記事のねらい

本記事では、生成AIによる画像生成において、  
**文化圏・キャラクター性を強く指定した場合に、出力がどこまで振り切れるか**を検証します。

907では「汎用的なテレビ広告トーン」を扱いましたが、  
908ではさらに一段踏み込み、

- 関西ローカル通販番組風  
- おっちゃん・おばちゃんキャラ  
- 👍ポーズ  
- 炎背景（過剰演出）

という条件を明示的に与えています。

その結果として得られたのが、冒頭の画像です。

---

## 🎯 今回のポイント

- 技術スタックそのものは同じ  
  - GitHub  
  - GitHub Pages  
  - Python  
  - VSCode  
- 変えているのは **表現条件のみ** です  
- キャラ・ジェスチャ・背景指定が、画像全体に強く影響します  

生成AIは、  
**技術情報よりも演出条件を優先して空間を埋める傾向**があります。

---

## ⚡ 使用したベースプロンプト（英語）

```text
A high-energy Japanese TV shopping advertisement, Kansai style.
Cheerful middle-aged Japanese man and woman, both giving a big thumbs-up gesture.
Exaggerated expressions, loud and friendly Kansai vibe.

Background is fully covered with dramatic blazing flames and spark effects.
Top headline text: “GitHub! Python! VSCode!”
Big central punch phrase in Japanese: “ITやで!”
Everything looks over-the-top, flashy, and intentionally excessive.

Include generic icon-like visuals for:
- GitHub
- Python
- A code editor (VSCode-like)

Poster layout, bold outlines, saturated colors.
No real brand logos, use look-alike icons.
High resolution, sharp readable text, no watermark.
```

---

## 🧩 効いた指定ポイント

今回、特に効いた指定は以下です。

### 1️⃣ ジェスチャ指定

```text
both giving a big thumbs-up gesture
```

- 人物のポーズが固定され、  
  キャラ性が一気に安定します  
- 指定しない場合、手の表現が曖昧になりやすいです  

---

### 2️⃣ 背景を抽象ではなく断定

```text
Background is fully covered with dramatic blazing flames
```

- 「energetic」などの抽象語よりも  
  **炎・火・爆発**などの断定語の方が再現率が高くなります  

---

### 3️⃣ 文化圏の明示

```text
Kansai style
loud and friendly Kansai vibe
```

- 日本語テキストの言い回し  
- 表情の誇張  
- 配色の派手さ  

に影響が出ます。

---

## ⚠ よくある失敗例

| 失敗 | 回避策 |
|---|---|
| 文字が壊れる | 小さい文字を減らします |
| ロゴが破綻する | 公式ロゴを指定しません |
| 雰囲気が弱い | 背景・ポーズを明示します |
| 広告感が足りない | 「exaggerated」「over-the-top」を使います |

---

## 🧪 最小構成プロンプト（短縮版）

```text
Kansai-style Japanese TV shopping ad.
Cheerful middle-aged man and woman, both thumbs-up.
Blazing fire background, loud and flashy.
Headline: “GitHub! Python! VSCode!”
Big Japanese punch text: “ITやで!”
Poster layout, no watermark.
```

---

## ✅ まとめ

- 生成AIは、**文化・キャラ・動作指定に非常に敏感**です  
- 技術スタック自体は変えなくても、  
  見せ方を変えるだけで全く別の印象になります  
- 「技術 × 広告演出」は、発信手段として十分に使えます  

907が「汎用」、  
908は「振り切り例」です。

次は、  
- さらに文字量を減らした版  
- 海外向けに関西要素を輸出した版  

などへ派生させることも可能です。

以上です。
