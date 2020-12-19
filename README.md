## 環境要件

* Docker
* docker-compose
* git

## 初期設定 

```shell
docker-compose up -d

# コンテナがUPになるまで待つ
docker-compose ps

# コンテナのbashを起動
docker-compose exec cdk bash
```

※コンテナのbashで実行

```shell

# AWSのプロファイル設定
aws configure

# cdkの初期化
cdk bootstrap

# envのコピー
cp .env.example .env

# .envをよしなに設定

```

## 環境の起動

```shell
docker-compose up -d

# コンテナがUPになるまで待つ
docker-compose ps

# コンテナのbashを起動
docker-compose exec cdk bash
```
