let app = document.getElementById("app");
let answerpage = document.createElement("answerpage");
const table = document.createElement("table");
let answer;

for (let i = 0; i < 5; i++) {
  let tr = document.createElement("tr");
  for (let n = 1; n <= 5; n++) {
    let td = document.createElement("td");
    td.setAttribute("id", "answer" + (i * 5 + n)); // id of every td = every time answer
    td.innerHTML = i * 5 + n; //important
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
app.appendChild(table);

let countdown = 5;
let correct = Math.round(Math.random() * 25);
setTimeout(function () {
  answer = window.prompt("Choice a number from 1 to 25 to log in the page!");
  firstStep();
}, 25);

function firstStep() {
  if (
    answer &&
    answer <= 25 &&
    answer >= 1 &&
    countdown > 0 &&
    answer !== correct
  ) {
    let choice = answer < correct ? "higher" : "lower";
    newchoice(answer, choice);
    setTimeout(seconStep, 25);
  } else {
    if (answer === correct) {
      newchoice(answer, null); //
      alert("Congrats! You are correct!");
    } else {
      alert("Answer is ".concat(correct, "."));
    }
  }
}

function seconStep() {
  let choice = answer < correct ? "higher" : "lower"; //screen display
  answer = window.prompt(
    "Try again!" +
      choice +
      "than" +
      answer +
      "You only have" +
      countdown +
      "options!"
  );
  countdown--;
  answerpage.innerHTML = countdown; //
  firstStep(); //go back to execute
}

function newchoice(number, choice) {
  if (choice === "higher") {
    for (let m = 1; m <= number; m++) {
      document.getElementById("answer" + m); //.style.backgroundColor = "blue";
    }
  } else if (choice === "lower") {
    for (let m2 = 100; m2 >= number; m2--) {
      document.getElementById("answer" + m2); //.style.backgroundColor = "grey";
    }
  } else {
    document.getElementById("answer" + number); //.style.backgroundColor = "yellow"; // answer == correct
  }
}

// letter guess
// let randomNumber = Math.floor(Math.random() * 26) + 1;
// let randomLetter = String.fromCharCode(randomNumber + 64); // Convert to letter

// let guessesLeft = 5;
// while (guessesLeft > 0) {
//   let guess = prompt("Guess a letter (A-Z):");

//   if (guess.length !== 1 || !guess.match(/[A-Z]/i)) {
//     alert("Please enter a single letter from A to Z.");
//     continue;
//   }

//   let guessNumber = guess.toUpperCase().charCodeAt(0) - 64;

//   if (guessNumber === randomNumber) {
//     alert("Congratulations! You guessed the letter correctly!");
//     break;
//   } else if (guessNumber < randomNumber) {
//     alert("Too low! Try a higher letter.");
//   } else {
//     alert("Too high! Try a lower letter.");
//   }

//   guessesLeft--;
// }

// if (guessesLeft === 0) {
//   alert("You ran out of guesses. The letter was " + randomLetter + ".");
// }
