const _scriptBase = new URL(".", document.currentScript.src).href;

const googleFonts = document.createElement("link");
googleFonts.rel = "stylesheet";
googleFonts.href =
    "https://fonts.googleapis.com/css2?family=Klee+One:wght@400;600&family=M+PLUS+1+Code:wght@100..700&family=Zen+Kaku+Gothic+New:wght@400;700&display=swap";
document.head.appendChild(googleFonts);

const sideIndexStyle = document.createElement("link");
sideIndexStyle.rel = "stylesheet";
sideIndexStyle.href = _scriptBase + "../styles/sideIndex.css";
document.querySelector("head").appendChild(sideIndexStyle);

// Load Highlight.js CSS dynamically
const highlightCss = document.createElement("link");
highlightCss.rel = "stylesheet";
highlightCss.href = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css";
document.head.appendChild(highlightCss);

const commonStyle = document.createElement("link");
commonStyle.rel = "stylesheet";
commonStyle.href = _scriptBase + "../styles/common.css";
document.querySelector("head").appendChild(commonStyle);

// Load Highlight.js script dynamically
const highlightScript = document.createElement("script");
highlightScript.src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js";
highlightScript.onload = () => {
    const langSpecifier = /^@lang:([a-z0-9]+)$/;
    document.querySelectorAll("pre code").forEach((block) => {
        const lines = block.textContent.split("\n");
        const match = lines[0].trim().match(langSpecifier);
        if (match) {
            block.textContent = lines.slice(1).join("\n");
            block.classList.add(`language-${match[1]}`);
            hljs.highlightElement(block);
        }
    });
};
document.body.appendChild(highlightScript);
