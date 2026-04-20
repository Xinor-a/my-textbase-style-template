# Heading 1 | ヘッダレベル 1 | Long heading example to test line breaking behavior in the side index

## Heading 2 | ヘッダレベル 2 | Long heading example to test line breaking behavior in the side index

### Heading 3 | ヘッダレベル 3 | Long heading example to test line breaking behavior in the side index

#### Heading 4 | ヘッダレベル 4 | Long heading example to test line breaking behavior in the side index

##### Heading 5 | ヘッダレベル 5 | Long heading example to test line breaking behavior in the side index

###### Heading 6 | ヘッダレベル 6 | Long heading example to test line breaking behavior in the side index

---

## Paragraphs & Inline

Regular paragraph text.

**Bold text**, *italic text*, ***bold and italic***, ~~strikethrough~~, `inline code`, and <u>underline</u>.

[A hyperlink](https://example.com) and an auto-link: <https://example.com>

## 日本語訳

通常の段落テキスト。

**太字テキスト**、*斜体テキスト*、***太字と斜体***、~~打ち消し線~~、`インラインコード`、および<u>下線</u>。

---

## Blockquote

> This is a blockquote.
>
> It can span multiple paragraphs.
>
> > Nested blockquote.

---

## Lists

### Unordered

- Item one
- Item two
  - Nested item
  - Another nested item
    - Deeply nested
- Item three

### Ordered

1. First item
2. Second item
   1. Nested ordered
   2. Another nested
3. Third item

### Task List

- [x] Completed task
- [ ] Incomplete task
- [x] Another done item

---

## Code

### Inline

Use `const x = 42;` inline.

### Fenced Block

```js
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('world'));
```

```css
body {
  margin: 0;
  font-family: sans-serif;
  background-color: #f5f5f5;
}
```

```bash
npm install && npm run build
```

```plaintext
日本語|等幅フォント|確認用
aaaaaa|aaaaaaaaaaaa|aaaaaa
```

---

## Table

| Name       | Type    | Default | Description              |
|------------|---------|---------|--------------------------|
| `color`    | string  | `#000`  | Text color               |
| `fontSize` | number  | `16`    | Base font size in px     |
| `margin`   | string  | `0`     | Outer margin             |
| `padding`  | string  | `1rem`  | Inner padding            |

---

## Horizontal Rule

---

## Image

![Placeholder image](https://placehold.co/600x200)

---

## Definition List (HTML fallback)

<dl>
  <dt>Term</dt>
  <dd>Definition of the term.</dd>
  <dt>Another Term</dt>
  <dd>Its definition goes here.</dd>
</dl>

---

## Details / Summary

<details>
  <summary>Click to expand</summary>

  Hidden content revealed on expand. Can contain **any** markdown.

</details>

---

## Keyboard & Abbreviations

Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.

---

## Superscript & Subscript

H<sub>2</sub>O and E = mc<sup>2</sup>

---

## KaTeX style

$E = mc^2$ is the famous equation by Einstein.

$$y = ax^2 + bx + c$$

---

<!-- End of document -->
<!-- Do not remove or modify the following script tags -->
<script src="./scripts/sideIndex.js"></script>
<script src="./scripts/defaultStyles.js"></script>
<script src="./scripts/katex.js"></script>
