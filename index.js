
//------------------------ Question 1---------------------------
//Write a function that ask the user for two numbers and return the product of them. 
//But the challenge here is that you can't use the operator * (you can't make the product)
//hint: multiplication is a sequence of sums

 //@param {number} number1
 //@param {number} number2
 //@return {number} product
const multiplication = (num1, num2) => {
  return num1 * num2;
}

const answer1 = multiplication();
console.log('answer1', answer1);

const htmlTarget = document.getElementById("a-1");
htmlTarget.innerHTML = answer1;

function alternateMultiplication (num1, num2) {

  let absNum1 = Math.abs(num1);
  let absNum2 = Math.abs(num2);
  let product = 0;
  // if either number is 0, return 0 
  
  if (num1 === 0 || num2 === 0){
      answer1 += 0;
  // if either number is not a number, return not a number
    }else if (num1 === isNaN || num2 === isNaN){
      answer1 += NaN;
    } 
  // loop through numbers, adding. 
  for (let i = 1; i <= absNum1; i++){
    product += absNum2;
  }
  // if num1 && num2 are positive or if num1 && num2 are negative, return postive value
// else, return negative value
  if ((num1 > 0 && num2 > 0) || (num1 < 0 && num2 < 0)) {
    answer1 += product;
  } else {
    answer1 += -product;
  }
  

return answer1;
}


//------------------------ Question 2 ---------------------------
// Write a function that recieves a string as a parameter and evaluate each character of the string to determinate if the character is vowel or a consonant. you have to store each character on separates arrays, one for vowels and the other one for consonants.
// after separating the characters concatenate both arrays. ask the user if wants the vowels first or consonants first in the final array.
//hint:
let str = '';
let preference = '';
// Create consonant and vowel lists to check string against
let consonantList = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
let vowelList = ["a","e","i","o","u"];
// Create container arrays for sorted elements from the string
let vowelArray = [];
let consonantArray = [];

//@param {string}
//@return {character} => array of characters
vowelOrConsonant = (str) => {
  // prompt the user to give a string
  preference = prompt("Pick the list you'd like to see first. Type either VOWEL or CONSONANT.");
  // iterate through the string
  for (let i = 0; i < str.length; i++) {
    // if iterated element in string is consonant, push to consonant container array
    if(consonantList.indexOf(str[i]) !== -1) {
      consonantArray.push(str[i]);
    // if iterated element in string is vowel, push to vowel container array
    } else if (vowelList.indexOf(str[i]) !== -1) {
      vowelArray.push(str[i]);
    }
    }
    // return the container arrays based on user preference
    if (preference === 'vowel' || preference === 'VOWEL') {
      return `<p>Here are the vowels: ${vowelArray}</p>
              <p>Here are the consonants: ${consonantArray}</p>`;
    } else {
      return `<p>Here are the consonants: ${consonantArray}</p>
              <p>Here are the vowels: ${vowelArray}</p>`;
    }
    }

const answer2 = vowelOrConsonant()


const htmlTarget2 = document.getElementById('a-2')
htmlTarget2.innerHTML = answer2








//------------------------ Question 3 ---------------------------
//Now let's create a small game. The game consists in a player (ask the user for the name).
//The player has 3 oportunities to guess a number. 
//The number is a random number between 10 - 50.
//If the player don't find the number, the program must displays an alert and stop the game, but if the player finds the number, then the program must show a congratulations message (alert) with the name of the player in upperCase letters and stop the game
//You must have to store the player information in a 'player' object. The Player object contains the following Properties:
// {string} name, {number} lives, {numbers} fail_numbers[]
//where: name, saves the name of the player. Lives, represents the remaining oportunities each time the player fails. Fail_numbers, is an array of numbers that stores the fail numbers the player has used

//@return {string} win / gameOver => the string that says if the user wasted the three oportunities showing the fails numbers or the name if the player wins

