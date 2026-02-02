---
layout: default
title: Qiita Articles
---

# 🧩📚 qiita-articles

This repository manages technical articles published on **Qiita**  
with **GitHub as the single source of truth (SSOT)** for the original manuscripts.

Qiita is used as a **public publishing and distribution platform**,  
while GitHub serves as the **canonical store for content, structure, and revision history**.

---

## 🔗 Links

| Language | GitHub Pages 🌐 | GitHub 💻 |
|----------|----------------|-----------|
| English | [![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-English-brightgreen?logo=github)](https://samizo-aitl.github.io/qiita-articles/) | [![GitHub Repo](https://img.shields.io/badge/GitHub-English-blue?logo=github)](https://github.com/Samizo-AITL/qiita-articles/tree/main) |

---

## 🎯 Purpose

- 📝 Manage Qiita article manuscripts in Markdown
- 🧭 Preserve revision history for edits, expansions, and structural changes
- 🖼️ Manage figures, diagrams, and supplementary materials alongside articles
- 🧱 Keep articles ready to evolve into **series and structured knowledge assets**

---

## 🗂 Repository Structure

```
qiita-articles/
├─ README.md
├─ articles/
│ └─ 01_gui-cad-to-code.md
├─ assets/
│ └─ images/
└─ references/
```


### 📁 Directory Roles

- ✍️ `articles/`  
  Canonical article manuscripts (single source of truth)
- 🖼️ `assets/images/`  
  Images, diagrams, and screenshots used in articles
- 📎 `references/`  
  Supplementary notes, references, and internal memos  
  (including content not published on Qiita)

---

## 🧪 Writing Policy

- 🏛 Markdown in GitHub is the **authoritative version**
- 📣 Qiita posts are **curated / adjusted excerpts** for public release
- 🔁 Structural changes and major edits are done **on GitHub first**
- 🧠 Articles are treated as **technical assets**, not casual blog posts

---

## 📚 Articles

- **01**  
  [【Mechanical Design】From GUI CAD to Code-Based Design](articles/01_gui-cad-to-code.md)

- **02**  
  [【Mechanical Design】What Is FreeCAD? — The Roles of GUI and Code](articles/02_what-is-freecad.md)

- **03**  
  [【Mechanical Design】Using FreeCAD as a Code-Driven Design Tool](articles/03_freecad_code_design.md)

- **04**  
  [【Mechanical Design】Practical Examples of Code-Based Part Design](articles/04_part_design_with_code.md)

- **05**  
  [【Mechanical Design】Reviewing CAD Designs with Git Diff](articles/05_git_diff_code_design.md)

- **06**  
  [【Mechanical Design】FreeCAD Geometric Model Showcase](articles/06_geometric_showcase_freecad.md)

- **07**  
  [【Mechanical Design】FreeCAD, LaTeX, and Klayout Are the Same — The Common Structure of Full-Code Design](articles/07_full_code_mechanical_design_scope.md)

- **08**  
  [【GA4】Visualizing Overseas Access in GA4 with Local Time Zones](articles/08_ga4_world_clock.md)

- **09**  
  [【Game Dev】Building a Shooting Game Using Only SVG (No Canvas)](articles/09_svg_shooter_with_dom.md)

- **10**  
  [【Game Dev】Structuring an SVG Shooter with FSM (Without Breaking the DOM)](articles/10_svg_shooter_with_fsm.md)

- **11**  
  [【Game Dev】Controlling Difficulty and Enemy AI with FSM](articles/11_svg_shooter_fsm_difficulty_ai.md)

- **12**  
  [【Game Dev】Complete SVG Shooter — A Fully Playable FSM-Based Game](articles/12_svg_shooter_complete_game.md)

- **13**  
  [【Game Dev】Canvas Bullet Hell Is Too Fun (Design Discussion Skipped This Time)](articles/13_canvas_shooter_qiita.md)

- **14**  
  [【Game Dev】SVG vs Canvas — Same Shooter, Totally Different Experience](articles/14_svg_vs_canvas_same_game.md)

- **15**  
  [【Rekiden】Start a Sengoku Strategy Game by Pasting an AI Template](articles/15_ai_template_rekiden_kawanakajima.md)

- **16**  
  [【Rekiden】Using AI as an FSM — State Transitions Drive Historical Simulation](articles/16_ai_game_fsm_design_rekiden.md)

- **17**  
  [【Rekiden】AI vs AI Auto-Progressing History with Evaluation Functions](articles/17_ai_vs_ai_auto_history_rekiden.md)

- **18**  
  [【Marp】Creating Presentations from Markdown in VS Code (HTML / PPTX)](articles/18_vscode_md_to_html_pptx_marp.md)

- **19**  
  [【Marp】Automating Markdown-to-Presentation with GitHub Actions — Stuck on Japanese Tofu](articles/19_marp_github_actions_japanese_tofu.md)

- **20**  
  [【Marp】Why Japanese Tofu (□) Cannot Be Fixed by Settings — PPTX and Font Internals](articles/20_marp_japanese_tofu_not_fixable_by_settings.md)

- **21**  
  [【Generative AI Experiments】“Kyoto” Generates 10 Completely Different Images Depending on Prompt Instructions](articles/21_image-generation_kyoto_10patterns.md)

- **22**  
  [【Generative AI Experiments】Temple Architecture Prompt Comparison — 10 Instruction Patterns](articles/22_image-generation_temple-architecture_10patterns.md)

- **23**  
  [【Generative AI Experiments】Japanese vs English Prompts — Same Meaning, Different Results](articles/23_image-generation_japanese-vs-english_prompt.md)

- **24**  
  [【LLM Basics】Understanding LLMs Through Structure — Why We Feel Like We Understand](articles/24_llm_structure_overview.md)

- **25**  
  [【LLM Design】How LLMs Break Inside Control Loops — Failure Pattern Analysis](articles/25_llm_in_control_loop_breaks.md)

- **26**  
  [【LLM Design】Why Placing LLMs Outside the Loop Stabilizes Systems](articles/26_llm_outer_layer_stability.md)

- **27**  
  [【Visualization】Animating Semiconductor Physics and Control Theory for Intuition](articles/27_gif_animation_visualization_intro.md)

- **28**  
  [【Visualization】3D Animation of PN Junction Band Structures](articles/28_gif_anim_pn_junction_band.md)

- **29**  
  [【Visualization】Understanding P-Control Gain Tuning via Animation](articles/29_gif_anim_p_control.md)

- **30**  
  [【Audio AI Design】Why Voice AI Breaks Easily — Structural Failure of Direct LLM Connections](articles/30_audio_ai_breaks_by_design.md)

- **31**  
  [【Audio AI Design】Decomposing Voice AI with FSM — Speaking, Silence, and Interrupts](articles/31_audio_ai_fsm_decomposition.md)

- **32**  
  [【Audio AI Design】Connecting Minimal Audio to FSM — The First Unbreakable Utterance](articles/32_audio_ai_minimal_speaking.md)

- **33**  
  [【Audio AI Design】Interruptions Break Voice AI — What Happens When Humans Talk Mid-Speech](articles/33_audio_ai_interrupt_handling.md)

- **34**  
  [【Audio AI Design】Safely Connecting LLMs — Why They Belong Only in the Thinking State](articles/34_audio_ai_llm_safe_connection.md)

- **35**  
  [【Physical AI Design】🤖⚙️ What Is Physical AI? — Why AI Breaks in the Real World](articles/35_physical_ai_definition.md)

- **36**  
  [【Physical AI Design】💥 Why Direct LLM Connections Fail — Latency, Non-Determinism, Loss of Control](articles/36_llm_direct_connection_failure.md)

- **37**  
  [【Physical AI Design】🏗️ Building Unbreakable Systems — PID × FSM × LLM Architecture](articles/37_physical_ai_three_layer_architecture.md)

- **38**  
  [【Physical AI Design】🧪 Does AITL Really Work? — Side-by-Side PID vs AITL Demo](articles/38_aitl_demo_pid_vs_fsm.md)

- **39**  
  [【Physics Worldview】🌌 Distance and Time — From Ångström to Light-Years](articles/39_physics_scale_distance_time.md)

- **40**  
  [【Physics Worldview】⚡ Resistance and Current — nA, A, and kA Are Not the Same](articles/40_physics_scale_resistance_current.md)

- **41**  
  [【Physics Worldview】🔥 Heat and Energy — From fJ to Stars](articles/41_physics_scale_heat_energy.md)

- **901–903**  
  SkyEdge Powerline Inspection Drone Design Series  
  (Specifications, V–I Budgeting, CMOS–Lens–Distance Trade-offs)

---

