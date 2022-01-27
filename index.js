function diceRoll() {
  let randomNumber1 = Math.round(Math.random() * 5) + 1;
  let randomNumber2 = Math.round(Math.random() * 5) + 1;
  let total = (randomNumber1 + randomNumber2)
  let image1 = "images/dice" + randomNumber1 + ".png";
  let image2 = "images/dice" + randomNumber2 + ".png";
  document.querySelector(".dice .img1").setAttribute("src", image1);
  document.querySelector(".dice .img2").setAttribute("src", image2);
  document.querySelector("h1").innerHTML = total;
}
