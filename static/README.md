# STATIC

This directory contains your static files.
Each file inside this directory is mapped to /.

Example: /static/robots.txt is mapped as /robots.txt.

More information about the usage of this directory in the documentation:
https://nuxtjs.org/guide/assets#static

**This directory is not required, you can delete it if you don't want to use it.**

## 概要

このディレクトリはNuxtの影響を受けないディレクトリです。 （コンパイルの対象外）
本来はコンパイルが不要な、画像やsitemapなどを置いておくものです。

Nuxt外部で作ったLPを公開したい場合は、 `static/lp/` 以下に新しいディレクトリを切っておいてください。
static以下はそのファイルパスがそのままURLになります。

ex `static/lp/recruit2022/index.html` というファイルには `aiesec.jp/lp/recruit2022` というURLでアクセスできます。
