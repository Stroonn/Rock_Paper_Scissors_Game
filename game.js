/*console.log("Hello world!");
let humanscore = 0;
let computerscore = 0;


function getComputerChoice(){
    var options = ['rock', 'paper', 'scissors'];

    var selectedoption = options[Math.ceil(Math.random() * options.length) - 1];

    return selectedoption;
}

function getHumanChoice(){
    var choice = prompt("Choose rock, paper or scissors: ");
    choice = choice.toLowerCase();
    return choice;
}

function PlayRound(){
    var player = getHumanChoice();
    var computer = getComputerChoice();

    if(player === computer){
        console.log("It's a tie! Both chose " + player);
    }else if(
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ){
        humanscore++;
        console.log("You win! " + player + " beats " + computer);
    }else if(
        (player === 'rock' && computer === 'paper') ||
        (player === 'paper' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'rock')
    ){
        console.log("You lose! " + computer + " beats " + player);
        computerscore++;
    }
}

function PlayGame(){
    for(let i = 0; i < 5; i++){
        PlayRound();
        console.log("Player Score: " + humanscore + " | Computer Score: " + computerscore);
    }

    if(humanscore > computerscore){
        console.log("Congratulations! You won the game!");
    }else if(computerscore > humanscore){
        console.log("Sorry! The computer won the game!");
    }else{
        console.log("It's a tie game!");
    }
}

PlayGame();*/

let humanscore = 0;
let computerscore = 0;

const myButton = document.getElementById("rock");
myButton.addEventListener("click", function () {
    var computer = getComputerChoice();
    console.log(computer);

    if(computer == 'rock'){
        alert("It's a tie! Both chose rock!");
    }else if(
        (computer === 'scissors')
    ){
        humanscore++;
        alert("You win! Rock beats Scissors!");
    }else if(
        (computer === 'paper')
    ){
        alert("You lose! Paper beats Rock!");
        computerscore++;
    }
});

const myButton1 = document.getElementById("paper");
myButton1.addEventListener("click", function () {
    var computer = getComputerChoice();

    if(computer == 'paper'){
        alert("It's a tie! Both chose Paper!");
    }else if(
        (computer === 'rock')
    ){
        humanscore++;
        alert("You win! Paper beats Rock!");
    }else if(
        (computer === 'scissors')
    ){
        alert("You lose! Scissors beats Paper!");
        computerscore++;
    }
});

const myButton2 = document.getElementById("scissors");
myButton2.addEventListener("click", function () {
    var computer = getComputerChoice();

    if(computer == 'scissors'){
        alert("It's a tie! Both chose Scissors!");
    }else if(
        (computer === 'paper')
    ){
        humanscore++;
        alert("You win! Scissors beats Paper!");
    }else if(
        (computer === 'rock')
    ){
        alert("You lose! Rock beats Scissors!");
        computerscore++;
    }
});

function getComputerChoice(){
    var options = ['rock', 'paper', 'scissors'];

    var selectedoption = options[Math.ceil(Math.random() * options.length) - 1];

    return selectedoption;
}