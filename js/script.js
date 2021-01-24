const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

//Question 1
const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();

//Question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

//Question 3
heading.style.fontSize = "2em";

//Question 4
heading.classList.add("subheading");

//Question 5
const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

//Question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

//Question 7
function catList(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

catList(cats);

//Question 8
const container = document.querySelector(".cat-container");

function createCats(cats) {
  let html = "";
  for (let i = 0; i < cats.length; i++) {
    let age = "Age unknown";
    if (cats[i].age) {
      age = cats[i].age;
    }
    html += `<div>
    <h5>${cats[i].name}</h5>
    <p>${age}</p>
    </div>`;
  }
  return (container.innerHTML = html);
}

createCats(cats);
