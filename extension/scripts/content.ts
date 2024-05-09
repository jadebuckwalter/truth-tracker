const cheerio = require("cheerio");

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    console.log(tab);
    return tab;
}

getCurrentTab();

const article = document.querySelector("article");

if (article) {
    const text = article.textContent;
    const content = document.getElementById("content");
    if (content && text) {
        content.innerHTML = text;
    }
}