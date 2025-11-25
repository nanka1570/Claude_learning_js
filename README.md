# Claude_learning_js
JavaScript学習用

Claudeを使用し、JavaScriptの学習を行う。
目標は、Reactの学習まで。

# 📚 React Learning Journey & Portfolio

> Web開発エンジニアへの転職を目指した3ヶ月間の学習記録とポートフォリオ

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Learning](https://img.shields.io/badge/Status-Learning-success)](https://github.com/nanka1570)

## 👨‍💻 About Me

新卒1年目エンジニア（組み込み系）から Web 開発エンジニアへの転職を目指して学習中です。

- 🎓 情報系専門学校卒業
- 💼 現在：富士ソフト株式会社（組み込み系エンジニア1年目）
- 🎯 目標：Web開発企業への転職（React使用）
- 📅 学習期間：2025年11月〜2026年2月（3ヶ月）
- ⏰ 学習時間：平日30分、休日3〜4時間

## 🎯 Portfolio Projects

### 🏆 施設予約システム（React版）

> 専門学校の卒業制作（PHP + SQL Server）をモダンなWeb技術で再実装

**Status**: 🔄 開発予定（2026年1月6日〜2月9日）  
**Demo**: Coming soon  
**Repository**: Coming soon

#### 予定機能
- ユーザー認証（ログイン・登録）
- 施設予約の作成・編集・削除
- 予約状況のカレンダー表示
- デジタルサイネージ表示
- 管理者ダッシュボード

#### 技術スタック
- **Frontend**: React 18, React Router
- **Backend**: Supabase（認証・DB）
- **Deploy**: Vercel

---

### 📦 学習プロジェクト

学習過程で作成予定の小規模アプリケーション

#### 1. ToDoリスト with API
- **Status**: 🔄 予定（12月）
- **機能**: タスク管理、フィルタリング、LocalStorage
- **技術**: React, useState, useEffect

#### 2. Weather Dashboard
- **Status**: 🔄 予定（12月）
- **機能**: 外部API連携、都市検索、天気予報
- **技術**: React, Axios, async/await

#### 3. Simple Blog
- **Status**: 🔄 予定（1月）
- **機能**: 記事一覧・詳細、React Router
- **技術**: React, React Router

---

## 📊 学習進捗

### 現在のフェーズ

**Phase 1: JavaScript基礎（11/13〜11/30）** - 🔄 **進行中（75%）**

| 項目 | 進捗 | 完了日 | 状態 |
|------|------|--------|------|
| **変数・関数・演算子** | ✅ 100% | 11/10 | 完了 |
| **条件分岐・ループ** | ✅ 100% | 11/15 | 完了 |
| **配列** | ✅ 100% | 11/21 | 完了 |
| **文字列** | 🔄 50% | - | 進行中 |
| **オブジェクト** | ⏳ 0% | - | 未着手 |
| **JSON** | ⏳ 0% | - | 未着手 |
| **非同期処理** | ⏳ 0% | - | 未着手 |
| **モジュール** | ⏳ 0% | - | 未着手 |

### 全体進捗

| フェーズ | 期間 | 内容 | 状態 | 進捗 |
|---------|------|------|------|------|
| **Phase 1**<br>JavaScript基礎 | 11/13〜11/30 | JavaScript Primer | 🔄 進行中 | ⬛⬛⬛⬜⬜ 75% |
| **Phase 2**<br>React基礎 | 12/2〜1/5 | Udemy講座<br>小規模アプリ作成 | ⏳ 未開始 | ⬜⬜⬜⬜⬜ 0% |
| **Phase 3**<br>ポートフォリオ | 1/6〜2/9 | 施設予約システム開発 | ⏳ 未開始 | ⬜⬜⬜⬜⬜ 0% |
| **Phase 4**<br>転職活動 | 2/10〜 | TypeScript学習<br>面接対策 | ⏳ 未開始 | ⬜⬜⬜⬜⬜ 0% |

**累計学習時間**: 約25時間（2025/11/25時点）  
**目標学習時間**: 約125〜130時間（3ヶ月）

---

## 📚 学習内容の詳細

### ✅ 完了した内容

<details>
<summary><strong>Week 1-2（11/1〜11/10）</strong></summary>

- コメント、変数宣言（const/let）、値の評価
- データ型とリテラル（プリミティブ型、オブジェクト）
- 演算子、暗黙的な型変換、Nullish coalescing
- 関数（デフォルト引数、Rest parameters）
- 分割代入（オブジェクト・配列）
- Arrow Function、コールバック関数

**重要な理解**
- `const` vs `let`：`const`を優先、再代入が必要な場合のみ`let`
- Arrow Function：Reactで毎日使う、`arguments`は使えない
- 分割代入：Reactのpropsで必須
- コールバック関数：map/filterなどで使用

</details>

<details>
<summary><strong>Week 3（11/15〜11/17）</strong></summary>

- 条件分岐（if、switch、三項演算子）
- ループ（for、while、forEach）
- 配列の基本操作

**重要な理解**
- ループはReactでは少なく、map/filterを多用
- 条件分岐の簡潔な書き方（三項演算子、Nullish coalescing）

</details>

<details>
<summary><strong>Week 4（11/18〜11/21）</strong></summary>

- 配列メソッド完全マスター
  - 検索：indexOf、findIndex、find、includes、some
  - 追加・削除：push、pop、shift、unshift、splice
  - 結合：concat、スプレッド構文
  - 変換：map、filter、reduce、flat、flatMap
  - その他：forEach、sort、reverse
- 破壊的/非破壊的メソッドの理解
- メソッドチェーン
- Object.groupBy（ES2024）

**重要な理解**
- **map**: 配列の各要素を変換（Reactで超頻出）
- **filter**: 条件に合う要素だけ抽出（Reactで超頻出）
- **reduce**: 配列を1つの値にまとめる
- 非破壊的メソッドがReactで必須

</details>

### 🔄 現在学習中（11/26〜）

<details>
<summary><strong>文字列（50%完了）</strong></summary>

**完了済み**
- エスケープシーケンス、Unicode、UTF-16
- 文字へのアクセス（[]、at()）
- 分解と結合（split、join）
- 一部取得（slice、substring）
- 検索（indexOf、includes、startsWith、endsWith）
- 正規表現の基礎

**残り**
- 正規表現の応用（置換、matchAll）
- タグ関数（軽く触れる）

</details>

### 📅 今後の予定

<details>
<summary><strong>Week 5-6（11/27〜12/1）</strong></summary>

**11/27-28（水木）**
- 文字列完了
- オブジェクトの基礎（プロパティ、メソッド、分割代入）

**11/29（土）**
- オブジェクト完了（スプレッド構文、Object.keys/values/entries）
- JSON（parse、stringify）
- Git講座完走

**11/30（日）**
- 非同期処理（Promise、async/await）
- モジュール（import/export）
- JavaScript総復習

</details>

<details>
<summary><strong>Week 7以降（12/2〜）</strong></summary>

**12/2（月）**
- React環境構築
- Udemy講座開始

**12/3-6（火〜金）**
- Udemy講座（JavaScript復習編）

**12/7-8（土日）**
- Udemy講座（React基礎）
- 初めてのReactコンポーネント作成
- カウンターアプリ作成

</details>

---

## 🛠️ 技術スタック

### 現在学習中
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white)
![Git](https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=white)

