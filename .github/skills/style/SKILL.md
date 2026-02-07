---
name: style-skill
description: スタイルの時に使用します
---

# style skill

スタイルについてのスキルです。

## 技術スタック

vanilla-extract

## 基本的なスタイルの定義

- ファイル名は`コンポーネント名.css.ts`とする(e.g. `box.css.ts`)
- スタイルの定義として以下のような構成にすること

  ```ts
  import { style } from "@vanilla-extract/css";

  const boxStyle = {
    container: style({
      color: "red",
    }),
  };

  export default boxStyle;
  ```

- 呼び出しとして下記のようにすること

  ```astro
  ---
  import boxStyle from "./box.css.ts"
  ---

  <div class={boxStyle.container}>hello</div>
  ```

## その他

- コンポーネントのソースコードとスタイルのソースコードのファイルは常に1:1にしてください

## ドキュメント

https://vanilla-extract.style/
