// const body = document.querySelector("body");
// axios
//   .get("https://api.adviceslip.com/advice")
//   .then((res) => res.data.slip)
//   .then((data) => {
//     body.innerHTML = `Advice #${data.id}

//     "${data.advice}"

//     <div class="attribution">
//       Challenge by
//       <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
//         >Frontend Mentor</a
//       >. Coded by <a href="#">Ngo Thai Anh Hao</a>.
//     </div>`;
//   })
//   .catch((e) => console.log("Something went wrong! 💥💥💥"));

const body = document.querySelector("body");
const dice = document.querySelector(".card__icon-container");
const cardContent = document.querySelector(".card__content");

const getData = () => {
  fetch(`https://api.adviceslip.com/advice`)
    .then((res) => res.json())
    .then((data) => displayUI(data.slip));
};

const displayUI = (data) => {
  const make = ` 
    <h2 class="card__content--id">Advice #${data.id}</h2>
        <h1 class="card__content--desc">"${data.advice}"</h1>

        <div class="card__content--line"></div>
  `;
  cardContent.innerHTML = make;
};

getData();

dice.addEventListener("click", () => {
  getData();
});
