# AIESEC JP HP

1. [環境構築手順](#環境構築手順)
1. [テストやコードチェックのためのコマンド](#テストやコードチェックのためのコマンド)
1. [使用している技術と背景](#使用している技術と背景)
1. [参考](#参考)


開発する時に読んでください
- [コーディングの心構え](docs/coding-rules.md)

## 環境構築手順

### clone時のコマンド

> 以下色々コマンド書きますが、理解してから使って欲しいです。何も考えずにコピペするとPC壊れる可能性があります。 わからなければわかる人に聞いてください

初めてgithubを使う場合 以下参考にSSH keyを登録しておくと楽です。
https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh

```shell
# 作業用ディレクトリに移動
$ cd {ここは自分が使いやすいようにでOK}

# もし作業用ディレクトリがないならこれがおすすめ
$ cd 
$ mkdir work
$ cd work
$ git clone git@github.com:AIESEC-in-Japan/aiesecjp-web.git

```

また以下を参考にして、user nameを設定しておいて欲しいです。
https://docs.github.com/en/github/getting-started-with-github/setting-your-username-in-git

## もしgit コマンドが使えなかったら（Mac編）

`git command not found` 的なことを言われてしまったら

```shell
# brewがつかえるかの確認
$ brew upgrade

# なければこれを参考にインストールしてください homebrew https://brew.sh/index_ja
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# gitが入っているかの確認
$ git --version

# git がなければインストールしてください
$ brew install git
```

## もしyarn コマンドが使えなかったら（Mac編）

```shell
# nodeとyarn のインストール https://classic.yarnpkg.com/en/docs/install/#mac-stable
# https://github.com/nodenv/nodenv

$ brew install nodenv 
$ nodenv install 12.15.0
$ nodenv global 12.15.0
$ echo 'eval "$(nodenv init -)"' >> ~/.bash_profile
$ npm install -g yarn

```

これでうまく行かない場合…

もしかしたら最初からnodeが入っていて、passの切り替えがうまくできない可能性があります。 ちょっと面倒なのでbrew経由でyarn をつかいましょう

```shell
$ brew install yarn
```

### 静的サイトジェネレータを使いたいとき

git cloneができ,yarnが使えるようになったら

必要なモジュールをインストール。 ※モジュールが追加される度に実施する必要がありますが、その時はなにかしらエラーメッセージが出るのでわかると思います

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

# js only
$ yarn lint:es
# js only 自動で直せるところ修正
$ yarn lint:es --fix

# css only
$ yarn lint:css
# css only 自動で直せるところ修正
$ yarn lint:css
```

## 使用している技術と背景

WIP

- Nuxt.js
- eslint
- stylelint


## 参考

- [Git-flowって何？](https://qiita.com/KosukeSone/items/514dd24828b485c69a05)
- [vue 公式ドキュメント](https://v3.ja.vuejs.org/)
- [Nuxt 公式ドキュメント](https://ja.nuxtjs.org/)
- [CSSやJavaScriptなどの詳しい情報が書いてあるサイト](https://developer.mozilla.org/ja/docs/Web)
- itoくんが作ってくれているチュートリアル
