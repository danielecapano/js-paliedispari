//ESERCIZIO PARLOLE PALINDROME

let parola = prompt("Inserisci una parola");

if (isPalindrome(parola)) {
  console.log(`${parola} è una parola palindroma`);
} else {
  console.log(`${parola} non è una parola palindroma`);
}

//ESERCIZIO PARI O DISPARI

let userChoice = "";

do {
  userChoice = prompt("Scegli pari o dispari");
} while (userChoice !== "pari" && userChoice !== "dispari");
console.log(userChoice);

let userNumber;

do {
  userNumber = parseInt(prompt("scegli un numero da 1 a 5"));
} while (userNumber < 1 || userNumber > 5);
console.log(userNumber);

const pcNumber = getRandomInt(1, 5);
console.log(pcNumber);

if (
  (isSumEven(userNumber, pcNumber) && userChoice === "pari") ||
  (!isSumEven(userNumber, pcNumber) && userChoice === "dispari")
) {
  console.log("Complimenti hai vinto");
} else {
  console.log("Mi dispiace hai perso");
}

function isPalindrome(string) {
  let word = string.toLowerCase();

  //metodo 1
  let reverseWorld = word.split("").reverse().join("");

  //metodo 2 con ciclo for

  // let reverseWorld = '';

  // for (let i = word.length - 1; i >= 0; i--) {
  //   reverseWorld += word[i];
  // }

  return word === reverseWorld;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function isSumEven(num1, num2) {
  let sum = num1 + num2;
  return sum % 2 === 0;
}
