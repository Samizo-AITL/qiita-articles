---
layout: default
title: Qiita Articles
---

# 42. 【GitHub Pages】🧮 GitHub Pages（Jekyll）で数式（MathJax）を表示する方法
topics: ["GitHubPages", "Jekyll", "MathJax", "LaTeX", "Qiita"]

---

Qiita では、数式（LaTeX）をそのまま Markdown に書くだけで  
きれいにレンダリングされます。

一方で、GitHub Pages（Jekyll）は  
**標準状態では数式を描画しません**。

この記事では、  

> **Qiita と同じ書き方（`$...$`, `$$...$$`）を維持したまま**  
> GitHub Pages 上で数式を表示する方法  

を、**最小構成・コピペ前提**で整理します。

---

## 🎯 目的

以下を満たす構成を作ります。

- ✍️ Markdown に `$...$` / `$$...$$` をそのまま書く  
- 🌐 GitHub Pages 上で MathJax により数式を描画する  
- 🔁 Qiita と GitHub Pages で **同一原稿を再利用**する  

---

## 🧩 前提構成

- GitHub Pages（**Project Pages**）
- Jekyll 使用
- `baseurl` が設定されている構成

---

## ⚙️ _config.yml の設定

まず、Jekyll 側で MathJax を使う前提を設定します。

```yml
markdown: kramdown
kramdown:
  input: GFM
  syntax_highlighter: rouge
  math_engine: mathjax
```

📌 ポイント  

- `math_engine: mathjax` は  
  **「MathJax を使う前提で Markdown を解釈する」ための指定**です  
- 実際の描画は、次の手順で **ブラウザ側**が行います

---

## 🧠 head.html に MathJax を追加

次に、`_includes/head.html` に MathJax を読み込みます。

```html
<script>
  window.MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']]
    }
  };
</script>
<script defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>
```

📌 ポイント  

- `defer` を付けて、DOM 構築後に安全に読み込む  
- `$...$` / `$$...$$` の **Qiita互換記法**を明示的に指定

---

## ✏️ Markdown での数式記述例

### インライン数式

オームの法則は次式で表されます。

$V = IR$

（電圧–電流、すなわち **V–I 特性**の基本式です）

---

### ブロック数式

2次遅れ系の代表的な伝達関数は次のとおりです。

$$
G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}
$$

Qiita と同じ感覚で、そのまま書けます。

---

## 🔍 実際の表示デモ

この構成を使って **実際に数式が描画されているページ**はこちらです。

- [907 デモページ（MathJax 表示例）](https://samizo-aitl.github.io/qiita-articles/articles/907_demo_math_mermaid.html)

📌  
**「本当に動いているか」**を確認できる実デモを  
記事内に置くと、再現性が一気に上がります。

---

## ⚠️ 注意点（よくあるハマりどころ）

- MathJax は **Jekyll が描画するわけではありません**  
  → ブラウザ側で JavaScript が描画します
- `head.html` が  
  `_layouts/default.html` から読み込まれていないと動作しません

---

## 📝 まとめ

- ✅ GitHub Pages でも MathJax を使えば数式は表示できる  
- ✅ Qiita と同じ `$...$ / $$...$$` 記法をそのまま使える  
- ✅ **1つの Markdown 原稿を Qiita / GitHub Pages 両方で使い回せる**  
