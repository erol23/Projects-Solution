// Define variables

let guessedNumber;
let counter = 0;
let count = document.getElementById("count");
let numInput = document.getElementById("number-input");

// Assign number

let number = Math.floor(Math.random() * 100 + 1);
console.log(number);

// Button click trigger
document.getElementById("check-button").addEventListener('click', function(){
    checkNumber();    
});

// Enter trigger
numInput.addEventListener("keyup", function(event){
    if (event.code == "Enter" || event.code == "NumpadEnter"){
        checkNumber();
    }
})

// Define function
function checkNumber(){
    console.log("Pressed check number button");
    counter++;

    count.innerHTML = "Number of attempts: " + counter;

    // get number from input
    guessedNumber = numInput.value;
    console.log(guessedNumber);

    // if guessed number matched
    if (number == guessedNumber){
        alert("You are winner you guest in " + counter + " times!")

            // Play again
        let nextGame = confirm("Do you wanna play again");

        // Assign new number for next game
        if(nextGame){
        number = Math.floor(Math.random()* 100 +1);

        // Thanks for partcipating
        }else{
        count.innerHTML = "";
        document.getElementById("answer").innerHTML = "Thanks for game! 👏"
        numInput.value ="";
        }
        // Check number 1-100 and exist
    }else if((guessedNumber == "" || guessedNumber > 100 || guessedNumber <= 0)){
        answer.innerHTML = "Write any number between 1 to 100!";

        // Check valid number
    }else if (guessedNumber.indexOf(".") != -1 || guessedNumber.indexOf(",") != -1){
        answer.innerHTML = "This is not a natural number!";
        
        //check lower number
    }else if(guessedNumber > number){
        answer.innerHTML ="Please enter lower number!"
        // check higher number
    }else if(guessedNumber < number){
        answer.innerHTML = "Please enter a higher number!"
        // Otherwise
    }else{
        answer.innerHTML = "Are you sure?"
    }

    // Reset and focus
    numInput.value ="";
    numInput.focus();

}
