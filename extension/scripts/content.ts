const article = document.querySelector("article");

if (article) {
    const text = article.textContent;
    const content = document.getElementById("content");
    if (content && text) {
        content.innerHTML = text;
    }
}