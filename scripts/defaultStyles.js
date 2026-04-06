const commonStyle = document.createElement("link");
commonStyle.rel = "stylesheet";
commonStyle.href = "./styles/common.css";
document.querySelector("head").appendChild(commonStyle);

const sideIndexStyle = document.createElement("link");
sideIndexStyle.rel = "stylesheet";
sideIndexStyle.href = "./styles/sideIndex.css";
document.querySelector("head").appendChild(sideIndexStyle);

const defaultStyle = document.createElement("link");
defaultStyle.rel = "stylesheet";
defaultStyle.href = "./styles/toggleStyles.css";
document.querySelector("head").appendChild(defaultStyle);
