# by-prefecture-total-population-graph-sample

## アプリ構成

- React
- Vite
- TypeScript
- Storybook
- CSS modules
- reset-css
- swr
- recharts
- Eslint
- prettier

## テスト構成

- vitest
- @storybook/testing-react
- @testing-library/react
- jsdom
- fetch-mock

## ファイルの作成について

作成したい components や util などは、大枠となるディレクトリを作成する。
ディレクトリには`index.ts(x)` をメインファイルとし、test ファイルや必要なファイルを作成する。

例）Button components

```
Button
- index.tsx
- Button.tsx
- Button.test.tsx
- Button.stories.tsx
- Styles.module.css
```

## CSS 設計

1. CSS modules を採用する
2. className は、 BEM を採用する
3. color, font-size など共通値は `./src/index.css` の `:root` に記載し使用する

## テスト内容

1. components の場合は `@storybook/testing-react` を採用しているため、確認したい状態を各 story に用意し使用する
2. components は snapshots を使用し状態の変化を確認する
3. 関数はそれぞれ export できるようにテストする
4. api は mock を利用しテストする