guessTheNumber  = () => {
// generate random number between 10 - 50
let randNum = Math.floor(Math.random() * (50 - 10) + 10);
// create player info Object
let playerInfo = {name: '', livesRemaining: 3, fails: 0};
let firstGuess;
let secondGuess;
let thirdGuess;
// Greet the player
playerInfo.name = prompt ("Hey! What's your name?");
// ask for first guess
firstGuess = parseInt(prompt (`Nice to meet you, ${playerInfo.name}. Pick a number between 10 and 50. Beware. You only have 3 chances to guess correctly.`));
// if guess is right, give congratulatory alert
if (firstGuess === randNum) {
  alert("GAME OVER. Wow! You got it on the first try! I am impressed!");
  // else, player lives -1, lives used +1, and prompt a new attempt at guessing
} else {
    alert("WRONG! You just lost one life. You now have two guesses left.");
    playerInfo.livesRemaining -= 1;
    playerInfo.fails += 1;
    secondGuess = parseInt(prompt("Let's try again, shall we? Guess a number between 10 and 50. You have two lives left to guess it right."));
    // check again for player guess against the random generated number. If match, game over. 
    if (secondGuess === randNum) {
    alert("GAME OVER. Well done! You only used up " + playerInfo.fails + " life.");
    // else, player lives -1, lives used +1, and prompt a new attempt at guessing
    } else {
      playerInfo.livesRemaining -= 1;
      playerInfo.fails += 1;
      alert(`Nope! You have ${playerInfo.livesRemaining} life left.`);
      // ask for final attempt at guessing the random generated number
      thirdGuess = parseInt(prompt("FINAL TRY! YOU HAVE ONE LAST ATTEMPT TO GUESS A NUMBER BETWEEN 10 AND 50..."));
        // if guess is a match, game over and congratulatory alert
        if (thirdGuess === randNum) {
        alert(`Okay! You did it! I knew you would!`);
        // else, game over alert and update stats. player lives -1, lives used +1
        } else {
        playerInfo.fails += 1;
        playerInfo.livesRemaining -= 1;
        alert(`GAME OVER! I suppose you tried, but in the end you failed. You used all ${playerInfo.fails} of your lives.`);
      }
    }
}
}


const answer3 = guessTheNumber();

const htmlTarget3 = document.getElementById('a-3')
htmlTarget3.innerHTML = answer3





//------------------------ Question 4 ---------------------------
// In the function below we are giving you an array of objects, each one with the same properties. 
// Ask to the user for 3 diferentes options to sorting the array from the highest to lowest. 
// In the case of a string, the criteria to sort must be the length of the string. 
// The first one is sorting the array of objects based on the title property.
// The second one sorting the array of objects based on the author property, the third one based on the library property. 
// finally, the return value has to be the string sorted of the property selected separeted with a semicolon. 
// Remember you have to sort all of the array based on the selected property
//example: if the user select sorting by title the return value must be: "Mockingjay: The Final Book of The Hunger Games; Walter Isaacson; The Road Ahead"

sort = () => {

  var library = [
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];


// ask the user how they want things sorted
let sort = prompt("We can sort values from highest to lowest for your convenience. Would you like sorting by title, author or libraryID?");
let results = [];
// if sort requested is author or title, iterate through array then into objects. Push the property and value to results array
if (sort === 'author' || sort === 'title') {
// iterate through the array
  for (let i = 0; i < library.length; i++) {
// push array.author to results array
    results.push(`${sort}: ${library[i][sort]}`);
  }
  // create sorted results container with starting value from results array
  let sortedResults = [results[0]];
  // iterate through results array
  for(let i = 1; i < results.length; i++) {
    // if iterated element is greater than or equal to first element in results container
    if (results[i].length >= sortedResults[0].length) {
      // put results[i] to front of array
      sortedResults.unshift(results[i]);
      // put it in the middle if smaller than first value and larger than last value
    } else if ((results[i].length > sortedResults[0].length) && (results[i].length < sortedResults[sortedResults.length - 1].length)) {
        sortedResults.splice(1, 0, results[i]);    
        // put at back if smallest value
    } else if (results[i].length <= sortedResults[sortedResults.length - 1].length) {
      sortedResults.push(results[i]);
    } 
    }
    let sortedResultsString = sortedResults.join(', ');
    return sortedResultsString;
// if user wants the list sorted by library ID #
} else if (sort === "libraryID") {
  // iterate through array
  for (let i = 0; i < library.length; i++) {
    // push libraryIDs to the results array
    results.push(`${library[i][sort]}`);
  }
  // create container to place sorted values from the resuls array
  let sortedResults = [`${sort}: ${results[0]}`];
  // iterate through the results array
  for (let i = 1; i < results.length; i++){
    // begin to sort the values based on ID number to the sorting container
    if (results[i] >= sortedResults) {
      sortedResults.unshift(`${sort}: ${results[i]}`);
    } else if (results[i] <= sortedResults[sortedResults.length - 1]) {
      sortedResults.push(`${sort}: ${results[i]}`);
    } else if ((results[i] > sortedResults[0]) && (results[i] < sortedResults[sortedResults.length - 1])) {
        sortedResults.splice(1, 0, `${sort}: ${results[i]}`);    
        // put at back if smallest value
    }
  }
  let sortedResultsString = sortedResults.join(', ');
  return sortedResultsString;
}
}
console.log(sort());

const answer4 = sort()

const htmlTarget4 = document.getElementById('a-4')
htmlTarget4.innerHTML = answer4


