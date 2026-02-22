# 🧩📚　qiita-articles

このリポジトリは、Qiitaに投稿した技術記事を  
**「原稿（一次情報）」としてGitHubで管理するためのリポジトリ**です。

Qiitaは公開・拡散の場、  
GitHubは **記事の正本・編集履歴・構造管理の場**  
という役割分担を前提にしています。

[![Go to Portal (JP)](https://img.shields.io/badge/Go%20to%20Portal-6F42C1?style=for-the-badge&logo=homeassistant&logoColor=white)](https://samizo-aitl.github.io/portal/)

[![Qiita](https://img.shields.io/badge/Qiita-Articles-lightgrey?logo=qiita)](https://qiita.com/ctrl_bug)
[![Zenn](https://img.shields.io/badge/Zenn-Articles-blue?logo=zenn)](https://zenn.dev/samizo_aitl)

---

## 🔗 Links

| Language | GitHub Pages 🌐 | GitHub 💻 |
|----------|----------------|-----------|
| JP 日本語 | [![GitHub Pages JP](https://img.shields.io/badge/GitHub%20Pages-日本語-brightgreen?logo=github)](https://samizo-aitl.github.io/qiita-articles/) | [![GitHub Repo JP](https://img.shields.io/badge/GitHub-日本語-blue?logo=github)](https://github.com/Samizo-AITL/qiita-articles/tree/main) |
| EN English | [![GitHub Pages EN](https://img.shields.io/badge/GitHub%20Pages-English-brightgreen?logo=github)](https://samizo-aitl.github.io/qiita-articles/en/) | [![GitHub Repo EN](https://img.shields.io/badge/GitHub-English-blue?logo=github)](https://github.com/Samizo-AITL/qiita-articles/tree/main/en) |

---

## 🎯 Purpose

- 📝 Qiita記事本文を Markdown で管理する
- 🧭 改稿・追記・構成変更を履歴として残す
- 🖼️ 図・補足資料・参考リンクを記事と一体で管理する
- 🧱 単発記事を将来的にシリーズ・体系へ発展させられる状態を保つ

---

## 🗂 Repository Structure

```
qiita-articles/
├─ README.md    Japanese
├─ index.md     Japanese
├─ en/
│ └─ index.md    English
├─ articles/
│ └─ 01_gui-cad-to-code.md    Japanese
├ └─en/
│   └─ 01_gui-cad-to-code.md    English
├─ assets/
│ └─ images/
└─ references/
```

### 📁 各ディレクトリの役割
- ✍️ `articles/`  
  Qiita記事の本文（原稿・正本）
- 🖼️ `assets/images/`  
  記事で使用する画像・図・スクリーンショット
- 📎 `references/`  
  補足説明、参考リンク、検討メモなど（Qiita未掲載情報を含む）

---

## 🧪 Writing Policy

- 🏛 GitHub上のMarkdownを**正本**とする
- 📣 Qiitaには公開用として抜粋・調整した内容を投稿する
- 🔁 構成変更・加筆はGitHub側で先に行う
- 🧠 記事は「読み物」ではなく**技術資産**として扱う

---

## 🧭 基礎知識記事 (No.001-)

---

## 🌏 物理の世界観・スケール理解

| No. | タイトル | リンク |
|---:|---|---|
| 001 | 【物理の世界観】距離と時間 | [link](https://samizo-aitl.github.io/qiita-articles/articles/001_physics_scale_distance_time.html) |
| 002 | 【物理の世界観】抵抗と電流 | [link](https://samizo-aitl.github.io/qiita-articles/articles/002_physics_scale_resistance_current.html) |
| 003 | 【物理の世界観】熱とエネルギー | [link](https://samizo-aitl.github.io/qiita-articles/articles/003_physics_scale_heat_energy.html) |

---

## 🐍 Python基礎・計算と可視化の入口

| No. | タイトル | リンク |
|---:|---|---|
| 004 | 【Python基礎】計算して実行結果を見る | [link](https://samizo-aitl.github.io/qiita-articles/articles/004_python_basic_calculation.html) |
| 005 | 【Python基礎】まとめて計算する | [link](https://samizo-aitl.github.io/qiita-articles/articles/005_python_basic_array.html) |
| 006 | 【Python基礎】結果をグラフで確認する | [link](https://samizo-aitl.github.io/qiita-articles/articles/006_python_basic_visualize_vscode.html) |

---

## 🧱 Markdown / GitHub Pages 前提基礎知識

| No. | タイトル | リンク |
|---:|---|---|
| 007 | 【Markdown基礎】Markdownは実務ドキュメントの正形式です | [link](https://samizo-aitl.github.io/qiita-articles/articles/007_prerequisite_markdown.html) |
| 008 | 【Markdown基礎】GitHub PagesはMarkdownの実行・確認環境です | [link](https://samizo-aitl.github.io/qiita-articles/articles/008_prerequisite_github_pages.html) |
| 009 | 【Markdown基礎】_config.yml と style.css は文書仕様です | [link](https://samizo-aitl.github.io/qiita-articles/articles/009_prerequisite_config_style.html) |

---

## 📘 Qiita投稿記事 (No.01-)

---

## 🛠 機械設計 × フルコード設計（Full Code Design）

| No. | タイトル | リンク |
|---:|---|---|
| 01 | 【機械設計】GUI CADから脱却して設計をコード化するという考え方 | [link](https://samizo-aitl.github.io/qiita-articles/articles/01_gui-cad-to-code.html) |
| 02 | 【機械設計】FreeCADとは何か（GUIとコードの位置づけ） | [link](https://samizo-aitl.github.io/qiita-articles/articles/02_what-is-freecad.html) |
| 03 | 【機械設計】FreeCADをコード設計ツールとして使う | [link](https://samizo-aitl.github.io/qiita-articles/articles/03_freecad_code_design.html) |
| 04 | 【機械設計】コードで行うパーツ設計の実例 | [link](https://samizo-aitl.github.io/qiita-articles/articles/04_part_design_with_code.html) |
| 05 | 【機械設計】CAD設計をGit diffでレビューする | [link](https://samizo-aitl.github.io/qiita-articles/articles/05_git_diff_code_design.html) |
| 06 | 【機械設計】FreeCAD幾何モデルのショーケース | [link](https://samizo-aitl.github.io/qiita-articles/articles/06_geometric_showcase_freecad.html) |
| 07 | 【機械設計】FreeCADもLaTeXもKlayoutも同じだった ― Full Code設計の共通構造 | [link](https://samizo-aitl.github.io/qiita-articles/articles/07_full_code_mechanical_design_scope.html) |

---

## 📊 分析・可視化・ツール

| No. | タイトル | リンク |
|---:|---|---|
| 08 | 【GA4】GA4で海外アクセスを見るなら、主要都市の現在時刻も並べる | [link](https://samizo-aitl.github.io/qiita-articles/articles/08_ga4_world_clock.html) |

---

## 🎮 ゲーム設計（SVG / Canvas / FSM）

| No. | タイトル | リンク |
|---:|---|---|
| 09 | 【ゲーム】SVG(DOM)だけでシューティングを完成させた（Canvas不要） | [link](https://samizo-aitl.github.io/qiita-articles/articles/09_svg_shooter_with_dom.html) |
| 10 | 【ゲーム】SVGシューティングをFSMで整理する | [link](https://samizo-aitl.github.io/qiita-articles/articles/10_svg_shooter_with_fsm.html) |
| 11 | 【ゲーム】FSMで難易度と敵AIを制御する | [link](https://samizo-aitl.github.io/qiita-articles/articles/11_svg_shooter_fsm_difficulty_ai.html) |
| 12 | 【ゲーム】SVGシューティング完成版 | [link](https://samizo-aitl.github.io/qiita-articles/articles/12_svg_shooter_complete_game.html) |
| 13 | 【ゲーム】Canvasで弾幕を撃ったら気持ちよすぎた | [link](https://samizo-aitl.github.io/qiita-articles/articles/13_canvas_shooter_qiita.html) |
| 14 | 【ゲーム】SVGとCanvas、同じシューティングを作ってみたら体験が全然違った | [link](https://samizo-aitl.github.io/qiita-articles/articles/14_svg_vs_canvas_same_game.html) |

---

## 🏯 Rekiden（歴史シミュレーション × AI）

| No. | タイトル | リンク |
|---:|---|---|
| 15 | 【Rekiden】AIにテンプレを貼るだけで戦国SLGが始まる | [link](https://samizo-aitl.github.io/qiita-articles/articles/15_ai_template_rekiden_kawanakajima.html) |
| 16 | 【Rekiden】AIをFSMとして使うとゲーム設計になる | [link](https://samizo-aitl.github.io/qiita-articles/articles/16_ai_game_fsm_design_rekiden.html) |
| 17 | 【Rekiden】AI vs AIで歴史を自動進行させる | [link](https://samizo-aitl.github.io/qiita-articles/articles/17_ai_vs_ai_auto_history_rekiden.html) |

---

## 🖼️ プレゼン資料作成 (Marp)

| No. | タイトル | リンク |
|---:|---|---|
| 18 | 【Marp】VS CodeでMarkdownからプレゼン資料（HTML / PPTX）を作成する方法 | [link](https://samizo-aitl.github.io/qiita-articles/articles/18_vscode_md_to_html_pptx_marp.html) |
| 19 | 【Marp】GitHub Actionsで自動生成しようとして、日本語豆腐で止まった話 | [link](https://samizo-aitl.github.io/qiita-articles/articles/19_marp_github_actions_japanese_tofu.html) |
| 20 | 【Marp】日本語豆腐はなぜ設定で直らないのか｜PPTXとフォントの構造 | [link](https://samizo-aitl.github.io/qiita-articles/articles/20_marp_japanese_tofu_not_fixable_by_settings.html) |

---

## 🧪 生成AI 実験・比較

| No. | タイトル | リンク |
|---:|---|---|
| 21 | 【生成AI実験】同じ「京都」でもここまで変わる | [link](https://samizo-aitl.github.io/qiita-articles/articles/21_image-generation_kyoto_10patterns.html) |
| 22 | 【生成AI実験】寺院建築で検証する | [link](https://samizo-aitl.github.io/qiita-articles/articles/22_image-generation_temple-architecture_10patterns.html) |
| 23 | 【生成AI実験】日本語 vs 英語｜同じ意味でも同じ結果にならない | [link](https://samizo-aitl.github.io/qiita-articles/articles/23_image-generation_japanese-vs-english_prompt.html) |

---

## 🧠 LLM / AI設計

| No. | タイトル | リンク |
|---:|---|---|
| 24 | 【LLM設計】LLM構造を俯瞰する | [link](https://samizo-aitl.github.io/qiita-articles/articles/24_llm_structure_overview.html) |
| 25 | 【LLM設計】制御ループにLLMを入れると何が壊れるのか | [link](https://samizo-aitl.github.io/qiita-articles/articles/25_llm_in_control_loop_breaks.html) |
| 26 | 【LLM設計】外側レイヤで安定させる | [link](https://samizo-aitl.github.io/qiita-articles/articles/26_llm_outer_layer_stability.html) |

---

## 👀 アニメ可視化

| No. | タイトル | リンク |
|---:|---|---|
| 27 | 【可視化】難しい半導体物理・制御理論をアニメーションで理解する | [link](https://samizo-aitl.github.io/qiita-articles/articles/27_gif_animation_visualization_intro.html) |
| 28 | 【可視化】pn接合バンド構造を3Dアニメーションで見てみる | [link](https://samizo-aitl.github.io/qiita-articles/articles/28_gif_anim_pn_junction_band.html) |
| 29 | 【可視化】P制御のゲイン調整をアニメーションで理解する | [link](https://samizo-aitl.github.io/qiita-articles/articles/29_gif_anim_p_control.html) |

---

## 🎙 音声生成AI設計（FSM × LLM）

| No. | タイトル | リンク |
|---:|---|---|
| 30 | 【音声生成AI設計】音声AIはなぜすぐ壊れるのか | [link](https://samizo-aitl.github.io/qiita-articles/articles/30_audio_ai_breaks_by_design.html) |
| 31 | 【音声生成AI設計】音声AIをFSMで分解する | [link](https://samizo-aitl.github.io/qiita-articles/articles/31_audio_ai_fsm_decomposition.html) |
| 32 | 【音声生成AI設計】FSMに最小の音声を接続する | [link](https://samizo-aitl.github.io/qiita-articles/articles/32_audio_ai_minimal_speaking.html) |
| 33 | 【音声生成AI設計】割り込みで音声AIは壊れる | [link](https://samizo-aitl.github.io/qiita-articles/articles/33_audio_ai_interrupt_handling.html) |
| 34 | 【音声生成AI設計】LLMを安全に接続する | [link](https://samizo-aitl.github.io/qiita-articles/articles/34_audio_ai_llm_safe_connection.html) |

---

## 🤖 フィジカルAI設計（PID × FSM × LLM）

| No. | タイトル | リンク |
|---:|---|---|
| 35 | 【フィジカルAI設計】フィジカルAIとは何か | [link](https://samizo-aitl.github.io/qiita-articles/articles/35_physical_ai_definition.html) |
| 36 | 【フィジカルAI設計】なぜLLM直結は失敗するのか | [link](https://samizo-aitl.github.io/qiita-articles/articles/36_llm_direct_connection_failure.html) |
| 37 | 【フィジカルAI設計】壊れない作り方｜PID×FSM×LLM | [link](https://samizo-aitl.github.io/qiita-articles/articles/37_physical_ai_three_layer_architecture.html) |
| 38 | 【フィジカルAI設計】AITLは本当に壊れないのか | [link](https://samizo-aitl.github.io/qiita-articles/articles/38_aitl_demo_pid_vs_fsm.html) |

---

## 🧪 IEEE Control Systems 論文 × LaTeX

| No. | タイトル | リンク |
|---:|---|---|
| 39 | 【IEEE論文】LaTeXで書く前に、まず環境を固めた話 | [link](https://samizo-aitl.github.io/qiita-articles/articles/39_ieee_control_latex_poc_vscode.html) |
| 40 | 【IEEE論文】Control Systems 論文を壊さず書く最小構成 | [link](https://samizo-aitl.github.io/qiita-articles/articles/40_ieee_control_latex_structure.html) |
| 41 | 【IEEE論文】LaTeX PoCの最終到達点｜完成PDFを公開する | [link](https://samizo-aitl.github.io/qiita-articles/articles/41_ieee_control_latex_final_pdf.html) |
| 42 | 【IEEE論文】Control Systems 論文 LaTeX PoCをCIで完走させる｜GitHub Actions 編 | [link](https://samizo-aitl.github.io/qiita-articles/articles/42_ieee_controlsystems_latex_ci_github_actions.html) |

---

## 🧩 GitHub Pages × Qiita 記事管理（MathJax / Mermaid）

| No. | タイトル | リンク |
|---:|---|---|
| 43 | 【GitHub Pages】数式（MathJax）を表示する方法 | [link](https://samizo-aitl.github.io/qiita-articles/articles/43_github_pages_mathjax.html) |
| 44 | 【GitHub Pages】Mermaid 図を表示する方法 | [link](https://samizo-aitl.github.io/qiita-articles/articles/44_github_pages_mermaid.html) |
| 45 | 【GitHub Pages】数式＋Mermaidを同時に表示する最小テンプレ | [link](https://samizo-aitl.github.io/qiita-articles/articles/45_github_pages_mathjax_mermaid_template.html) |
| demo | 【GitHub Pages】数式・行列・Mermaidの表示デモ | [link](https://samizo-aitl.github.io/qiita-articles/articles/demo_math_mermaid.html) |

---

## 🧪 自由記事 (No.901-)

---

## 🚁 実案件・設計仕様（V–I制約）

| No. | タイトル | リンク |
|---:|---|---|
| 901 | 【SkyEdge】差別化を仕様で固定する | [link](https://samizo-aitl.github.io/qiita-articles/articles/901_skyedge_powerline_inspection_spec.html) |
| 902 | 【SkyEdge】1フライトV–I予算を切る | [link](https://samizo-aitl.github.io/qiita-articles/articles/902_skyedge_powerline_vi_budget.html) |
| 903 | 【SkyEdge】CMOS×レンズ×撮影距離のトレードオフ | [link](https://samizo-aitl.github.io/qiita-articles/articles/903_skyedge_cmos_lens_distance_tradeoff.html) |

---

## 🧨🛠 LLM暴走（事例・検証・対策）

| No. | タイトル | リンク |
|---:|---|---|
| 904 | 【LLM暴走:事例】LLMが「当たり前」を技術記事にしてしまった失敗例 | [link](https://samizo-aitl.github.io/qiita-articles/articles/904_llm_failure_obvious_not_value.html) |
| 905 | 【LLM暴走:検証】なぜLLMは価値の低いテーマを選びやすいのか | [link](https://samizo-aitl.github.io/qiita-articles/articles/905_llm_theme_selection_problem_verification.html) |
| 906 | 【LLM暴走:対策】LLMを使っても技術記事を難しくしないための実務ルール | [link](https://samizo-aitl.github.io/qiita-articles/articles/906_llm_article_quality_control_rules.html) |

---

## 🎨🧪 生成AIで遊ぶ（プロンプト公開）

| No. | タイトル | リンク |
|---:|---|---|
| 907 | 【生成AI活用】技術スタック宣伝画像を作る：GitHub×Pages×Mermaid×LaTeX×Python×VSCode | [link](https://samizo-aitl.github.io/qiita-articles/articles/907_github-pages-mermaid-latex-python-vscode.html) |
| 908 | 【生成AI活用】「関西テレビ通販ノリ」の技術スタック宣伝画像を作る｜キャラ指定プロンプト実例 | [link](https://samizo-aitl.github.io/qiita-articles/articles/908_retro-style_advertisement.html) |
| 909 | 【生成AI活用】諸葛亮が赤壁で東南の風を呼び、技術スタックを「最高」と宣伝する | [link](https://samizo-aitl.github.io/qiita-articles/articles/909_Zhuge-wind.html) |

---

## 👤 Author

| 📌 Item | Details |
|--------|---------|
| **Name** | Shinichi Samizo |
| **Expertise** | Semiconductor devices (logic, memory, high-voltage mixed-signal)<br>Thin-film piezo actuators for inkjet systems<br>Printhead productization, BOM management, ISO training |
| **GitHub** | [![GitHub](https://img.shields.io/badge/GitHub-Samizo--AITL-black?logo=github)](https://github.com/Samizo-AITL) |

---

## 📄 License

[![Hybrid License](https://img.shields.io/badge/license-Hybrid-blueviolet)](https://samizo-aitl.github.io/qiita-articles/#---license)

| 📌 Item | License | Description |
|--------|---------|-------------|
| **Source Code** | [**MIT License**](https://opensource.org/licenses/MIT) | Free to use, modify, and redistribute |
| **Text Materials** | [**CC BY 4.0**](https://creativecommons.org/licenses/by/4.0/) or [**CC BY-SA 4.0**](https://creativecommons.org/licenses/by-sa/4.0/) | Attribution required; share-alike applies for BY-SA |
| **Figures & Diagrams** | [**CC BY-NC 4.0**](https://creativecommons.org/licenses/by-nc/4.0/) | Non-commercial use only |
| **External References** | Follow the original license | Cite the original source properly |

---

## 💬 Feedback

> Suggestions, improvements, and discussions are welcome via GitHub Discussions.

[![💬 GitHub Discussions](https://img.shields.io/badge/💬%20GitHub-Discussions-brightgreen?logo=github)](https://github.com/Samizo-AITL/qiita-articles/discussions)

