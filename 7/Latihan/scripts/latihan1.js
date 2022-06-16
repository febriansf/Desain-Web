/* =========================== */

var symbol = document.getElementById('symbol');
var result = document.getElementById('result');

function add() {
    var x = parseInt(document.getElementById('number1').value);
    var y = parseInt(document.getElementById('number2').value);
    
    symbol.innerHTML = '+';
    result.innerHTML = x + y;
}

function sub() {
    var x = parseInt(document.getElementById('number1').value);
    var y = parseInt(document.getElementById('number2').value);

    symbol.innerHTML = '-';
    result.innerHTML = x - y;
}

function mul() {
    var x = parseInt(document.getElementById('number1').value);
    var y = parseInt(document.getElementById('number2').value);

    symbol.innerHTML = 'x';
    result.innerHTML = x * y;
}

function div() {
    var x = parseInt(document.getElementById('number1').value);
    var y = parseInt(document.getElementById('number2').value);

    symbol.innerHTML = ':';
    result.innerHTML = x / y;
}

function reset() {
    document.getElementById('number1').value = "0";
    document.getElementById('number2').value = "0";

    result.innerHTML = 0;
    symbol.innerHTML = '.';
}

/* =========================== */

window.onload = reset();

var buttonAdd = document.getElementById('add');
var buttonSub = document.getElementById('sub');
var buttonMul = document.getElementById('mul');
var buttonDiv = document.getElementById('div');
var buttonReset = document.getElementById('reset');

buttonAdd.onclick = function() {
    add();
}

buttonSub.onclick = function() {
    sub();
}

buttonMul.onclick = function() {
    mul();
}

buttonDiv.onclick = function() {
    div();
}

buttonReset.onclick = function() {
    reset();
}