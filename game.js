console.log("Hello world!");

function getComputerChoice(){
    var options = ['rock', 'paper', 'scissors'];

    var selectedoption = options[Math.ceil(Math.random() * options.length) - 1];

    return selectedoption;
}

console.log(getComputerChoice());