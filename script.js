const MAXSUGGESTIONS = 5;
const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  let results = [];

  // filter the fruit array based on the inputed string, return array with filtered results
  results = fruit.filter((word) =>
    word.toLowerCase().includes(str.toLowerCase())
  );
  showSuggestions(results, str.toLowerCase());
  return results;
}

function searchHandler(e) {
  // TODO
  //   console.log(e.key); // will get the latest character typed
  //   console.log(input.value); // has the characters in the text box
  search(input.value);
  return input.value;
}

function showSuggestions(results, inputVal) {
  //   console.log(results);
  //clear previous result
  suggestions.innerHTML = "";
  let counter = 0;
  results.forEach((item) => {
    if (counter <= MAXSUGGESTIONS) {
      let li = document.createElement("li");
      li.innerText = item;
      suggestions.appendChild(li);
      counter++;
    }
  });
}

function useSuggestion(e) {
  // TODO
  // e.target is our targetted element.
  if (e.target && e.target.nodeName == "LI") {
    input.value = e.target.textContent;
    suggestions.innerHTML = "";
    // console.log(e.target.textContent + " was clicked");
  }
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
