# status
[![Netlify Status](https://api.netlify.com/api/v1/badges/2ee24bcb-0f1d-490f-a5b5-020db2d3cff1/deploy-status)](https://app.netlify.com/sites/mystifying-mahavira-e21c29/deploys)
プレビューのためだけにnetlifyを使用中

# AIESEC JP HP

1. [環境構築手順](#環境構築手順)
1. [テストやコードチェックのためのコマンド](#テストやコードチェックのためのコマンド)
1. [開発時に知しっていて欲しいこと](#開発時)
1. [ローカルでの動かし方](#ローカルでの動かし方)
1. [使用している技術と背景](#使用している技術と背景)
1. [参考](#参考)




## 環境構築手順

### clone時のコマンド

> 以下色々コマンド書きますが、理解してから使って欲しいです。何も考えずにコピペするとPC壊れる可能性があります。 わからなければわかる人に聞いてください

> ※ 初めてgithubを使う場合 以下参考にSSH keyを登録しておくと楽です。
> https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh

```shell
# 作業用ディレクトリに移動
$ cd {ここは自分が使いやすいようにでOK}

# もし作業用ディレクトリがないならこれがおすすめ
$ cd 
$ mkdir work
$ cd work
$ git clone git@github.com:AIESEC-in-Japan/aiesecjp-web.git

```


> 時間ある時に…
> また以下を参考にして、user nameを設定しておいて欲しいです。
> https://docs.github.com/en/github/getting-started-with-github/setting-your-username-in-git

#### もしgit コマンドが使えなかったら（Mac編）

`git command not found` 的なことを言われてしまったら

```shell
# brewがつかえるかの確認
$ brew upgrade

# なければこれを参考にインストールしてください homebrew https://brew.sh/index_ja
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
$ source ~/.bash_profile

# gitが入っているかの確認
$ git --version

# git がなければインストールしてください
$ brew install git
```

#### もしyarn コマンドが使えなかったら（Mac編）

```shell
# nodeとyarn のインストール https://classic.yarnpkg.com/en/docs/install/#mac-stable
# https://github.com/nodenv/nodenv

$ brew install nodenv 
$ nodenv install 12.15.0
$ nodenv global 12.15.0
$ echo 'eval "$(nodenv init -)"' >> ~/.bash_profile
$ source ~/.bash_profile
$ npm install -g yarn

```

これでうまく行かない場合…

もしかしたら最初からnodeが入っていて、passの切り替えがうまくできない可能性があります。 ちょっと面倒なのでbrew経由でyarn をつかいましょう

```shell
$ brew install yarn
```

## ローカルでの動かし方

git cloneができ,yarnが使えるようになったら

必要なモジュールをインストール。
※モジュールが追加される度に実施する必要がありますが、その時はなにかしらエラーメッセージが出るのでわかると思います


```shell
$ yarn install
```

実際にローカル環境で動かしてみましょう。

```shell
$ yarn run dev
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).



## テストやコードチェックのためのコマンド

```shell
# js & css
$ yarn lint
# js & css 自動で直せるところ修正
$ yarn lint:fix

# js only
$ yarn lint:es
# js only 自動で直せるところ修正
$ yarn lint:es --fix

# css only
$ yarn lint:css
# css only 自動で直せるところ修正
$ yarn lint:css --fix
```

## UI test tool
UIテストようのツールとして[storybook](https://storybook.js.org/docs/vue/get-started)を使用しています。

```shell
$ yarn storybook
```


## 開発時

開発する時に読んでください
- [コーディングの心構え](docs/coding-rules.md)

### git

ブランチ戦略は[github Flow](https://nvie.com/posts/a-successful-git-branching-model/) に従います。
この辺、わからなければ調べればいい記事が出てくると思います。
[そもそも前提わからない人はこっち](https://guides.github.com/introduction/flow/)


#### ブランチの命名規則

そんなに厳密に守らなくてもいいと思いますが、できれば意識して欲しいです

```shell
# 本番環境 リリースversion と一致
master

# 開発していくブランチ
develop

# 新機能追加
feature/{ここは規則ないです}

# ドキュメント
docs/{ここはわかりやすければ}

# バグ修正
bugfix/{任意の文字列}

# 緊急対応（マージ先はmaster） 
hotfix/{任意の文字列}
 
# リリース用（マージ先はmaster）
relase/{Date} 

```

#### コンフリクト解消方法

github上でもできますが、基本ローカルのエディタの中で対応してください。

```shell
# まずdevelopに戻る
git checkout develop

# 最新のdevelopに更新
git pull

# 作業ブランチへ戻る
git checkout {自分の作業ブランチ} 

# コンフリクト解消、最新のdevelop取り込み
git merge develop 

```

このあとコンフリクトしたファイルがこんな感じで表示されるので

```shell
Here are lines that are either unchanged from the common
ancestor, or cleanly resolved because only one side changed.
<<<<<<< yours:sample.txt
Conflict resolution is hard;
let's go shopping.
=======
Git makes conflict resolution easy.
>>>>>>> theirs:sample.txt
And here is another line that is cleanly resolved or unmodified.
```

エディタで対象ファイルを開きコンフリクトを解消したら
対象のファイルを`git add `してください。

全てのファイルでコンフリクトが解消できたら`git commit`をしましょう。
もし英語がたくさん書いてある画面に切り替わったら、何も入力せずにエスケープボタンを押してから`:qw`で大丈夫です。（これはvimというエディタが開いているだけです。詳しくは調べてみていただきたいです。）[Vim初心者に捧ぐ実践的入門](https://qiita.com/okamos/items/c97970ab34ff55ff3167)

参考
[git merge](https://git-scm.com/docs/git-merge)


### yarn 

開発環境を整える時に使っていただいた[yarnコマンド](https://yarnpkg.com/) ですが他にもつかう場面がたくさんあります。

とりあえず`package.json`に変更が加えられたときはとりえあえず`yarn`コマンドは実行する必要があると思って差し支えないです。

なんかよくわからないエラーが出てきたらまずはyarn installのコマンドを実行してみてください。


#### dependabotの対応
脆弱性の対応でdependabotが頑張ってくれています。
その影響範囲を調べるためのコマンドを紹介します。


```shell
$ yarn why ws
yarn why v1.22.10
[1/4] 🤔 Why do we have the module "ws"...?
[2/4] 🚚 Initialising dependency graph...
[3/4] 🔍 Finding dependency...
[4/4] 🚡 Calculating file sizes...
=> Found "ws@6.2.2"
info Reasons this module exists

"nuxt#@nuxt#webpack#webpack-bundle-analyzer" depends on it
Hoisted from "nuxt#@nuxt#webpack#webpack-bundle-analyzer#ws"
info Disk size without dependencies: "136KB"
info Disk size with unique dependencies: "164KB"
info Disk size with transitive dependencies: "164KB"
info Number of shared dependencies: 1
✨ Done in 0.74s.
```

このように `yarn why`のコマンドを実行すると、影響範囲を出してくれるので、それをみて検証すべき動作を判断すればいいと思います。


#### Nuxtフレームワークのアップグレード
以下参考にしてみてください。
yarn,node module周りが壊れた時も同様に対処することができるので覚えていて損はないです。
[nuxt upgrade](https://ja.nuxtjs.org/docs/2.x/get-started/upgrading/)




## 使用している技術と背景

- [Nuxt.js](https://nuxtjs.org/)
- [eslint](https://eslint.org/)
- [stylelint](https://stylelint.io/)
- [vuetify](https://vuetifyjs.com/)

状況はかわるので、この通りにはなっていないと思うけど
[創始者の思想](https://qiita.com/andmohiko/private/a461157904ee078003e0)


### ディレクトリ構成

```
.
├── assets
│   ├── 2020corporation-logo # ロゴを格納する場所らしい
│   ├── images
│   ├── resetcss # resetcss意外はおかない
│   ├── scss
│   └── videos
├── components
│   ├── about
│   ├── base
│   ├── incoming
│   ├── outgoing
│   ├── privacy-policy
│   ├── safety
│   └── top
├── dist
├── docs # ドキュメント周り
├── layouts
├── middleware
├── pages
│   ├── about
│   ├── incoming
│   ├── outgoing
│   ├── press
│   ├── privacy-policy
│   └── safety
├── plugins
├── static
├── store
└── stories # ここはまだ追加してない
    └── assets
```

ちなみにこのコマンド
`tree -d -L 2 -I node_modules | pbcopy`

## 参考

- [Git-flowって何？](https://qiita.com/KosukeSone/items/514dd24828b485c69a05)
- [vue 公式ドキュメント](https://v3.ja.vuejs.org/)
- [Nuxt 公式ドキュメント](https://ja.nuxtjs.org/)
- [CSSやJavaScriptなどの詳しい情報が書いてあるサイト](https://developer.mozilla.org/ja/docs/Web)
- [lintについて](https://zenn.dev/yukikoma/articles/bf02bb407a878e)
