---
layout: default
title: Qiita Articles
---

# 🧩📚　qiita-articles

このリポジトリは、Qiitaに投稿した技術記事を  
**「原稿（一次情報）」としてGitHubで管理するためのリポジトリ**です。

Qiitaは公開・拡散の場、  
GitHubは **記事の正本・編集履歴・構造管理の場**  
という役割分担を前提にしています。

[![Back to Portal (JP)](https://img.shields.io/badge/Back%20to%20Portal-0B5FFF?style=for-the-badge&logo=homeassistant&logoColor=white)](https://samizo-aitl.github.io/portal/)

---

## 🔗 Links

| Language | GitHub Pages 🌐 | GitHub 💻 |
|----------|----------------|-----------|
| JP Japanese | [![GitHub Pages JP](https://img.shields.io/badge/GitHub%20Pages-Japanese-brightgreen?logo=github)](https://samizo-aitl.github.io/qiita-articles/) | [![GitHub Repo JP](https://img.shields.io/badge/GitHub-Japanese-blue?logo=github)](https://github.com/Samizo-AITL/qiita-articles/tree/main) |
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

## 📚 Articles

- **01**  
  [【機械設計】GUI CADから脱却して設計をコード化するという考え方](https://samizo-aitl.github.io/qiita-articles/articles/01_gui-cad-to-code.html)

- **02**  
  [【機械設計】FreeCADとは何か（GUIとコードの位置づけ）](https://samizo-aitl.github.io/qiita-articles/articles/02_what-is-freecad.html)

- **03**  
  [【機械設計】FreeCADをコード設計ツールとして使う](https://samizo-aitl.github.io/qiita-articles/articles/03_freecad_code_design.html)

- **04**  
  [【機械設計】コードで行うパーツ設計の実例](https://samizo-aitl.github.io/qiita-articles/articles/04_part_design_with_code.html)

- **05**  
  [【機械設計】CAD設計をGit diffでレビューする](https://samizo-aitl.github.io/qiita-articles/articles/05_git_diff_code_design.html)

- **06**  
  [【機械設計】FreeCAD幾何モデルのショーケース](https://samizo-aitl.github.io/qiita-articles/articles/06_geometric_showcase_freecad.html)

- **07**  
  [【機械設計】FreeCADもLaTeXもKlayoutも同じだった ― Full Code設計の共通構造](https://samizo-aitl.github.io/qiita-articles/articles/07_full_code_mechanical_design_scope.html)

- **08**  
  [【GA4】GA4で海外アクセスを見るなら、主要都市の現在時刻も並べる](https://samizo-aitl.github.io/qiita-articles/articles/08_ga4_world_clock.html)

- **09**  
  [【ゲーム】SVG(DOM)だけでシューティングを完成させた（Canvas不要）](https://samizo-aitl.github.io/qiita-articles/articles/09_svg_shooter_with_dom.html)

- **10**  
  [【ゲーム】SVGシューティングをFSMで整理する（DOMゲームを壊さない設計）](https://samizo-aitl.github.io/qiita-articles/articles/10_svg_shooter_with_fsm.html)

- **11**  
  [【ゲーム】FSMで難易度と敵AIを制御する（SVGシューティング設計拡張）](https://samizo-aitl.github.io/qiita-articles/articles/11_svg_shooter_fsm_difficulty_ai.html)

- **12**  
  [【ゲーム】SVGシューティング完成版（FSM設計でちゃんと遊べるゲーム）](https://samizo-aitl.github.io/qiita-articles/articles/12_svg_shooter_complete_game.html)

- **13**  
  [【ゲーム】Canvasで弾幕を撃ったら気持ちよすぎた（設計？今回は置いとく）](https://samizo-aitl.github.io/qiita-articles/articles/13_canvas_shooter_qiita.html)

- **14**  
  [【ゲーム】SVGとCanvas、同じシューティングを作ってみたら体験が全然違った](https://samizo-aitl.github.io/qiita-articles/articles/14_svg_vs_canvas_same_game.html)

- **15**  
  [【Rekiden】AIにテンプレを貼るだけで戦国SLGが始まる｜Rekiden 川中島シナリオ](https://samizo-aitl.github.io/qiita-articles/articles/15_ai_template_rekiden_kawanakajima.html)

- **16**  
  [【Rekiden】AIをFSMとして使うとゲーム設計になる｜状態遷移で歴史シミュレーションを動かす](https://samizo-aitl.github.io/qiita-articles/articles/16_ai_game_fsm_design_rekiden.html)

- **17**  
  [【Rekiden】AI vs AIで歴史を自動進行させる｜評価関数を与えると戦国は勝手に動く](https://samizo-aitl.github.io/qiita-articles/articles/17_ai_vs_ai_auto_history_rekiden.html)

- **18**  
  [【Marp】VS CodeでMarkdownからプレゼン資料（HTML / PPTX）を作成する方法](https://samizo-aitl.github.io/qiita-articles/articles/18_vscode_md_to_html_pptx_marp.html)

- **19**  
  [【Marp】GitHub ActionsでMarkdownからプレゼン資料を自動生成しようとして、日本語豆腐で止まった話](https://samizo-aitl.github.io/qiita-articles/articles/19_marp_github_actions_japanese_tofu.html)

- **20**  
  [【Marp】日本語豆腐（□）はなぜ設定で直らないのか｜PPTXとフォントの構造](https://samizo-aitl.github.io/qiita-articles/articles/20_marp_japanese_tofu_not_fixable_by_settings.html)

- **21**  
  [【生成AI実験】同じ「京都」でもここまで変わる｜画像生成プロンプト指示語10パターン比較](https://samizo-aitl.github.io/qiita-articles/articles/21_image-generation_kyoto_10patterns.html)

- **22**  
  [【生成AI実験】寺院建築で検証する｜画像生成プロンプト指示語10パターン比較](https://samizo-aitl.github.io/qiita-articles/articles/22_image-generation_temple-architecture_10patterns.html)

- **23**  
  [【生成AI実験】日本語 vs 英語｜画像生成プロンプトは同じ意味でも同じ結果にならない](https://samizo-aitl.github.io/qiita-articles/articles/23_image-generation_japanese-vs-english_prompt.html)

- **24**  
  [【LLM基礎】LLMのからくりを構造で見る｜なぜ分かった気になるのか](https://samizo-aitl.github.io/qiita-articles/articles/24_llm_structure_overview.html)

- **25**  
  [【LLM設計】LLMを制御ループに入れるとどう壊れるか｜失敗パターンの構造分析](https://samizo-aitl.github.io/qiita-articles/articles/25_llm_in_control_loop_breaks.html)

- **26**  
  [【LLM設計】LLMを外側に置くとなぜ安定するのか｜壊れない配置の作り方](https://samizo-aitl.github.io/qiita-articles/articles/26_llm_outer_layer_stability.html)

- **27**  
  [【可視化の試み】難しい半導体物理・制御理論をアニメーションで理解する](https://samizo-aitl.github.io/qiita-articles/articles/27_gif_animation_visualization_intro.html)

- **28**  
  [【可視化】pn接合バンド構造を3Dアニメーションで見てみる](https://samizo-aitl.github.io/qiita-articles/articles/28_gif_anim_pn_junction_band.html)

- **29**  
  [【可視化】P制御のゲイン調整をアニメーションで理解する](https://samizo-aitl.github.io/qiita-articles/articles/29_gif_anim_p_control.html)

- **30**  
  [【音声生成AI設計】音声AIはなぜすぐ壊れるのか｜LLMを直接つなぐと破綻する理由](https://samizo-aitl.github.io/qiita-articles/articles/30_audio_ai_breaks_by_design.html)

- **31**  
  [【音声生成AI設計】音声AIをFSMで分解する｜発話・無音・割り込みはすべて状態だった](https://samizo-aitl.github.io/qiita-articles/articles/31_audio_ai_fsm_decomposition.html)

- **32**  
  [【音声生成AI設計】FSMに最小の音声を接続する｜自然さを捨てた壊れない第一声](https://samizo-aitl.github.io/qiita-articles/articles/32_audio_ai_minimal_speaking.html)

- **33**  
  [【音声生成AI設計】割り込みで音声AIは壊れる｜Speaking中に人が喋ったら何が起きるか](https://samizo-aitl.github.io/qiita-articles/articles/33_audio_ai_interrupt_handling.html)

- **34**  
  [【音声生成AI設計】LLMを安全に接続する｜Thinking状態にだけ置く理由](https://samizo-aitl.github.io/qiita-articles/articles/34_audio_ai_llm_safe_connection.html)

- **35**  
  [【フィジカルAI設計】🤖⚙️ フィジカルAIとは何か｜なぜAIは現実世界に出ると壊れるのか](https://samizo-aitl.github.io/qiita-articles/articles/35_physical_ai_definition.html)

- **36**  
  [【フィジカルAI設計】💥 なぜLLM直結は失敗するのか｜遅延・非決定性・制御不能](https://samizo-aitl.github.io/qiita-articles/articles/36_llm_direct_connection_failure.html)

- **37**  
  [【フィジカルAI設計】🏗️ 壊れない作り方｜PID×FSM×LLMの三層構造](https://samizo-aitl.github.io/qiita-articles/articles/37_physical_ai_three_layer_architecture.html)

- **38**  
  [【フィジカルAI設計】🧪 AITLは本当に壊れないのか｜PIDのみ vs AITLを並べて見せる](https://samizo-aitl.github.io/qiita-articles/articles/38_aitl_demo_pid_vs_fsm.html)

- **39**  
  [【物理の世界観】🌌 距離と時間｜Å・nm・km・光年を同じ軸で踏み抜く](https://samizo-aitl.github.io/qiita-articles/articles/39_physics_scale_distance_time.html)

- **40**  
  [【物理の世界観】⚡ 抵抗と電流｜nA・A・kAは同じ電流じゃない](https://samizo-aitl.github.io/qiita-articles/articles/40_physics_scale_resistance_current.html)

- **41**  
  [【物理の世界観】🔥 熱とエネルギー｜fJから恒星まで全部つながっている](https://samizo-aitl.github.io/qiita-articles/articles/41_physics_scale_heat_energy.html)

- **901**  
  [【送電線・鉄塔点検ドローンSkyEdge】差別化を仕様で固定する](https://samizo-aitl.github.io/qiita-articles/articles/901_skyedge_powerline_inspection_spec.html)

- **902**  
  [【送電線・鉄塔点検ドローンSkyEdge】1フライトV–I予算を切る](https://samizo-aitl.github.io/qiita-articles/articles/902_skyedge_powerline_vi_budget.html)

- **903**  
  [【送電線・鉄塔点検ドローンSkyEdge】CMOS×レンズ×撮影距離のトレードオフ](https://samizo-aitl.github.io/qiita-articles/articles/903_skyedge_cmos_lens_distance_tradeoff.html)

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
