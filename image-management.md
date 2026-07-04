# 画像管理リスト — trattoria lucente

> 最終更新: 2026-07-05（Pexelsから実写真27点を調達・差し込み済み）
> 方針: 画像は生成せず、実写真（プロカメラマンによる撮影 or 有償ストック）を推奨。
> 本ドキュメントは「どこに」「どんな写真を」「どんな意図で」配置するかの仕様書。

---

## 調達済み画像について（2026-07-05更新）

以下すべての画像をPexels（無料・商用利用可・帰属表示不要ライセンス）から調達し、`assets/images/`に配置済みです。Pillowで最適化し、hero-main.jpgは300KB以下、その他は概ね150KB以下に圧縮しています。

**注意**: 一部の写真は当初のメニュー名と完全一致しないため、写真の内容に合わせてメニュー名・説明文を調整しました（例: 「薪窯ロティサリーチキン」→「仔鶏の薪火コンソメ仕立て」、「雲丹とレモンのタリオリーニ」→「海の幸のスパゲッティ」）。本番運用では、実際の提供メニューと写真を完全に一致させるため、オリジナル撮影への差し替えを推奨します。

---

## 画像ファイル一覧

| No. | ファイルパス | 使用箇所 | 推奨サイズ | 優先度 |
|-----|------------|---------|-----------|--------|
| 01 | assets/images/hero-main.jpg | Hero メインビジュアル | 1920×1080px（2x: 3840×2160） | 最優先・LCP対象 |
| 02 | assets/images/concept-dining.jpg | Concept フルワイド背景 | 1600×1067px | 高 |
| 03 | assets/images/chef-cooking.jpg | シェフの想い | 1000×1250px | 高 |
| 04 | assets/images/commit-firewood.jpg | こだわり01（薪火調理） | 900×1050px | 高 |
| 05 | assets/images/commit-ingredients.jpg | こだわり02（厳選食材） | 900×1050px | 高 |
| 06 | assets/images/commit-wine.jpg | こだわり03（ソムリエワイン） | 900×1050px | 高 |
| 07 | assets/images/menu-chicken.jpg | メニュー：薪窯ロティサリーチキン | 800×600px | 高 |
| 08 | assets/images/menu-steak.jpg | メニュー：特製ビステッカ | 800×600px | 高 |
| 09 | assets/images/menu-pasta.jpg | メニュー：雲丹とレモンのタリオリーニ | 800×600px | 高 |
| 10 | assets/images/menu-pizza.jpg | メニュー：渡り蟹のピッツァ | 800×600px | 中 |
| 11 | assets/images/menu-antipasti.jpg | メニュー：前菜盛り合わせ | 800×600px | 中 |
| 12 | assets/images/menu-dolce.jpg | メニュー：ドルチェ盛り合わせ | 800×600px | 中 |
| 13 | assets/images/interior-main.jpg | 店内紹介：全景（大） | 1000×1000px | 高 |
| 14 | assets/images/interior-counter.jpg | 店内紹介：カウンター席 | 600×400px | 中 |
| 15 | assets/images/interior-kitchen.jpg | 店内紹介：オープンキッチン | 600×400px | 高 |
| 16 | assets/images/interior-table.jpg | 店内紹介：テーブル席（横長） | 1000×500px | 中 |
| 17 | assets/images/interior-cellar.jpg | 店内紹介：ワインセラー | 600×650px | 中 |
| 18 | assets/images/interior-entrance.jpg | 店内紹介：エントランス | 600×650px | 低 |
| 19 | assets/images/voice-01.jpg | お客様の声：40代夫婦 | 176×176px（円形トリミング） | 中 |
| 20 | assets/images/voice-02.jpg | お客様の声：50代接待 | 176×176px | 中 |
| 21 | assets/images/voice-03.jpg | お客様の声：20代カップル | 176×176px | 中 |
| 22 | assets/images/flow-booking.jpg | 流れ01：WEB予約 | 800×600px | 中 |
| 23 | assets/images/flow-welcome.jpg | 流れ02：ご来店 | 800×600px | 中 |
| 24 | assets/images/flow-dining.jpg | 流れ03：食事風景 | 800×600px | 高 |
| 25 | assets/images/flow-farewell.jpg | 流れ04：締めくくり | 800×600px | 中 |
| 26 | assets/images/cta-bg.jpg | 最終CTA 背景 | 1920×900px | 高 |
| 27 | assets/images/og-image.jpg | OGP / SNSシェア用 | 1200×630px | 高 |

---

## 撮影・選定ガイドライン（全画像共通）

- **料理写真**: 湯気・シズル感・薪火の揺らめき・炎の質感・浅い被写界深度（f/1.8〜2.8相当）・暖色系タングステン光（2800〜3200K）
- **人物写真**: 食事を楽しむ夫婦/カップルの自然な表情、ワイングラスを傾ける仕草、シェフの調理中の真剣な眼差し。ポーズは"見られている"感を出さない自然体を優先
- **共通トーン**: 黒〜チャコールを背景に、暖色照明のハイライトが際立つコントラスト。彩度は上げすぎず、フィルムライクな質感
- **禁止事項**: 明るすぎるフラット照明・白背景スタジオ写真・ストックフォトにありがちな不自然な笑顔

---

## 各画像 詳細仕様

### 01. hero-main.jpg（最重要・LCP）
- **使用目的**: Hero全画面背景。ファーストビューで「薪火」「高級感」を一瞬で伝える
- **推奨構図**: 薪窯 or 炭火の上で炎に包まれる肉/魚料理のクローズアップ〜ミディアムショット。奥に炎のボケ、湯気が立ちのぼる。左下 or 下部にテキストが乗るため、上部〜中央に被写体、下部は暗めの余白
- **検索キーワード（英語）**: `wood fire cooking flame closeup`, `open flame grilled meat steam`, `italian restaurant wood oven dramatic`, `fire cooking dark moody photography`

