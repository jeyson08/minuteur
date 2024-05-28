const form = document.querySelector("form");
const input = document.getElementById("minutes");
const divMinuteur = document.querySelector(".minuteur");
let totalSeconds;
let interval;

const countDown = () => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const sec = seconds < 10 ? "0" + seconds : seconds;

  divMinuteur.textContent = `${minutes} : ${sec}`;

  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    divMinuteur.textContent = "C'est terminé !";
    clearInterval(interval);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNaN(input.value)) {
    alert("Entrez un chiffre");
  } else {
    totalSeconds = input.value * 60;
    input.value = "";
    clearInterval(interval);
    interval = setInterval(countDown, 1000);
  }
});