### 今後学習予定
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)
![Supabase](https://img.shields.io/badge/-Supabase-3ECF8E?logo=supabase&logoColor=white)
![Vercel](https://img.shields.io/badge/-Vercel-000000?logo=vercel&logoColor=white)

### 専門学校で学習済み
- Java（一番勉強した、応用も効く）
- PHP（卒業制作でメイン使用）
- SQL Server

---

## 📖 使用教材

### メイン教材
1. **JavaScript Primer**（無料）
   - URL: https://jsprimer.net/
   - 進捗：約75%

2. **Udemy講座**（購入済み）
   - 「モダンJavaScriptの基礎から始める挫折しないためのReact入門」
   - 約9時間、12/2から開始予定

3. **Git講座**（購入済み）
   - 「もう怖くないGit！チーム開発で必要なGitを完全マスター」
   - 11/29-30に受講予定

### サブ教材
- **YouTube**: セイト先生のWEB・ITエンジニア転職ラボ
- **MDN Web Docs**: JavaScriptリファレンス
- **React公式ドキュメント**: https://ja.react.dev/

---

## 📂 リポジトリ構成

```
Claude_learning_js/
├── js-practice/           # コード練習用
│   ├── week1/            # 変数、関数、基本構文
│   ├── week2/            # 条件分岐、ループ
│   ├── week3/            # 配列メソッド
│   ├── week4/            # 文字列、オブジェクト
│   └── week5/            # 非同期処理、モジュール
├── JavaScriptPrimer/     # 学習メモ（Markdown）
│   ├── 01_基本文法.md
│   ├── 02_配列.md
│   ├── 03_文字列.md
│   └── ...
├── small-projects/       # 小規模プロジェクト（今後）
│   ├── todo-app/
│   ├── weather-dashboard/
│   └── simple-blog/
└── README.md             # このファイル
```

---

## 💡 学習方針

### 🎯 学習ルール

#### 507日ルール
毎日5〜10分は**必ず**学習する
- 韓国語学習を507日継続した実績あり
- 体調が悪い日も、最低限は続ける
- **現在：26日連続達成中**

#### 10分ルール
10分以上悩んだらClaude/ChatGPTに質問
- 効率的に学習を進める

#### 無理しないルール
- 週1日は休息OK
- 体調優先
- 完璧を目指さない（70%理解で次へ）

### 📝 学習スタイル
- 「動かしながら学ぶ」「作りながら理解する」
- コードを書く時間を最優先（読む:書く = 3:7）
- メモは簡潔に（詳細すぎると時間がかかる）
- 実務での使用頻度を意識
- Reactとの関連を常に考える

---

## 📈 重要なマイルストーン

| 日付 | マイルストーン | 達成状況 |
|------|--------------|---------|
| **11/21** | 配列100%完了 | ✅ 達成 |
| **11/27** | 文字列100%完了 | ⏳ 予定 |
| **11/30** | JavaScript Primer Phase 1 完全達成 | ⏳ 予定 |
| **12/2** | React環境構築完了 | ⏳ 予定 |
| **12/8** | Reactの基礎理解、初アプリ完成 | ⏳ 予定 |
| **12/22** | Udemy講座完走、小規模アプリ3つ完成 | ⏳ 予定 |
| **1/12** | ポートフォリオ設計完了 | ⏳ 予定 |
| **2/9** | ポートフォリオ完成 | ⏳ 予定 |

---

## 🎓 開発環境

- **OS**: Windows（メイン）、macOS（サブ）
- **エディタ**: VSCode
- **Node.js**: インストール済み
- **Git**: インストール済み
- **GitHub**: [@nanka1570](https://github.com/nanka1570)

---

## 🔗 関連リンク

- **JavaScript Primer**: https://jsprimer.net/
- **React公式**: https://ja.react.dev/
- **MDN Web Docs**: https://developer.mozilla.org/ja/

---

## 📬 Contact

- **GitHub**: [@nanka1570](https://github.com/nanka1570)
- **Email**: （転職活動本格化後に公開予定）

---

## 📊 今週の目標（11/26〜12/1）

- [x] 配列メソッドマスター（11/21達成）
- [ ] 文字列完了（11/27予定）
- [ ] オブジェクト完了（11/29予定）
- [ ] JSON理解（11/29予定）
- [ ] Git講座完走（11/29-30予定）
- [ ] 非同期処理の概念理解（11/30予定）
- [ ] モジュールの使い方理解（11/30予定）
- [ ] JavaScript Primer Phase 1 完全達成（11/30予定）

---

## 🎉 最近の成果

### 11/21（木）
- ✅ 配列メソッド完全マスター
- map、filter、reduce、flat、flatMapを実装
- 破壊的/非破壊的メソッドの違いを完全理解

### 11/25（月）
- ✅ 文字列学習50%達成
- 正規表現の基礎理解
- split、slice、indexOf、includesを習得

---

**最終更新：2025年11月26日**