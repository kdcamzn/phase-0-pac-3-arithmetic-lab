function add(a, b){
    return a + b
}
add(1,2);

function subtract(a, b){
    return a + b
}
subtract(11,22);

function multiply(a, b){
    return a * b
}
multiply(1000,2000);

function divide(a, b){
    return a / b
}
divide(1000,2000);

function addTwo(a,b) {
    return a + b
}
addTwo(300,3);

function subtract(a,b) {
    return a - b
}
subtract (300,30000);

var i = 0;

function increment(n){
  n++;
  return n;
}
i=increment(i);

function decrement(n){
    n--;
    return n;
  }
  i=decrement(i);

const n = "33";
function makeInt(n) {
    return (parseInt(n, 10));
}

const d = "3.33";
function baseTen(d) {
    return parseInt(d);
}
baseTen("3.33");

function notA(words) {
    return isNaN(notA(words));
}
notA("words words words");

function preserveDecimal(n) {
    return (parseFloat(n));
}
preserveDecimal(2.222);