# 📚 My Textbase Style Template

A template project for creating and auto-generating text-based HTML pages — like textbooks, study notes, or books — using Markdown.

## ✨ Features

- 📝 **Markdown-based authoring** — Auto-generate HTML via the Markdown PDF extension for Visual Studio Code
- 🎨 **Calm, focused styling** — A reading/study-oriented design that does not distract from concentration or motivation
- 🚀 **Coming soon** — GitHub Pages / GitLab Pages support

## 🔌 Recommended VS Code Extensions

- [Markdown PDF](https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf) — Auto-generate HTML from Markdown
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) — Real-time browser preview

## 🚀 Usage

### 📁 Directory Structure

```text
project-root/
├── index.html    # Top page: table of contents and guide linking to docs/
└── docs/
    ├── template/ # Template folder (duplicate this to create new content)
    └── ...       # Your content pages
```

### 📄 Creating Content

1. Duplicate the `docs/template/` folder inside `docs/`
2. Edit the Markdown files in the duplicated folder to write your content
3. ⚠️ **Do not remove script references**

### 🏠 Top Page

The root `index.html` is intended to serve as a table of contents and README-style guide page, linking to each page created under `docs/`.
