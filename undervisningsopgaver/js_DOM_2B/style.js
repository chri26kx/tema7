const h1 = document.querySelector("h1");
console.log(h1);

const h2 = document.querySelector("h2");
console.log(h2);

const h3_1 = document.querySelector("article:nth-child(2) h3");
console.log(h3_1);

const h3_2 = document.querySelector("article:nth-child(3) h3");
console.log(h3_2);

const img1 = document.querySelector("article:nth-child(2) img");
console.log(img1);

const img2 = document.querySelector("article:nth-child(3) img");
console.log(img2);

const article1 = document.querySelector("article:nth-child(2)");
console.log(article1);

const article2 = document.querySelector("article:nth-child(3)");
console.log(article2);

h1.textContent = "HELLO";
h2.textContent = "Med dig";
h3_1.textContent = "gudrun";
h3_2.textContent = "Feta";
