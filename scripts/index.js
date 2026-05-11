const _base = new URL(".", document.currentScript.src).href;

["sideIndex.js", "defaultStyles.js", "katex.js"].forEach(name => {
    const s = document.createElement("script");
    s.src = _base + name;
    s.async = false;
    document.head.appendChild(s);
});
