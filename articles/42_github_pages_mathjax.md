---
title: "42: GitHub Pages（Jekyll）で数式（MathJax）を表示する方法"
description: "GitHub PagesでLaTeX数式（$...$, $$...$$）を表示するための最小構成と実装手順"
topics: ["GitHubPages", "Jekyll", "MathJax", "LaTeX", "Qiita"]
---

# GitHub Pages（Jekyll）で数式（MathJax）を表示する方法

Qiita では数式（LaTeX）を自然に書けますが、  
GitHub Pages（Jekyll）は **標準では数式を描画しません**。

本記事では、**Qiita と同じ書き方で数式を表示する方法**を、  
最小構成で整理します。

---

## 目的

- `$...$` / `$$...$$` を Markdown に書く  
- GitHub Pages 上で MathJax により数式を描画する  

---

## 前提構成

- GitHub Pages（Project Pages）
- Jekyll 使用
- `baseurl` あり

---

## _config.yml 設定

```yml
markdown: kramdown
kramdown:
  input: GFM
  syntax_highlighter: rouge
  math_engine: mathjax
```

---

## head.html に MathJax を追加

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

---

## Markdown での数式記述例

インライン数式：

$V = IR$

ブロック数式：

$$
G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}
$$

---

## 実際の表示デモ

以下のページで、**数式が実際に描画されている状態**を確認できます。

- [907 デモページ（MathJax 表示例）](https://samizo-aitl.github.io/qiita-articles/articles/907_demo_math_mermaid.html)

---

## 注意点

- MathJax は **Jekyll ではなくブラウザ側で描画**されます  
- `head.html` がレイアウトから読み込まれていないと動作しません  

---

## まとめ

- GitHub Pages でも MathJax を使えば数式は表示可能  
- Qiita と同じ `$...$ / $$...$$` 記法を維持できる  
- デモページを併記すると再現性が高まります  
