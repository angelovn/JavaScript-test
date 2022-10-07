function getArticleGenerator(articles) {
  return function () {
    let el = articles.shift();
    if (!el) {
      return;
    } else {
      let div = document.getElementById("content");
      let article = document.createElement("article");
      article.innerText = `${el}`;
      div.appendChild(article);
    }
  };
}
