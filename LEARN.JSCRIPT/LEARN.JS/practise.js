function calculateSquare(num1){
  console.log(num1*num1)
}
calculateSquare(200);



function userName (){
  const myName = document.
  querySelector('#js-username');

  let getName = myName.value;

  document.querySelector('#js-name').
    innerHTML = `Welcome ${getName}`;

}

document.getElementById('userName'). 
  onclick = function(){userName();};


let resetButton = document.querySelector('#reset');

let playerScores = document.querySelector('#js-score').innerHTML || 0;
let computerScores = document.querySelector('#js-score1').innerHTML || 0;

console.log(playerScores)
        console.log(computerScores)

let computerMove = '';

//localStorage.setItem('playerScore','computerScore',
  //JSON.stringify(playerScore,computerScore));



document.addEventListener('DOMContentLoaded', () => {
  const coin = document.querySelector('.coin');
  const click2 = document.querySelector('#click1');


  click1.addEventListener('click', computerPick);

  function computerPick(){

    const randomNumber = Math.floor(Math.random()*2);

    coin.style.animation = 'none';
    
    if(randomNumber === 0 ){
      computerMove = 'TAIL';

      setTimeout(function (){
      
        if (coin) {
          coin.style.animation = 'spin-tail 5s forwards'; 
        }
      }, 100);
      computerScores++; 
    }
    
    else if(randomNumber === 1){
      computerMove = 'HEAD';

      setTimeout(function (){
      
        if (coin) {
          coin.style.animation = 'spin-head 5s forwards';
      }
      }, 100);
      playerScores++;
    };   
    
    setTimeout(updateStarts, 7000);

    console.log("Computer picked: " + randomNumber);

    let result = '';

    if (computerMove === 'TAIL') {result = 'YOU LOOSE!'

      function updateStarts() {
        // Get the score elements directly
        let playerScoreElement = document.querySelector('#js-score');
        let computerScoreElement = document.querySelector('#js-score1');
    
        if (!playerScoreElement || !computerScoreElement) {
            console.error("Could not find score elements.");
            return; // Stop execution if elements are not found
        }
    
        let playerScore = parseInt(playerScoreElement.innerHTML, 10) || 0 ; 
        //Parse to an integer, default to 0
        let computerScore = parseInt(computerScoreElement.innerHTML, 10) || 0; 
        //Parse to an integer, default to 0

        playerScoreElement.innerHTML = `You Loose: ${playerScore}`;
        computerScoreElement.innerHTML = `Computer Wins: ${computerScore ++ }`;

        console.log(playerScore)
        console.log(computerScore)
    
    
        // Store scores correctly in localStorage
        localStorage.setItem('scores', JSON.stringify({ 
          player: playerScore, computer: computerScore }));
      }
    
      document.getElementById('click1'). 
      onclick = function(){updateStarts();}; 
    }

    else if (computerMove === 'HEAD') {result = 'YOU WIN!'

      function updateStarts() {
        // Get the score elements directly
        let playerScoreElement = document.querySelector('#js-score');
        let computerScoreElement = document.querySelector('#js-score1');
    
        if (!playerScoreElement || !computerScoreElement) {
            console.error("Could not find score elements.");
            return; // Stop execution if elements are not found
        }
    
        let playerScore = parseInt(playerScoreElement.innerHTML, 10) || 0;
        //Parse to an integer, default to 0
        let computerScore = parseInt(computerScoreElement.innerHTML, 10) || 0;
        //Parse to an integer, default to 0
    
        playerScoreElement.innerHTML = `You Win: ${playerScore ++}`;
        computerScoreElement.innerHTML = `Computer Looses: ${computerScore}`;

        console.log(playerScore)
        console.log(computerScore)
    
    
        // Store scores correctly in localStorage
        localStorage.setItem('scores', JSON.stringify({ 
          player: playerScore, computer: computerScore }));
      }
    
    
      document.getElementById('click1'). 
      onclick = function(){updateStarts();}; 
    } 
  };

  //Optional - If you want to do something when the coin is clicked directly
  coin.addEventListener('click', () => {
  console.log("Coin clicked!");
  //Add any action on coin click here.
  const randomNumber = Math.floor(Math.random() * 2);

      coin.style.animation = 'none';

      if(randomNumber === 0){
        computerMove = 'TAIL';
    
        setTimeout(function (){
    
          if (coin) {
            coin.style.animation = 'spin-tail 5s forwards'; 
          }
        }, 100);
        tail++;

      } else if(randomNumber === 1 ){
        computerMove = 'HEAD'; 
      
        setTimeout(function (){

          if (coin) {
              coin.style.animation = 'spin-head 5s forwards'; 
          }
        }, 100);
        head++;
      };
  });
});



  document.addEventListener('DOMContentLoaded', () => {
    const coin = document.querySelector('.coin');
    const click2 = document.querySelector('#click2');
  
  
    click2.addEventListener('click', computerPick);
  
    function computerPick() {
      const randomNumber = Math.floor(Math.random() * 2);

      coin.style.animation = 'none';

      if(randomNumber === 0){
        computerMove = 'TAIL';
    
        setTimeout(function (){
    
          if (coin) {
            coin.style.animation = 'spin-tail 5s forwards';              
          }
        }, 100);
        playerScores++;

     } else if(randomNumber === 1 ){
        computerMove = 'HEAD'; 
        
            setTimeout(function (){
    
                if (coin) {
                  coin.style.animation = 'spin-head 5s forwards';                    
              }
              }, 100);
              computerScores++;
      }; setTimeout(updateStarts, 7000);
    
   
      console.log("Computer picked: " + randomNumber);
    
    let result = '';

    if (computerMove === 'TAIL') {result = 'YOU LOOSE!'

      function updateStarts() {
        // Get the score elements directly
        let playerScoreElement = document.querySelector('#js-score');
        let computerScoreElement = document.querySelector('#js-score1');
    
        if (!playerScoreElement || !computerScoreElement) {
            console.error("Could not find score elements.");
            return; // Stop execution if elements are not found
        }
    
        let playerScore = parseInt(playerScoreElement.innerHTML, 10); 
        //Parse to an integer, default to 0
        let computerScore = parseInt(computerScoreElement.innerHTML, 10); 
        //Parse to an integer, default to 0
    
        playerScoreElement.innerHTML = `You Win: ${playerScore}`;
        computerScoreElement.innerHTML = `Computer Looses: ${computerScore}`;
    
        // Store scores correctly in localStorage
        localStorage.setItem('scores', JSON.stringify({ 
          player: playerScore, computer: computerScore }));
      }
    
      document.getElementById('click2'). 
      onclick = function(){updateStarts();}; 
    }

    else if (computerMove === 'HEAD') {result = 'YOU WIN!'

      function updateStarts() {
        // Get the score elements directly
        let playerScoreElement = document.querySelector('#js-score');
        let computerScoreElement = document.querySelector('#js-score1');
    
        if (!playerScoreElement || !computerScoreElement) {
            console.error("Could not find score elements.");
            return; // Stop execution if elements are not found
        }
    
        let playerScore = parseInt(playerScoreElement.innerHTML, 10); 
        //Parse to an integer, default to 0
        let computerScore = parseInt(computerScoreElement.innerHTML, 10); 
        //Parse to an integer, default to 0
    
        playerScoreElement.innerHTML = `You Loose: ${playerScore}`;
        computerScoreElement.innerHTML = `Computer Wins: ${computerScore}`;
    
        // Store scores correctly in localStorage
        localStorage.setItem('scores', JSON.stringify({ 
          player: playerScore, computer: computerScore }));
      }
    
    
      document.getElementById('click2'). 
      onclick = function(){updateStarts();}; 
    } 
  }

      //Optional - If you want to do something when the coin is clicked directly
  coin.addEventListener('click', () => {
    console.log("Coin clicked!");
    //Add any action on coin click here.
    const randomNumber = Math.floor(Math.random() * 2);

      coin.style.animation = 'none';

      if(randomNumber === 0){
        computerMove = 'TAIL';
    
        setTimeout(function (){
    
          if (coin) {
            coin.style.animation = 'spin-tail 5s forwards'; 
          }
        }, 100);
        tail++;

     } else if(randomNumber === 1 ){
        computerMove = 'HEAD'; 
        
      setTimeout(function (){

          if (coin) {
            coin.style.animation = 'spin-head 5s forwards'; 
          }
        }, 100);
        head++;
      };
  });
});
  