---
layout: default
title: Qiita Articles
---

# 44. 【GitHub Page】GitHub Pagesで数式とMermaidを同時に表示する最小テンプレ
topics: ["GitHubPages", "Jekyll", "MathJax", "Mermaid", "Qiita"]

---

Qiita が求めるのは、  
**「そのまま書けて、実際に動く構成」**です。

本記事では、  
MathJax（数式）と Mermaid（図）を  
**同時に安定表示する最小テンプレ**をまとめます。

---

## 構成

```
_config.yml
_layouts/default.html
_includes/head.html
articles/*.md
```

---

## default.html

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  {% include head.html %}
</head>
<body>
  <main>
    <article>
      {{ content }}
    </article>
  </main>
</body>
</html>
```

---

## head.html（MathJax + Mermaid）

```html
<script>
  window.MathJax = {
    tex: {
      inlineMath: [['$', '$']],
      displayMath: [['$$', '$$']]
    }
  };
</script>
<script defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>

<script defer src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
<script>
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("code.language-mermaid").forEach(code => {
      const div = document.createElement("div");
      div.className = "mermaid";
      div.textContent = code.textContent;
      code.parentElement.replaceWith(div);
    });
    mermaid.initialize({ startOnLoad: false });
    mermaid.run();
  });
</script>
```

---

## 動作確認デモ

この構成で実際に表示されているページはこちらです。

- [907 デモページ（数式＋Mermaid 実表示）](https://samizo-aitl.github.io/qiita-articles/articles/907_demo_math_mermaid.html)

---

## まとめ

- GitHub Pages でも数式と図は両立できます  
- Qiita と同じ Markdown を再利用できます  
- デモページを併記すると記事の再現性が高まります  

907 番は **表示確認専用デモ**として位置付けます。
