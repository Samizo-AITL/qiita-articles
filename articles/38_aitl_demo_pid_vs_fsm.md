---
title: "38.【フィジカルAI設計】🧪 AITLは本当に壊れないのか｜PIDのみ vs AITLを並べて見せる"
description: "AITL（PID+FSM）が実際に効いていることをデモで示す"
tags:
  - フィジカルAI
  - AITL
  - デモ
  - 制御工学
  - 可視化
---

# 🧪 AITLは本当に壊れないのか  
## PIDのみ vs AITL を並べて見せる

## 👀 この記事の目的
- 新しい理論は出しません
- **証拠だけ出します**

---

## 🖥️ デモ（説明は後）

<section class="aitl-demo" style="margin:0;padding:0;">
  <iframe
    src="https://samizo-aitl.github.io/aitl-animation-demos/demo/js-svg/aitl-control-flow.html"
    style="display:block;width:100%;height:750px;border:none;border-radius:12px;background:#000;margin:0;"
    loading="lazy"
    referrerpolicy="no-referrer">
  </iframe>
</section>

---

## 🔍 見どころ
- 上：🔵 **PID ONLY**  
  → 外乱後、定常偏差が残る
- 下：🟢 **AITL（PID + FSM）**  
  → **元の目標値に戻る**

条件は同一。  
違いは **FSMがあるかどうか** だけ。

---

## 🧭 まとめ
- AITLは思想ではない
- **動作する構造**である

---

## 🔗 全体像
**Samizo-AITL Portal**  
https://samizo-aitl.github.io/
