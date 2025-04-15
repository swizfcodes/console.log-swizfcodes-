/*
function greeting (){
    console.log('hello');
}
greeting();

const num = 3;
const function1 = function(){
    console.log('hello2');
};
console.log(function1);
function1();

const object = {
    num: 3,
    fun: function(){
        console.log('hello3');
    }
};
object.fun();

function display(pram){
    console.log(pram);
}
display(2);


// pasing  function into another function( callback function)
function run (param){
    param(); 
}
run(function(){
    console.log('hello4')
});

setTimeout(function(){
    console.log('timeout')
}, 3000)*/


[
    'Wash dishes',
    'Wash youtube',
    'Make dinner'
].forEach((value, index) => {
    if (value === 'Wash dishes'){
        return;
    }

    console.log(value);
    console.log(index);
});

const regularFunction = function(param, param2){
    console.log('hello');
    return 5;
};
regularFunction();

const arrowFunction = (param, param2) => {
    console.log('hello2');
    return 6;
};
arrowFunction();

const oneParam = param => {
    console.log(param + 1);
};
oneParam(2);

const oneLine = () => 2 + 3;
console.log(oneLine());

const buttonElement = document.querySelector('.js-button');
buttonElement.addEventListener('click', () => {
    console.log('hello');
});
buttonElement.addEventListener('click', () => {
    console.log('hello2');
});

[1,-3, 5].filter((value, index) => {
    return value >= 0;
});

[1, 1, 3].map((value, index) => {
    return value + 10; 
})

/* Closure
If a function has access to a value, it wil always have access to that value.*/

