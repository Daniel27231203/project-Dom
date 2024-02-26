// admin localstorage================================
const inputImg = document.querySelector(".inputImg");
const inputHead = document.querySelector(".inputHead");
const inputAge = document.querySelector(".inputAge");
const inputprice = document.querySelector(".inputprice");
const createBtn = document.querySelector(".createBtn");
const input = document.querySelectorAll("input");
const catsCards = document.querySelector(".catsCards");

console.log(catsCards);

// const test = document.querySelector(".test");

getCards();

createBtn.addEventListener("click", () => addCards());

function addCards() {
  let cardsObj = {
    image: inputImg.value,
    head: inputHead.value,
    age: inputAge.value,
    price: inputprice.value,
  };
  for (let inp of input) {
    if (inp.value != "") {
      const cats = JSON.parse(localStorage.getItem("cats")) || [];
      cats.push(cardsObj);
      localStorage.setItem("cats", JSON.stringify(cats));

      for (let i of input) {
        i.value = "";
      }
    }
  }
}
// admin localstorage=================================

// home read=============================

function getCards() {
  const cats = JSON.parse(localStorage.getItem("cats")) || [];

  cats.forEach((el, idx) => {
    const catsCard = document.createElement("div");
    const imageCat = document.createElement("img");
    const headCat = document.createElement("h2");
    const headCat2 = document.createElement("h3");
    const ageCat = document.createElement("span");
    const priceCat = document.createElement("h1");
    const catbutton = document.createElement("button");
    const block = document.createElement("div");
    const delBtn = document.createElement("button");

    catsCard.classList = "catsCard";
    block.classList = "block";
    delBtn.classList = "delBtn";
    catbutton.classList = "catBtn";

    imageCat.src = el.image;
    headCat.innerHTML = el.head;
    headCat2.innerHTML = el.head;
    ageCat.innerHTML = el.age;
    priceCat.innerHTML = el.price;
    catbutton.innerText = "Купить";
    delBtn.innerHTML = "del";
    catsCards.append(catsCard);
    catsCard.appendChild(imageCat);
    catsCard.appendChild(headCat);
    catsCard.appendChild(block);
    block.appendChild(headCat2);
    block.appendChild(ageCat);
    block.appendChild(delBtn);
    catsCard.appendChild(priceCat);
    catsCard.appendChild(catbutton);

    delBtn.addEventListener("click", () => {
      catsCard.remove();
      const cats = JSON.parse(localStorage.getItem("cats")) || [];
      cats.splice(idx, 1);
      localStorage.setItem("cats", JSON.stringify(cats));
    });
  });
}

// home read=============================
