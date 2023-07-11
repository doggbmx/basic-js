const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const pResult = document.querySelector("#result");
const btn = document.querySelector("#btnCalcular");
const form = document.querySelector("#form");

form.addEventListener("submit", btnOnClick);
// btn.addEventListener("click", btnOnClick);

function btnOnClick(event) {
  console.log(event);
  event.preventDefault();
  let result = input1.value + input2.value;
  //   console.log(input1.value + input2.value);
  pResult.innerHTML = result;
}
// const p = document.querySelector("p");
// const parrafito = document.querySelector(".parrafito");
// const pid = document.querySelector("#pid");

// console.log({
//   h1,
//   p,
//   parrafito,
//   pid,
// });

// // this is how you can change the text of an element
// // or even add more HTML tags inside
// h1.innerHTML = "perrito <br> feo";

// // obtain a attribute
// console.log(h1.getAttribute("coso"));
// // change a attribute
// h1.setAttribute("coso", "nuevo valor");
// console.log(h1.getAttribute("coso"));

// // add a class atributte
// h1.classList.add("nueva-clase");
// // remove a class atributte
// h1.classList.remove("nueva-clase");
// // toggle a class atributte
// h1.classList.toggle("nueva-clase");
// // check if a class atributte exists
// console.log(h1.classList.contains("nueva-clase"));

// input.value = "nuevo valor";

// // create a new element
// const newElement = document.createElement("img");
// console.log(newElement);
// newElement.setAttribute("src", "https://picsum.photos/200");

// pid.append(newElement);
