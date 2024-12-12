// 1. Inside the first Div, after the main heading add a sub-heading (h3 tag) "Buy high quality organic fruits online".

// 2. Make the sub-heading text italic.

// 2. Inside the second Div, before the unordered list add a paragraph tag showing "Total fruits: 4".

// 3. On this paragraph tag set an id of "fruits-total".
let newh3 = document.createElement("h3");
newh3.textContent = "Buy high quality organic fruits online";
newh3.style.fontStyle = "italic";
document.getElementById("header").append(newh3);

//document.querySelector("div:nth-of-type(2)")
let unodered = document.querySelector(".fruits");
console.log(unodered);
let para = document.createElement("p");
para.textContent = "Total fruits:4";

document.querySelector("div:nth-of-type(2)").insertBefore(para, unodered);
