---
layout: default
title: Qiita Articles
---

# 39. 【論文執筆】IEEE Control Systems 向け論文を LaTeX で書く前に、まず環境を固めた話"
tags: LaTeX,IEEE,制御工学,論文執筆,VSCode

---

## はじめに

IEEE Control Systems 系（TCST など）の論文を書こうとすると、  
**内容以前に LaTeX 環境で止まる**ことが多いです。

- 図が飛ぶ  
- Table が壊れる  
- Appendix が地獄  
- Biography が最後に来ない  

今回は、論文の中身ではなく、

> **「IEEE Control Systems 向け論文を LaTeX で最後まで書ける構成を、先に作る」**

という実験をしました。

これはその **作業中ログ**です。

---

## なぜ最初に LaTeX 構成を作ったのか

Control Systems 系の論文は、次の要素が同時に要求されます。

- 2 カラム前提（IEEEtran）
- 数式（PID / 状態空間）
- FSM・ブロック図
- Table（実験条件・KPI）
- Appendix
- Author Biography

つまり、

> **後付けで足すと、どこかで必ず壊れる**

構造です。

そこで今回は、

- 中身は仮でもいい  
- 結果が弱くてもいい  

代わりに、

> **「最後まで壊れずに到達できる LaTeX 構成」**

を先に PoC しました。

---

## 作業環境

- エディタ：VS Code  
- クラス：`IEEEtran`（journal）
- ビルド：ローカル LaTeX

作業中の実際の状態がこちらです。

![VS Code + IEEEtran 構成作業中](https://github.com/Samizo-AITL/qiita-articles/blob/main/assets/images/39_1.png?raw=true)

---

## まず作ったディレクトリ構成

いきなり全部を書くのではなく、**分割前提**で作ります。

```text
2025_HUMANOID_TCST/
├─ main.tex
├─ abstract.tex
├─ intro.tex
├─ related.tex
├─ system.tex
├─ results.tex
├─ discussion.tex
├─ conclusion.tex
├─ refs.bib
└─ figures/
```

ポイントは：

- `main.tex` は **制御塔**
- 本文はすべて `\input{}` 前提
- Appendix / Biography まで入れる想定で開始

---

## この段階では「完成させない」

重要なのは、

- まだ PDF を完成させない  
- 結果を語らない  
- 理論を説明しない  

ことです。

目的はただ一つ。

> **「この構成で最後まで行けるか？」**

---

## この実験のゴール

この時点でのゴールは、次です。

- IEEEtran + 2 カラムで破綻しない
- Appendix と Biography が共存できる
- 図・Table・数式を追加しても壊れない

論文の中身は、**あとからいくらでも差し替えられます**。

---

## 次回予告

次は、

- `main.tex` の最小骨格  
- package 選定  
- Appendix / Biography を含めた「完走前提構成」

をそのまま出します。

👉 **IEEE Control Systems 論文用 LaTeX 最小構成 PoC**

---

## まとめ

- 論文が書けない理由は、内容ではなく「構造」であることが多い  
- まず LaTeX を PoC するのは、かなり有効  
- これはその **実験ログ**です  

続きは、構成そのものを出します。
