# My Text-based Style Template

## Getting Started

This template renders a styled document in **VSCode Markdown Preview**.
Open the preview with `Ctrl+Shift+V` (or `Cmd+Shift+V` on Mac).

The scripts embedded above activate automatically and provide:

- A **side index** (right panel) built from your headings
- A **style toggle button** to switch sakura.css themes
- **KaTeX** math rendering

---

## Features

### Side Index

All headings (`#` through `######`) appear in the right-side panel.
Click any entry to scroll to that section.

Use the `>` button on the right edge to collapse or expand the panel.

### Style Toggle

A **Toggle Style** button appears in the side index panel.
Click it to cycle through these sakura.css themes:

- `sakura-dark` (default)
- `sakura-dark-solarized`
- `sakura-earthly`
- `sakura-ink`
- `sakura-pink`
- `sakura-radical`
- `sakura-vader`
- `sakura` (light)

### Math (KaTeX)

Inline math uses single dollar signs: $E = mc^2$

Display math uses double dollar signs:

$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$

---

## Markdown Elements

### Text Formatting

**Bold**, _italic_, ~~strikethrough~~, and `inline code`.

> Blockquote example.
> Use these for notes or citations.

### Lists

Unordered:

- Item A
- Item B
  - Nested item

Ordered:

1. First
2. Second
3. Third

### Code Blocks

```js
function greet(name) {
    return `Hello, ${name}!`;
}
```

```python
def greet(name):
    return f"Hello, {name}!"
```

You can also specify language by this way:

````plaintext
```
@lang:csharp
function greet(name) {
    return `Hello, ${name}!`;
}
```
````

Then the code block will be highlighted as JavaScript regardless of the file extension like this:

```text
@lang:csharp
function greet(name) {
    return `Hello, ${name}!`;
}
```

### Tables

| Column A | Column B | Column C |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

### Links and Images

[Link to Top]("#")

Sample image from Picsum:

![Alt text](https://picsum.photos/300/200)

### Horizontal Rule

---

## How to Use This Template

1. Copy this repository.
2. Duplicate the `docs/template/` folder inside `docs/` and rename it.
3. Edit the Markdown files in the duplicated folder to write your content.
4. Do not remove the `<script>` tag at the bottom of each file.

The root `index.html` serves as a table of contents linking to each page under `docs/`.

> **Note:** If you place a page in a deeper subdirectory (e.g. `docs/chapter/page/`), adjust the relative path in the `<script>` tag accordingly (e.g. `../../../scripts/index.js`).

<!-- End of document -->
<!-- Do not remove or modify the following script tag -->
<script src="./scripts/index.js"></script>
