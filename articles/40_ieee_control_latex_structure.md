---
title: "【IEEE論文】Control Systems 論文を LaTeX で最後まで壊さず書く最小構成（IEEEtran PoC）"
tags:
  - LaTeX
  - IEEE
  - 制御工学
  - 論文執筆
  - IEEEtran
private: false
---

## この記事でやること

前回（記事39）では、  
**IEEE Control Systems 向け論文を LaTeX で書くために、まず環境と作業の枠を固めた**  
という話を書きました。

今回はその続きです。

この記事では、

> **IEEE Control Systems 論文を「最後まで完走できる」LaTeX の最小構成**

を、そのまま出します。

- 論文の中身は解説しません  
- 制御理論も説明しません  

**LaTeX 構造だけ**に集中します。

---

## 前提条件（Control Systems 論文の現実）

IEEE Control Systems 系（TCST 等）の論文では、以下が同時に要求されます。

- IEEEtran（2 カラム）
- 数式（PID・状態空間）
- 図（ブロック図・FSM）
- Table（実験条件・KPI）
- Appendix
- Author Biography

つまり、

> **途中で足す設計は、ほぼ確実に破綻する**

分野です。

そこで今回は、

> **最初から「完走状態」を想定した LaTeX 構成**

を PoC として組みました。

---

## 全体構成（まずは俯瞰）

```
2025_HUMANOID_TCST/
├─ main.tex            % 制御塔
├─ abstract.tex
├─ intro.tex
├─ related.tex
├─ system.tex
├─ results.tex
├─ discussion.tex
├─ conclusion.tex
├─ refs.bib
├─ figures/
└─ appendices/
```

ポイントは：

- **main.tex を最小・固定**
- 本文はすべて `\input{}` で分離
- Appendix / Biography を最初から前提にする

---

## main.tex の最小骨格

以下が、今回の PoC の中核です。

```latex
\documentclass[journal]{IEEEtran}

% ===== Packages =====
\usepackage{amsmath,amssymb,amsfonts}
\usepackage{graphicx}
\usepackage{booktabs}
\usepackage[caption=false,font=footnotesize]{subfig}
\usepackage{cite}
\usepackage{url}
\usepackage{newtxtext,newtxmath}
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,fit,backgrounds,calc}
\usepackage{hyperref}

\begin{document}

\title{Cross-Node Humanoid Robot Control: FSM, PID, State-Space and LLM Integration}
\author{Shinichi Samizo,~\IEEEmembership{Member,~IEEE}}

\maketitle

\input{abstract}

\begin{IEEEkeywords}
Humanoid Robots, Fault-Tolerant Control, FSM, PID, State-Space Methods, LLM
\end{IEEEkeywords}

\input{intro}
\input{related}
\input{system}
\input{results}
\input{discussion}
\input{conclusion}

\bibliographystyle{IEEEtran}
\bibliography{refs}

\end{document}
```

この時点では、

- 内容はダミーで良い  
- 図がなくても良い  

重要なのは、

> **この形で最後まで通るか**

です。

---

## なぜ `\input{}` 分割が必須なのか

Control Systems 論文は、後から必ず以下が増えます。

- 数式
- 図
- Table
- Appendix

単一ファイルで書くと、

- diff が読めない  
- 修正が怖い  
- 壊れた場所が分からない  

という状態になります。

`main.tex` は、

> **構造だけを定義する制御塔**

にしておくのが安全です。

---

## Appendix と Biography を最初から想定する

IEEE 論文では、次が地味に鬼門です。

- Appendix の table 番号
- Biography の配置

そのため、この PoC では最初から：

- `\appendices`
- `\begin{IEEEbiographynophoto}{...}`

を入れる前提で構成しています。

👉  
**後付けしない**のが最大のコツです。

---

## Reference が空で落ちる問題への対処

ドラフト段階では、Reference が空で落ちることがあります。

対策として、

```latex
\nocite{*}
```

を一時的に入れておくと、

- BibTeX が空にならない
- CI で落ちない

というメリットがあります。

※提出前には削除します。

---

## この構成でできること

この最小構成ができると：

- 図・数式・FSM を追加しても壊れない  
- Appendix を増やしても安全  
- Biography を含めて完走できる  

つまり、

> **あとは中身を書くしかない状態**

になります。

---

## まとめ

- IEEE Control Systems 論文は「構造設計」が8割  
- LaTeX 構成を先に PoC するのは有効  
- `main.tex` は最小・固定が正解  

次回（記事41）では、

> **この構成で最後まで書いた結果（完成 PDF）**

を、そのまま出します。

---

## 次回予告

👉 **IEEE Control Systems 論文 LaTeX PoC の最終到達点（完成PDFリンク）**

