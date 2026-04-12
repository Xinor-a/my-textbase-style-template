// this script allows users to toggle between different styles of sakura.css by clicking a button on the page
const strArrSakuraStyles = [
    "https://cdn.jsdelivr.net/npm/sakura.css/css/sakura-dark.css",
    "https://cdn.jsdelivr.net/npm/sakura.css/css/sakura-dark-solarized.css",
    "https://cdn.jsdelivr.net/npm/sakura.css/css/sakura-earthly.css",
    "https://cdn.jsdelivr.net/npm/sakura.css/css/sakura-ink.css",
    "https://cdn.jsdelivr.net/npm/sakura.css/css/sakura-pink.css",
    "https://cdn.jsdelivr.net/npm/sakura.css/css/sakura-radical.css",
    "https://cdn.jsdelivr.net/npm/sakura.css/css/sakura-vader.css",
    "https://cdn.jsdelivr.net/npm/sakura.css/css/sakura.css",
];

const doc = document.querySelector("head");
const sakuraStyleLink = document.createElement("link");

const getThemeName = (href) => href.split("/").pop().replace(".css", "");

const applyTheme = (href) => {
    sakuraStyleLink.href = href;
    const name = getThemeName(href);
    document.body.setAttribute("data-sakura-theme", name);
    toggleStyleButton.textContent = `Toggle Style (${name})`;
};

// set initial style to sakura-dark
sakuraStyleLink.rel = "stylesheet";
doc.appendChild(sakuraStyleLink);

// add toggle style button to the page
const toggleStyleButton = document.createElement("button");
toggleStyleButton.id = "toggle-style-button";
toggleStyleButton.addEventListener("click", () => {
    const currentIndex = strArrSakuraStyles.indexOf(sakuraStyleLink.href);
    const nextIndex = (currentIndex + 1) % strArrSakuraStyles.length;
    applyTheme(strArrSakuraStyles[nextIndex]);
});

applyTheme(strArrSakuraStyles[0]);
document.querySelector("aside#side-index").appendChild(toggleStyleButton);
