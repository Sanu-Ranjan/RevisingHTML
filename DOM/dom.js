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
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Butter";
  document.getElementById("shoppingList").append(newItem);
});

//example 5: delete element
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });

//event handling
document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("double clicked");
  });

//exercise 7 :select tea type

document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target?.classList.contains("teaItem")) {
    event.target.style.backgroundColor = "yellow";
    event.target.style.color = "black";
    alert(event.target.textContent);
  }
});

//exercise : form handling
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("feedbackDisplay").textContent =
      event.target.feedbackInput.value.trim();
  });

//exercise 9: alert on DOM load
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully Loaded";
});

//example 10: toggle highlight

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    if (
      document.getElementById("descriptionText").classList.contains("highlight")
    ) {
      document.getElementById("descriptionText").classList.remove("highlight");
    } else {
      document.getElementById("descriptionText").classList.add("highlight");
    }
  });
