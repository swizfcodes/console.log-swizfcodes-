
let yourNameIs;


document.getElementById("myh1").textContent = "Hello";

document.getElementById("click").onclick = function(){
    yourNameIs = document.getElementById("mytext").value;
    document.getElementById("myh2").textContent = 
    `Welcome Gamer ${yourNameIs}`
    }



let computerMove = '';

document.getElementById("click1").onclick = function(){

    const randomNumber = Math.random()

    if (randomNumber >= 0 && randomNumber < 1 / 3){
        computerMove = 'Rock';
    }

    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3){
        computerMove = 'Paper';
    }

    else if (randomNumber >= 2 / 3 && randomNumber < 1){
        computerMove = 'Scissors';
    }

    console.log(computerMove);

    let result = '';

    if (computerMove === 'Rock') { result = 'Tie.'}

    else if (computerMove === 'Paper') { result = 'You Loose!'}

    else if (computerMove === 'Scissors') { result = 'You Win!'}

    alert(`you picked Rock. Computer picked ${computerMove}
        ${result}`);
}


document.getElementById("click2").onclick = function(){

    const randomNumber = Math.random()

    if (randomNumber >= 0 && randomNumber < 1 / 3){
        computerMove = 'Rock';
    }

    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3){
        computerMove = 'Paper';
    }

    else if (randomNumber >= 2 / 3 && randomNumber < 1){
        computerMove = 'Scissors';
    }

    console.log(computerMove);

    let result = '';

    if (computerMove === 'Rock') { result = 'You Win!.'}

    else if (computerMove === 'Paper') { result = 'Tie!'}

    else if (computerMove === 'Scissors') { result = 'You Loose!'}

    alert(`you picked Paper. Computer picked ${computerMove}
        ${result}`);
}


document.getElementById("click3").onclick = function(){

    const randomNumber = Math.random()

    if (randomNumber >= 0 && randomNumber < 1 / 3){
        computerMove = 'Rock';
    }

    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3){
        computerMove = 'Paper';
    }

    else if (randomNumber >= 2 / 3 && randomNumber < 1){
        computerMove = 'Scissors';
    }

    console.log(computerMove);

    let result = '';

    if (computerMove === 'Rock') { result = 'You Loose!.'}

    else if (computerMove === 'Paper') { result = 'You Win!'}

    else if (computerMove === 'Scissors') { result = 'Tie!'}

    alert(`you picked Scissors. Computer picked ${computerMove}
        ${result}`);
}



