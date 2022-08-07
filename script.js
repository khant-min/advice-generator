const card = document.querySelector("#card");
const header = document.querySelector(".card-header");
const body = document.querySelector(".card-body");
const footer = document.querySelector(".card-footer");
const url = "https://api.adviceslip.com/advice";

const fetching = async () => {
  const fetchData = await fetch(url);
  const data = await fetchData.json();
  card.style.visibility = "visible";
  header.innerHTML = `ADVICE #${data.slip.id}`;
  body.innerHTML = data.slip.advice;
};
fetching();

footer.addEventListener("click", fetching);
