document.getElementById("js-subscribe-button").
  onclick = function(){
    
    const buttonElement = 
    document.querySelector('#js-subscribe-button');

    if(buttonElement.innerHTML==='Subscribe'){
      buttonElement.innerHTML='Subscribed';
    } else{ buttonElement.innerHTML='Subscribe'}
  }







function calculateCost (){

  const calculateTotal =
  document.querySelector('#js-cost-input');

  let cost =  Number(calculateTotal.value);

  if(cost<40){
      cost = cost + 10;
  }

  document.querySelector('.js-total-cost').
    innerHTML = `$${cost}`;
}


document.getElementById("calculateCost"). 
  onclick = function(){calculateCost();};


/*function clickKey (event){
  console.log(event.key);

  if(event.key === 'Enter'){
    calculateCost();
  }
}

document.getElementById("js-cost-input"). 
  onkeydown = function(){clickKey();};
*/



document.getElementById("calculateCost").onclick = calculateCost; 
// Simplified

// Attach to the input field itself
document.getElementById("js-cost-input").
addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    calculateCost();
  }
});



//more DOM manipulations


let userName = document.querySelector('.welcome-name');
userName = 'Wizzy'

document.getElementById('welcome').innerHTML =
`Welcome ${userName}`;





  
  


