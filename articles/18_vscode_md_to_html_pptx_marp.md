---
title: "【FN】VS CodeでMarkdownからプレゼン資料（HTML / PPTX）を作成する方法【Marp】"
tags:
  - Markdown
  - Marp
  - VSCode
  - PowerPoint
  - プレゼン資料
private: false
---

## この記事でやること

**Markdown（md）を原稿にして、VS Code からプレゼン資料を生成する。**

- 📝 md を準備する  
- 🌐 HTML を生成する  
- 📊 PPTX（PowerPoint）を生成する  

※ 管理方法・思想・運用の話はしない  
※ **「作る → 見る」だけ**

---

## 前提環境

- Windows
- VS Code
- PowerShell
- Node.js（npm）
- Marp CLI（導入済み）

---

## 1️⃣ Markdown を準備する（VS Code）

VS Code で `physical-first.md` を作成する。

```yaml
---
marp: true
theme: default
paginate: true
size: 16:9
---
```

```markdown
# サンプルスライド

---

## 2枚目

- Markdown が原稿
- `---` がスライド区切り
```

### 作業画面（md 準備）

![md準備（VS Code）](https://samizo-aitl.github.io/qiita-articles/assets/images/18_01.png)

---

## 2️⃣ HTML を生成する（Marp CLI）

PowerShell で、md があるフォルダに移動して実行。

```powershell
marp physical-first.md --html
```

### 生成物

```
physical-first.html
```

### 実行結果（HTML 生成）

![HTML生成](https://samizo-aitl.github.io/assets/images/18_02.png)

### 確認方法
- `physical-first.html` をブラウザで開く  
- 左右キーでスライド操作可能

---

## 3️⃣ PPTX（PowerPoint）を生成する

同じフォルダで実行。

```powershell
marp physical-first.md --pptx
```

### 生成物

```
physical-first.pptx
```

### 実行結果（PPTX 生成）

![PPTX生成](https://samizo-aitl.github.io/assets/images/18_03.png)

### 確認方法
- `physical-first.pptx` を PowerPoint で開く  
- そのまま発表に使える

---

## ⚠️ 注意点

- `--html` と `--pptx` は **同時指定できない**
- 出力形式ごとに **個別実行**する

❌ NG
```powershell
marp physical-first.md --html --pptx
```

⭕ OK
```powershell
marp physical-first.md --html
marp physical-first.md --pptx
```

---

## 生成物を「見る」ためのリンク例

- 📝 Markdown  
  https://github.com/Samizo-AITL/qiita-articles/blob/main/marp/physical-first.md

- 🌐 HTML（GitHub Pages）  
  https://samizo-aitl.github.io/qiita-articles/marp/physical-first.html

- 📊 PPTX（ダウンロード）  
  https://github.com/Samizo-AITL/qiita-articles/raw/main/marp/physical-first.pptx

---

## まとめ

```powershell
marp slide.md --html
marp slide.md --pptx
```

- md = 原稿  
- VS Code = 作業場所  
- Marp = 変換  
- HTML / PPTX = 完成プレゼン資料  

**Markdown 1本で、プレゼン資料は作れる。**
