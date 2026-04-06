const _scriptBase = new URL(".", document.currentScript.src).href;

const commonStyle = document.createElement("link");
commonStyle.rel = "stylesheet";
commonStyle.href = _scriptBase + "../styles/common.css";
document.querySelector("head").appendChild(commonStyle);

const sideIndexStyle = document.createElement("link");
sideIndexStyle.rel = "stylesheet";
sideIndexStyle.href = _scriptBase + "../styles/sideIndex.css";
document.querySelector("head").appendChild(sideIndexStyle);

const defaultStyle = document.createElement("link");
defaultStyle.rel = "stylesheet";
defaultStyle.href = _scriptBase + "../styles/toggleStyles.css";
document.querySelector("head").appendChild(defaultStyle);
