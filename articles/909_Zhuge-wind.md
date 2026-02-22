---
layout: default
title: qiita-articles
---

# 909. 【生成AI活用】諸葛亮が赤壁で東南の風を呼び、技術スタックを「最高」と宣伝する

topics: ["生成AI", "PromptEngineering", "GitHub", "GitHubPages", "Mermaid", "Python", "VSCode"]

---

![諸葛亮が東南の風を呼び技術スタックを宣伝する画像](../assets/images/900/909_Zhuge-wind.png)

## 📌 この記事のねらい

本記事では、生成AIによる画像生成において、  
**歴史的キャラクター＋象徴的エピソードを明示した場合、どこまで強い画になるか**を検証します。

907・908では「テレビ広告文脈」を扱いましたが、  
909では方向性を大きく変え、

- 三国志・赤壁の戦い  
- 諸葛亮（字：孔明）  
- 東南の風を呼ぶ有名な場面  
- 臥竜の象徴としての龍  

を組み合わせ、  
**技術スタックを神がかり的に宣伝する一枚**を生成します。

---

## 🎯 今回のポイント

- 技術スタックは以下を明示  
  - GitHub  
  - GitHub Pages  
  - Mermaid  
  - Python  
  - VSCode  
- 重点は技術説明ではなく **象徴性と演出**  
- 英語＋繁体字を併記し、国際向け表現とします  

生成AIは、  
**固有名詞・場面指定・象徴物（風・龍）**を与えると、  
画面全体を強く寄せてきます。

---

## ⚡ 使用したベースプロンプト（英語＋繁体字）

```text
A photorealistic cinematic scene inspired by the Battle of Red Cliffs.

Zhuge Liang stands on a cliff, holding a feather fan,
dramatically summoning the southeastern wind.
His expression is calm, confident, and legendary.

A massive dragon appears in the background,
symbolizing the Sleeping Dragon.

Stormy sky, powerful wind, burning ships below.
Epic, realistic lighting, ultra-detailed, movie still quality.

Top headline text:
“GitHub! GitHub Pages! Mermaid! Python! VSCode!”

Big central punch text in Traditional Chinese:
「諸葛亮借東南風」
「最棒！」

Sub text in English:
“Zhuge Liang summons the southeastern wind — THE BEST!”

No real brand logos, use icon-like visuals.
High resolution, sharp readable text, no watermark.
```

---

## 🧩 効いた指定ポイント

### 1️⃣ 固有名詞＋歴史イベント指定

```text
Zhuge Liang
Battle of Red Cliffs
southeastern wind
```

- 抽象的な「ancient strategist」よりも  
  **固有名詞指定の方が再現度が高くなります**

---

### 2️⃣ 象徴物の追加（龍）

```text
A massive dragon appears in the background
symbolizing the Sleeping Dragon
```

- 背景が単調にならず  
- キャラクターの格が一段上がります  

---

### 3️⃣ 写実寄り指定

```text
photorealistic
cinematic
movie still quality
ultra-detailed
```

- イラスト調から離れ  
- 写真に近い質感へ寄せられます  

---

## ⚠ よくある失敗例

| 失敗 | 回避策 |
|---|---|
| ファンタジー寄りになりすぎる | photorealistic を明示します |
| 顔がアニメ調になる | cinematic / movie still を入れます |
| 文字が壊れる | 表示テキストを最小限にします |
| ロゴが破綻する | icon-like visuals に留めます |

---

## 🧪 最小構成プロンプト（短縮版）

```text
Photorealistic cinematic scene of Zhuge Liang at Red Cliffs.
He summons the southeastern wind with a feather fan.
Dragon in the background, stormy sky.

Headline: “GitHub! GitHub Pages! Mermaid! Python! VSCode!”
Traditional Chinese text: 「諸葛亮借東南風」「最棒！」
English sub text: “THE BEST!”
No watermark.
```

---

## ✅ まとめ

- 生成AIは、**歴史・象徴・場面指定に非常に強く反応**します  
- 技術スタックの中身は同じでも、  
  見せ方を変えるだけで全く別の訴求が可能です  
- 「技術 × 歴史モチーフ」は、視覚的フックとして有効です  

907が「汎用広告」、  
908が「文化圏全振り」、  
**909は「歴史・象徴全振り」**の例です。

以上です。
