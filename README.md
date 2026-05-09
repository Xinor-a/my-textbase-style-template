# My Textbase Style Template

A Markdown document template for **VSCode Markdown Preview** with a side index panel, syntax highlighting, and KaTeX math rendering.

## Requirements

- [Visual Studio Code](https://code.visualstudio.com/)
- Internet access (CDN assets: highlight.js, KaTeX, Google Fonts)

## Getting Started

1. Copy `docs/template/index.md` to your project directory along with the `scripts/` and `styles/` folders.
2. Edit `index.md` — keep the four `<script>` tags at the bottom.
3. Preview using one of the following methods:

**VSCode Markdown Preview**

Open `index.md` in VSCode and press `Ctrl+Shift+V` (`Cmd+Shift+V` on Mac).

**Live Server (VSCode extension)**

Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, open `index.html`, and click **Go Live** in the status bar.

This method serves files over HTTP, which is required for the scripts to resolve relative paths correctly.

## Features

### Side Index

All headings (`#` through `######`) appear in a fixed right-side panel. Click any entry to scroll to that section.

Use the `>` button on the right edge to collapse or expand the panel. The open/closed state is persisted in `localStorage`.

### Syntax Highlighting

Code blocks are highlighted via [highlight.js](https://highlightjs.org/) (GitHub Dark theme).

You can override the detected language by placing `@lang:<language>` on the first line of a code block:

````plaintext
```
@lang:csharp
var x = 1;
```
````

### Math Rendering

Inline math: `$E = mc^2$`

Display math:

```plaintext
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
```

Rendered via [KaTeX](https://katex.org/).

### Custom Fonts

| Usage       | Font                |
| ----------- | ------------------- |
| Body text   | Klee One            |
| Code blocks | M PLUS 1 Code       |
| Headings    | Zen Kaku Gothic New |

Loaded from Google Fonts.

## File Structure

```plaintext
.
├── docs/
│   └── template/
│       ├── index.md    # blank template to copy
│       └── index.html  # pre-rendered HTML of the template
├── scripts/
│   ├── sideIndex.js    # side index panel
│   ├── defaultStyles.js # styles and highlight.js loader
│   └── katex.js        # KaTeX loader
├── styles/
│   ├── common.css      # main content styles
│   └── sideIndex.css   # side panel styles
└── index.md            # demo document
```

## Required Script Tags

Every document must include these four tags at the bottom (adjust relative paths as needed):

```html
<script src="./scripts/sideIndex.js"></script>
<script src="./scripts/defaultStyles.js"></script>
<script src="./scripts/katex.js"></script>
```

## Adding More Pages

Duplicate `docs/template/index.md` into a new directory along with the `scripts/` and `styles/` folders, then adjust the `src` paths in the `<script>` tags accordingly.
