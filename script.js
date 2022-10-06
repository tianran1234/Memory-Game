const gameContainer = document.getElementById("game");
let flippedCards = [];

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

let remainingCards = COLORS.length;

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(shuffledColors) {
  for (let color of shuffledColors) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}


// TODO: Implement this function!

function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  let flippedCard = event.target;
 
  if (event.target.classList.contains("flipped")) {
    return;
  } else if (flippedCards.length < 2){
    flippedCard.style.backgroundColor=flippedCard.classList;
    flippedCard.classList.add("flipped");
    flippedCards.push(flippedCard);
    if (flippedCards.length === 2){
      if (flippedCards[0].style.backgroundColor === flippedCards[1].style.backgroundColor){
        console.log("it's a match");
        flippedCards[0].removeEventListener("click", handleCardClick);
        flippedCards[1].removeEventListener("click", handleCardClick);
        remainingCards -= 2;
        flippedCards = [];
      }
      else {
        setTimeout(function() {
          flippedCards[0].style.backgroundColor = "";
          flippedCards[1].style.backgroundColor = "";
          flippedCards[0].classList.remove("flipped");
          flippedCards[1].classList.remove("flipped");
          flippedCards = [];
        }, 100);
      }
    }
  }

  if (remainingCards === 0) {
    setTimeout(function(){ alert("Congratulations!You won!")},0);
  }
  
}

/* */




// when the DOM loads
createDivsForColors(shuffledColors);