// Define variables

let guessedNumber;
let counter = 0;

// Assign number

let number = Math.floor(Math.random() * 100 + 1);
console.log(number);

// Button click trigger
document.getElementById("check-button").addEventListener('click', function(){
    checkNumber();    
});

// Enter trigger
document.getElementById("number-input").addEventListener("keyup", function(event){
    if (event.code == "Enter" || event.code == "NumpadEnter"){
        checkNumber();
    }
})

// Define function
function checkNumber(){
    console.log("Pressed check number button");
    counter++;

    document.getElementById("count").innerHTML = "Number of attempts: " + counter;

    guessedNumber = document.getElementById("number-input").value;
    console.log(guessedNumber);

}
