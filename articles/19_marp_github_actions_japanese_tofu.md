---
layout: default
title: Qiita Articles
---

title: "19.【Marp】GitHub ActionsでMarkdownからプレゼン資料を自動生成しようとして、日本語豆腐で止まった話"
tags:
  - Markdown
  - Marp
  - GitHubActions
  - GitHubPages
  - PowerPoint

---

## 🎯 この記事でやること

前回の記事では、  
**VS Code + Marp CLI を使ってローカルでプレゼン資料を作成**しました。

- 📝 Markdown を書く  
- 🌐 HTML / 📊 PPTX を生成する  
- 👀 手元で確認する  

👉 今回はその **続編** です。

**Markdown を push するだけで、  
HTML / PPTX を GitHub Actions で自動生成したい。**

⚠️ ただし、最初に断っておきます。

> **この記事は成功談ではありません。**  
> 🟥 日本語豆腐（□）で止まったままの記録です。

---

## 🏁 やりたかった完成形

理想はとても単純でした。

```text
slides/*.md
   ↓ push
GitHub Actions
   ├─ 🌐 HTML 生成
   ├─ 📊 PPTX 生成
   ↓
GitHub Pages / 配布
```

- 📝 Markdown が唯一の原稿  
- 🙅 人は生成物を触らない  
- 🤖 CI がすべて自動でやる  

**いわゆる「スライド自動生成」構成**です。

---

## 🧩 まずやったこと（最小の GitHub Actions）

`.github/workflows/marp-build.yml` を作成。

```yaml
name: Build Marp Slides

on:
  push:
    paths:
      - "slides/**/*.md"

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: "20"

      - name: Install Marp
        run: npm install -g @marp-team/marp-cli

      - name: Build HTML
        run: marp slides/sample.md --html -o dist/sample.html

      - name: Build PPTX
        run: marp slides/sample.md --pptx -o dist/sample.pptx
```

👉 ここまでは **意外とあっさり動く**。

---

## 🧨 つまずき①  
### Markdown を更新したのに Pages が変わらない

- 📝 `slides/*.md` を更新して push  
- 🤖 GitHub Actions は成功  
- ❓ **GitHub Pages の表示が変わらない**

### 原因

GitHub Pages は、

- ❌ Markdown を実行しない  
- ❌ Actions の生成物を直接は見ない  
- ✅ **commit 済みの静的ファイルしか配信しない**

👉  
Actions が生成した HTML は  
**commit しない限り Pages からは見えない**。

---

## 🧨 つまずき②  
### Actions が push できない（permission denied）

HTML を commit しようとすると、次はこれ。

```
remote: Permission denied to github-actions[bot]
```

### 原因

GitHub Actions は **🔒 デフォルト read-only**。

```yaml
permissions:
  contents: write
```

を明示しないと、  
📛 生成物を push できない。

---

## 🧨 つまずき③  
### Actions が無限ループする

HTML を commit できるようになると、  
今度は **Actions が止まらなくなった**。

- 🔁 Actions が commit  
- 🔁 push 扱いになる  
- 🔁 また Actions が走る  

### 原因

`on: push` の対象に  
**生成物（dist/）まで含めていた**。

### 対処

```yaml
on:
  push:
    paths:
      - "slides/**/*.md"
```

👉 **入力（Markdown）だけをトリガーにする**  
必要があった。

---

## 🚨 最大の問題  
## PPTX で日本語が □（豆腐）になる

ここで **完全に止まった**。

- 🌐 HTML：問題なし  
- 📊 PPTX：日本語が □□□  

しかも、

- 💻 ローカルでは出ない  
- 🤖 CI で生成すると出る  
- 👀 Viewer を変えても完全には直らない  

### 分かったこと

- ❌ 文字コードの問題ではない  
- ⚠️ フォントに **日本語グリフが無い**  
- 💣 特に `code` / `pre` が危険  

👉  
**「HTML で見える」＝ 安全ではない**

---

## ❓ なぜ解決できていないのか

現時点での正直な状況。

- ✅ HTML 自動生成：安定  
- ✅ Pages 配信：理解した  
- ✅ CI ループ：解消  

❌ **日本語 PPTX のフォントだけは  
「完全に勝った」と言えない。**

一時的な回避策はあるが、

- 🧩 Viewer 差分  
- 🧩 環境差分  
- 🧩 将来の再現性  

を考えると、  
**設計としては未完成**。

---

## 🧠 ここまでで得た暫定結論

まだ成功していないが、  
考え方はここに落ち着いた。

- 🏗 スライドは「作るもの」ではない  
- 🏭 スライドは「ビルドされるもの」  
- 🤖 CI は賢くしない  
- 📜 Markdown だけを正とする  

> **Slides are built, not edited**

---

## 🧾 まとめ

Marp × GitHub Actions で  
プレゼン資料を自動生成するのは、

- 👍 動かすだけなら簡単  
- ⚠️ 運用として安定させるのは難しい  
- 🚧 **日本語 PPTX は最後の地雷**

この記事時点では、  
**まだ完成していません。**

ただし、

- 🔍 なぜ詰まるのか  
- 🧩 どこが設計ポイントなのか  

は、ようやく言語化できました。

---

## 🔜 次に書く予定

- なぜ日本語豆腐は「設定」では直らないのか  
- Marp front matter でフォントを固定する設計  
- 壊れない Slide Factory 構成（未完）

---

### 🔗 前編

**18.【Marp】VS CodeでMarkdownからプレゼン資料（HTML / PPTX）を作成する方法**

---

_End._
