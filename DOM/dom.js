//dom manipulation
//--listening to events
//--accessing dom element

//example1
changeTest = document.getElementById("changeTextButton");
changeTest.addEventListener("click", function () {
  document.getElementById("myParagraph").textContent = "Paragraph is changed";
});

//example2 toggle higjlight
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let cityList = document.getElementById("citiesList");

    if (cityList.firstElementChild.classList.contains("highlight"))
      cityList.firstElementChild.classList.remove("highlight");
    else cityList.firstElementChild.classList.add("highlight");
  });

//example 3 :change order and colour
document.getElementById("changeOrder").addEventListener("click", function () {
  let text = document.getElementById("coffeeType");
  text.textContent = "Espresso";
  text.style.backgroundColor = "brown";
  text.style.padding = "3px";
});

//example 4 : add new element :add item to shopping cart
