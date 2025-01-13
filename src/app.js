import "./style.css";

window.onload = function() {
  //write your code here
  let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let suits = ["♦", "♥", "♠ ", "♣"];

  let valuesRandom = values[Math.floor(Math.random() * values.length)];
  let suitsRandom = suits[Math.floor(Math.random() * suits.length)];

  let card = document.getElementById("card");
  let icon_top = document.getElementById("icon_top");
  let icon_central = document.getElementById("icon_central");
  let icon_bottom = document.getElementById("icon_bottom");

  if (suitsRandom === "♥" || suitsRandom === "♦") {
    card.className = "cardred";
  } else {
    card.className = "card";
  }

  icon_central.innerHTML = valuesRandom;
  icon_top.innerHTML = suitsRandom;
  icon_bottom.innerHTML = suitsRandom;
};
