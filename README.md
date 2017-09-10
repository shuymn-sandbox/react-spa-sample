# Sample Webapp

格好付けたいお年頃

* Backend: Laravel 5.5
* Frontend: React.js
* CSS Framework: Material-UI

React-RouterでルーティングしてSPAっぽくなってる

React関連のライブラリのアップデートが激しくて情報あつめるのがつらかった(感想)

# Requirements

ざっくり

* composer
* yarn(npm)

# Quick Start

たぶんこれでいける

```shell
// リポジトリをローカルにもってくる
git clone https://github.com/shuymn/react-spa-sample.git
cd react-spa-sample
 
// 必要なもののインストール
composer update
yarn install (または npm install)
 
// js と css のビルド
yarn run dev (または npm run dev)
 
// 簡易webサーバの起動
php artisan serve
 
// http://127.0.0.1:8000 にアクセス (おわり)
```

# Descriptions

Laravelの初期状態から追加したものを紹介

## PHP Libraries

* PHP Code Sniffer: 判定ツール。intelliJで使ってる
    * phpcs.xml: .php_cs の設定に近くなるように設定したもの
    * Symfony Cording Standard: ↑ 近くするために必要だった
      * 使うなら下のコマンドを打たないとだめ
      * `vendor/bin/phpcs --config-set installed_paths vendor/escapestudios/symfony2-coding-standard`
* PHP CS Fixer: 整形ツール
    * .php_cs が設定ファイル
* PHP Mess Detector: エラーではないけどバグの元になりそうなものを見つけてくれる。intelliJで使ってる
    * ruleset.xml が設定ファイル
* Laravel IDE Helper: Laravel用の補完のためのファイルを生成してくれる
    * `php artisan ide-helper:generate` で生成してくれる
    * Laravel 5.5 ではServiceProviderに登録しなくても良い
* Laravel Debugbar: Webで確認する時に便利なLaravel用のデバッグバーを表示してくれる

## JavaScript Libraries

* react, react-router, material-ui: これがやりたかった
* react-tap-event-plugin: Material-UIが依存
* normalize.css: その名の通り
    * webpack.mix.js をすこしいじってビルドされたcssと一緒にしてる