### 02. concept-dining.jpg
- **使用目的**: コンセプトの世界観訴求。「特別な時間」を視覚化
- **推奨構図**: キャンドルライトのテーブルでワイングラスを合わせるカップル、または向かい合って会話する男女の後ろ姿。暖色照明・浅い被写界深度
- **検索キーワード**: `couple candlelight dinner toast wine`, `romantic restaurant table warm light`, `anniversary dinner date night photography`

### 03. chef-cooking.jpg
- **使用目的**: シェフの想いセクション。作り手の顔・技術への信頼構築
- **推奨構図**: 薪窯 or 炭火の前に立つシェフの横顔〜上半身。炎を見つめる真剣な表情、腕まくりしたユニフォーム、炎のオレンジ色が顔に反射
- **検索キーワード**: `chef cooking over open flame portrait`, `italian chef wood fire kitchen`, `chef intense focus fire light`

### 04. commit-firewood.jpg
- **使用目的**: こだわり01（薪火調理）。技術と炎の迫力を見せる
- **推奨構図**: 薪窯内部で焼かれる肉の縦構図クローズアップ。炎・炭・煙がはっきり見える
- **検索キーワード**: `wood fired oven meat closeup flame`, `charcoal grill fire texture food`

### 05. commit-ingredients.jpg
- **使用目的**: こだわり02（厳選食材）。産地・鮮度の訴求
- **推奨構図**: 木箱に並んだ旬の野菜・魚介類の縦構図。自然光 or 暖色のスポットライト
- **検索キーワード**: `fresh seasonal vegetables wooden crate`, `market fresh seafood ingredients photography`

### 06. commit-wine.jpg
- **使用目的**: こだわり03（ソムリエワイン）。専門性・上質さの訴求
- **推奨構図**: ソムリエがグラスにワインを注ぐ手元の縦構図。背景はぼかし、グラスに照明が反射
- **検索キーワード**: `sommelier pouring red wine glass closeup`, `wine pouring dark moody restaurant`

### 07-12. menu-*.jpg（メニュー写真6点）
- **使用目的**: おすすめメニューのシズル感訴求。「食べたい」を喚起
- **推奨構図**: 各皿を斜め45度 or 真上からのアングルで撮影。皿全体+背景の暖色ボケ。湯気・照り・断面（肉汁など）を強調
- **検索キーワード**: `wood fire rotisserie chicken steam`, `thick cut steak medium rare closeup`, `uni lemon pasta tagliolini`, `crab tomato pizza wood oven`, `italian antipasti platter overhead`, `italian dessert plate dark elegant`

### 13-18. interior-*.jpg（店内写真6点）
- **使用目的**: 空間の高級感・落ち着き・オープンキッチンの臨場感を見せる
- **推奨構図**: 全景（広角）、カウンター（オープンキッチン越し）、キッチン（炎が見える）、テーブル（キャンドル）、ワインセラー、エントランス（外観 or 扉）
- **検索キーワード**: `moody italian restaurant interior warm light`, `open kitchen counter seats restaurant`, `wine cellar restaurant dark wood`, `restaurant entrance wood door dim light`

### 19-21. voice-*.jpg（お客様アバター3点）
- **使用目的**: 口コミの信頼性向上
- **推奨構図**: 円形トリミング想定の正面〜斜め顔写真。自然な表情
- **検索キーワード**: `japanese couple portrait smile natural`, `business man portrait confident`, `young couple smiling portrait warm light`
- **注意**: 実際の顧客写真を使用する場合は書面での許諾を必ず取得すること

### 22-25. flow-*.jpg（利用の流れ4点）
- **使用目的**: 予約〜来店〜食事〜会計までの体験を視覚化し、初回利用の不安を解消
- **推奨構図**: スマホ予約操作手元／案内される後ろ姿／食事とワインを楽しむ様子／デザートで乾杯する様子
- **検索キーワード**: `hand booking restaurant reservation smartphone`, `restaurant staff guiding guests`, `couple enjoying wine dinner`, `dessert toast celebration dinner`

### 26. cta-bg.jpg
- **使用目的**: 最終CTA背景。感情のピークで予約を後押し
- **推奨構図**: 薄暗い店内、テーブルにキャンドルとワイングラスのみのミニマルな構図。テキストオーバーレイのため中央〜上部に余白
- **検索キーワード**: `candlelit table wine glass dark restaurant`, `minimal elegant dinner table night`

### 27. og-image.jpg
- **使用目的**: SNSシェア・検索結果でのブランド訴求
- **推奨構図**: Heroと同系統 or 店名ロゴ＋薪火料理の合成。テキスト「trattoria lucente / 恵比寿」を入れる
- **ツール**: Figma / Photoshopで制作推奨

---

## 画像最適化チェックリスト

- [ ] hero-main.jpg・cta-bg.jpgは300KB以下に圧縮（Squoosh / TinyPNG）
- [ ] その他画像は150KB以下推奨
- [ ] WebP形式への変換（`<picture>`タグでJPEGフォールバック）
- [ ] 全`<img>`に具体的なaltテキストを設定済み（本ファイル内で確認可）
- [ ] hero-main.jpgは`fetchpriority="high"`設定済み
- [ ] その他画像は`loading="lazy"`設定済み
- [ ] `width`/`height`属性設定済み（CLS対策）
