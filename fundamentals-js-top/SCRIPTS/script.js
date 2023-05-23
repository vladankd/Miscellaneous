const fruits = [
  "apple",
  "banana",
  "orange",
  "mango",
  "pear",
  "peach",
  "plum",
  "asparogue",
];

// fruits.forEach((fruit, index) => {
//   let uppercased = fruit.charAt(0).toUpperCase() + fruit.slice(1) + " " + index;
//   console.log(uppercased);
// });
// let sFru = fruits.splice(2, fruits.length - 4, " --*--");
// console.log(fruits);
// console.log(sFru);

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// const newFruits = fruits.map(function (item) {
//   return item.length;
// });

// const filteredFruits = fruits.filter((fruit) => fruit.startsWith("a"));

// ================
// DOM manipulation
// ================

const container = document.querySelector(".container");
const domer = document.querySelector(".domer");
domer.setAttribute("style", "background-color: white; padding: 1.5em;");

const p = document.createElement("p");
p.setAttribute("style", "color: red;");
p.innerText = "Hey I'm red!";

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.innerText = "I'm blue h3!";

domer.appendChild(p);
domer.appendChild(h3);

const div = document.createElement("div");
div.style.cssText =
  "border: 3px dashed black; background-color: pink;  color: black; padding: 1em; margin-top: 1.5em;";

div.setAttribute("class", "pinky");

container.appendChild(div);

const h1 = document.createElement("h1");
h1.innerText = "I'm in a div";
const p2 = document.createElement("p");
p2.innerText = "me too!";
p2.style.cssText = "text-transform: uppercase;";

div.appendChild(h1);
div.appendChild(p2);

const btn = document.querySelector(".start-stop-btn");

btn.addEventListener("click", (e) => {
  e.target.style.cssText =
    "background-color: crimson; color: white; border: none";
});
