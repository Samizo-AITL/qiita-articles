

# 42. [IEEE Paper] Running a Control Systems LaTeX PoC to the End with CI | GitHub Actions
tags:LaTeX,IEEE,ControlSystems,AcademicWriting,GitHubActions,CI

---


## 📌 Position of This Article

This article is a continuation of the following series:

- **39**: Fixing the LaTeX environment first on VS Code  
- **40**: Defining a minimal LaTeX structure to finish an IEEE Control Systems paper  
- **41**: Reaching the final PDF using that structure  

In this article, as the **final step**, I document the following PoC:

> **“Can the same LaTeX structure be compiled to the end on CI (GitHub Actions)?”**

---

## 🎯 What This Article Covers

This article **does not** discuss:

- Control theory  
- Experimental results  
- Research novelty  

The goal is strictly this:

> **Can an IEEE Control Systems paper be compiled end-to-end with LaTeX on CI without structural failure?**

---

## 🤔 Why Go as Far as GitHub Actions?

Even if a PDF compiles locally, many papers stop at the next stage:

- Environment-dependent failures  
- BibTeX errors on CI  
- No logs, making debugging impossible  

In other words:

> **“It works on my machine, but is not reproducible.”**

This PoC verifies that the same LaTeX structure works on:

- Local environments  
- GitHub Actions (Ubuntu)  

with no special handling.

---

## 🧱 Design Policy

This CI setup prioritizes the following:

- IEEEtran + XeLaTeX as a fixed assumption  
- Always collecting logs, even on failure  
- Uploading the final PDF as an artifact on success  

The goal is to avoid the situation where **CI fails silently**.

---

## 🧩 Full GitHub Actions Workflow

Below is the workflow used in this PoC.

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

      # --- Always show logs ---
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

## 🔍 Key Points of This Workflow

### ① Explicit XeLaTeX Usage

```yaml
latexmk_use_xelatex: true
```

This fixes the assumptions for:

- IEEEtran  
- newtx text/math fonts  

directly on the CI side.

---

### ② Always Collect Logs

```yaml
if: always()
```

ensures that:

- `main.log`  
- `latexmk.log`  

are always available.

Without logs, debugging LaTeX failures on CI is nearly impossible.

---

### ③ Upload the PDF as an Artifact

```yaml
uses: actions/upload-artifact@v4
```

allows the following to be preserved:

- Final compiled PDF  
- Build logs  

This serves as proof that:

> **“This LaTeX structure successfully compiles on CI.”**

---

## 🧠 What This PoC Demonstrated

- IEEEtran compiles cleanly on CI  
- Appendix and Biography do not break the build  
- LaTeX can be fully automated if the structure is correct  

---

## 🧾 Series Summary (39–42)

- **39**: Fixed the environment and workflow first  
- **40**: Defined a minimal LaTeX structure for completion  
- **41**: Reached the final PDF  
- **42**: Verified the same structure on CI (GitHub Actions)  

Only after this foundation is stable does it make sense to refine the paper content.

---

## 🏁 Closing Remarks

Many papers stop not because of theory or experiments, but because:

> **“The structure is not reproducible.”**

By fixing the LaTeX structure and running it on CI:

- Environment differences  
- Reproducibility issues  
- Individual dependency  

can all be eliminated at once.

I hope this PoC helps anyone struggling to finish an IEEE Control Systems paper with LaTeX.

---

*This article documents a LaTeX / CI proof-of-concept and does not aim to evaluate or claim research contributions.*

