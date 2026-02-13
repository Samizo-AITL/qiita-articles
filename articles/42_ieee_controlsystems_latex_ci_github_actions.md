---
layout: default
title: Qiita Articles
---

# 42. 【IEEE論文】Control Systems 論文 LaTeX PoCをCIで完走させる｜GitHub Actions 編
tags:LaTeX,IEEE,制御工学,論文執筆,GitHubActions,CI

---

## 📌 この記事の位置づけ

本記事は、以下のシリーズの続編です。

- **39**：VS Code 上で LaTeX 環境を先に固めた  
- **40**：IEEE Control Systems 論文を完走するための LaTeX 最小構成  
- **41**：その構成で、実際に完成 PDF まで到達した  

この記事では、その最終段階として、

> **「この LaTeX 構成を、CI（GitHub Actions）でも最後まで通す」**

という PoC を記録します。

---

## 🎯 この記事でやること

本記事で扱うのは、**論文の内容ではありません**。

- 制御理論  
- 実験結果  
- 研究の新規性  

これらは一切扱いません。

目的は一貫して次の一点です。

> **IEEE Control Systems 論文を、CI 上でも LaTeX で破綻させず完走できるか**

---

## 🤔 なぜ GitHub Actions までやるのか

ローカルで PDF が通っても、次の段階で止まることが多いです。

- 環境差分で落ちる  
- BibTeX が CI で失敗する  
- ログが見えず原因不明になる  

つまり、

> **「人間の環境では通るが、再現できない」**

状態になります。

そこで今回は、

- ローカル  
- GitHub Actions（Ubuntu）  

の **両方で同じ LaTeX 構成が通る** ことを、PoC として確認しました。

---

## 🧱 採用した方針

この CI では、以下を重視しています。

- IEEEtran + XeLaTeX 前提  
- 失敗時でも **必ずログを回収**  
- 成功時は **PDF を artifact として保存**  

「CI が落ちたら何も分からない」状態を避ける設計です。

---

## 🧩 GitHub Actions workflow 全体

以下が、今回使用した workflow です。

```yaml
name: Build LaTeX PDF (Humanoid TCST)

on:
  push:
    paths:
      - 'papers/2025_humanoid_tcst/**'
      - '.github/workflows/latex_humanoid_tcst.yml'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Compile LaTeX document
        id: compile
        uses: xu-cheng/latex-action@v2
        with:
          root_file: main.tex
          working_directory: papers/2025_humanoid_tcst
          latexmk_use_xelatex: true
          continue_on_error: false

      # --- 失敗時でもログを出力 ---
      - name: Show LaTeX logs (tail)
        if: always()
        run: |
          echo "==== list ===="
          ls -la papers/2025_humanoid_tcst || true
          echo "==== main.log (last 200 lines) ===="
          tail -n 200 papers/2025_humanoid_tcst/main.log || true
          echo "==== latexmk.log (last 200 lines) ===="
          tail -n 200 papers/2025_humanoid_tcst/latexmk.log || true

      - name: Upload PDF artifact
        if: success()
        uses: actions/upload-artifact@v4
        with:
          name: humanoid_tcst_pdf
          path: papers/2025_humanoid_tcst/main.pdf

      - name: Upload logs artifact
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: latex_logs
          path: |
            papers/2025_humanoid_tcst/*.log
            papers/2025_humanoid_tcst/*.aux
            papers/2025_humanoid_tcst/*.blg
```

---

## 🔍 この workflow のポイント

### ① XeLaTeX 前提を明示

```yaml
latexmk_use_xelatex: true
```

- IEEEtran  
- newtx 系フォント  

を使う前提を、CI 側でも固定しています。

---

### ② 失敗してもログを必ず出す

```yaml
if: always()
```

を使い、

- main.log  
- latexmk.log  

を **必ず取得**します。

CI で LaTeX が落ちた場合、  
ログがないと原因特定がほぼ不可能です。

---

### ③ 成功時は PDF を artifact 化

```yaml
uses: actions/upload-artifact@v4
```

により、

- 完成 PDF  
- ビルドログ  

を **成果物として保存**できます。

これは、

> **「この構成で CI でも完走した」**

という証拠になります。

---

## 🧠 CI まで通して分かったこと

- IEEEtran 構成は CI でも問題なく通る  
- Appendix / Biography を含めても破綻しない  
- LaTeX は **構造が正しければ自動化できる**  

ということが、実証できました。

---

## 🧾 本シリーズのまとめ（39–42）

- **39**：環境と作業枠を先に固めた  
- **40**：完走できる LaTeX 最小構成を定義した  
- **41**：実際に完成 PDF まで到達した  
- **42**：CI（GitHub Actions）でも同じ構成を完走させた  

論文の中身は、  
**この土台の上で初めて安心して磨けます**。

---

## 🏁 おわりに

論文執筆が止まる原因は、  
理論や実験ではなく **「再現できない構造」** であることが多いです。

LaTeX 構成を固め、  
CI まで通しておくことで、

- 環境差分  
- 再現性  
- 属人性  

をまとめて排除できます。

本記事が、  
IEEE Control Systems 論文を書こうとしている方の  
参考になれば幸いです。

---

※ 本記事は **LaTeX / CI 構成 PoC の記録**であり、  
研究成果の主張や評価を目的とするものではありません。
