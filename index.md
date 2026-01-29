---
title: "qiita-articles"
description: "qiita-articles"
---

# qiita-articles

このリポジトリは、Qiitaに投稿した技術記事を  
**「原稿（一次情報）」としてGitHubで管理するためのリポジトリ**です。

Qiitaは公開・拡散の場、  
GitHubは **記事の正本・編集履歴・構造管理の場**  
という役割分担を前提にしています。

---

## 🔗 Links

| Language | GitHub Pages 🌐 | GitHub 💻 |
|----------|----------------|-----------|
| 🇺🇸 English | [![GitHub Pages EN](https://img.shields.io/badge/GitHub%20Pages-English-brightgreen?logo=github)](https://samizo-aitl.github.io/qiita-articles/) | [![GitHub Repo EN](https://img.shields.io/badge/GitHub-English-blue?logo=github)](https://github.com/Samizo-AITL/qiita-articles/tree/main) |

---

## Purpose

- Qiita記事本文を Markdown で管理する
- 改稿・追記・構成変更を履歴として残す
- 図・補足資料・参考リンクを記事と一体で管理する
- 単発記事を将来的にシリーズ・体系へ発展させられる状態を保つ

---

## Repository Structure

```
qiita-articles/
├─ README.md
├─ articles/
│  └─ 01_gui-cad-to-code.md
├─ assets/
│  └─ images/
└─ references/
```

### 各ディレクトリの役割
- `articles/`  
  Qiita記事の本文（原稿・正本）
- `assets/images/`  
  記事で使用する画像・図・スクリーンショット
- `references/`  
  補足説明、参考リンク、検討メモなど（Qiita未掲載情報を含む）

---

## Writing Policy

- GitHub上のMarkdownを**正本**とする
- Qiitaには公開用として抜粋・調整した内容を投稿する
- 構成変更・加筆はGitHub側で先に行う
- 記事は「読み物」ではなく**技術資産**として扱う

---

## Articles

- **01**  
  [【機械設計】GUI CADから脱却して設計をコード化するという考え方](articles/01_gui-cad-to-code.md)

- **02**  
  [【機械設計】FreeCADとは何か（GUIとコードの位置づけ）](articles/02_what-is-freecad.md)

- **03**  
  [【機械設計】FreeCADをコード設計ツールとして使う](articles/03_freecad_code_design.md)

- **04**  
  [【機械設計】コードで行うパーツ設計の実例](articles/04_part_design_with_code.md)

- **05**  
  [【機械設計】CAD設計をGit diffでレビューする](articles/05_git_diff_code_design.md)

- **06**  
  [【機械設計】FreeCAD幾何モデルのショーケース](articles/06_geometric_showcase_freecad.md)

- **07**  
  [【機械設計】FreeCADもLaTeXもKlayoutも同じだった ― Full Code設計の共通構造](articles/07_full_code_mechanical_design_scope.md)

- **08**  
  [【GA4】GA4で海外アクセスを見るなら、主要都市の現在時刻も並べる](articles/08_ga4_world_clock.md)

- **09**  
  [【ゲーム】SVG(DOM)だけでシューティングを完成させた（Canvas不要）](articles/09_svg_shooter_with_dom.md)

- **10**  
  [【ゲーム】SVGシューティングをFSMで整理する（DOMゲームを壊さない設計）](articles/10_svg_shooter_with_fsm.md)

- **11**  
  [【ゲーム】FSMで難易度と敵AIを制御する（SVGシューティング設計拡張）](articles/11_svg_shooter_fsm_difficulty_ai.md)

- **12**  
  [【ゲーム】SVGシューティング完成版（FSM設計でちゃんと遊べるゲーム）](articles/12_svg_shooter_complete_game.md)

- **13**  
  [【ゲーム】Canvasで弾幕を撃ったら気持ちよすぎた（設計？今回は置いとく）](articles/13_canvas_shooter_qiita.md)

- **14**  
  [【ゲーム】SVGとCanvas、同じシューティングを作ってみたら体験が全然違った](articles/14_svg_vs_canvas_same_game.md)

- **15**  
  [【Rekiden】AIにテンプレを貼るだけで戦国SLGが始まる｜Rekiden 川中島シナリオ](articles/15_ai_template_rekiden_kawanakajima.md)

- **16**  
  [【Rekiden】AIをFSMとして使うとゲーム設計になる｜状態遷移で歴史シミュレーションを動かす](articles/16_ai_game_fsm_design_rekiden.md)

- **17**  
  [【Rekiden】AI vs AIで歴史を自動進行させる｜評価関数を与えると戦国は勝手に動く](articles/17_ai_vs_ai_auto_history_rekiden.md)

- **18**  
  [【Marp】VS CodeでMarkdownからプレゼン資料（HTML / PPTX）を作成する方法](articles/18_vscode_md_to_html_pptx_marp.md)

- **19**  
  [【Marp】GitHub ActionsでMarkdownからプレゼン資料を自動生成しようとして、日本語豆腐で止まった話](articles/19_marp_github_actions_japanese_tofu.md)

- **20**  
  [【Marp】日本語豆腐（□）はなぜ設定で直らないのか｜PPTXとフォントの構造](articles/20_marp_japanese_tofu_not_fixable_by_settings.md)

- **21**  
  [【生成AI実験】同じ「京都」でもここまで変わる｜画像生成プロンプト指示語10パターン比較](articles/21_image-generation_kyoto_10patterns.md)

- **22**  
  [【生成AI実験】寺院建築で検証する｜画像生成プロンプト指示語10パターン比較](articles/22_image-generation_temple-architecture_10patterns.md)

- **23**  
  [【生成AI実験】日本語 vs 英語｜画像生成プロンプトは同じ意味でも同じ結果にならない](articles/23_image-generation_japanese-vs-english_prompt.md)

- **24**  
  [【LLM基礎】LLMのからくりを構造で見る｜なぜ分かった気になるのか](articles/24_llm_structure_overview.md)

- **25**  
  [【LLM設計】LLMを制御ループに入れるとどう壊れるか｜失敗パターンの構造分析](articles/25_llm_in_control_loop_breaks.md)

- **26**  
  [【LLM設計】LLMを外側に置くとなぜ安定するのか｜壊れない配置の作り方](articles/26_llm_outer_layer_stability.md)

- **901**  
  [【送電線・鉄塔点検ドローンSkyEdge】差別化を仕様で固定する](articles/901_skyedge_powerline_inspection_spec.md)

- **902**  
  [【送電線・鉄塔点検ドローンSkyEdge】1フライトV–I予算を切る](articles/902_skyedge_powerline_vi_budget.md)

- **903**  
  [【送電線・鉄塔点検ドローンSkyEdge】CMOS×レンズ×撮影距離のトレードオフ](articles/903_skyedge_cmos_lens_distance_tradeoff.md)
  
（必要に応じて番号順に追記）

---

## License / Copyright

記事本文は著作物です。  
再利用条件が必要な場合は、ここに明示します。

