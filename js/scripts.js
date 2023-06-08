const redPill = document.querySelector(".takeAPill__btn--red");
const bluePill = document.querySelector(".takeAPill__btn--blue");

console.log(redPill);

redPill.addEventListener("click", () => {
    alert("Tu reste au Pays des Merveilles et je t'ammène au tréfonds du terrier.");
});

bluePill.addEventListener("click", () => {
    alert("Tout s'arrête. Tu te réveilles dans ton lit et tu crois ce que bon te semble.");
});