// creating the randon numbers for dice 1 and 2
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

// if(randomNumber1 === 1) {
//  document.querySelector(".img1").setAttribute(src, "images/dice1.png");
// }

// changing the image of dice 1
switch (randomNumber1) {
  case 1:
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    break;
  case 2:
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    break;
  case 3:
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    break;
  case 4:
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    break;
  case 5:
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    break;
  case 6:
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    break;
}

// changing the image of dice 2
switch (randomNumber2) {
  case 1:
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    break;
  case 2:
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    break;
  case 3:
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    break;
  case 4:
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    break;
  case 5:
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    break;
  case 6:
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    break;
}
// changing the h1 heading depending on the winner
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
} else {
  document.querySelector("h1").innerHTML = "😂Draw🤣"; // emoji shortcut is win + ;
}
