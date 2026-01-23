# qiita-articles

このリポジトリは、Qiitaに投稿した技術記事を  
**「原稿（一次情報）」としてGitHubで管理するためのリポジトリ**です。

Qiitaは公開・拡散の場、  
GitHubは **記事の正本・編集履歴・構造管理の場**  
という役割分担を前提にしています。

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

- 01 : GUI CADから脱却して設計をコード化するという考え方

（必要に応じて年別・テーマ別に拡張）

---

## License / Copyright

記事本文は著作物です。  
再利用条件が必要な場合は、ここに明示します。
