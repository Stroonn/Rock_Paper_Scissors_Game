console.log("Hello world!");
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

PlayRound();