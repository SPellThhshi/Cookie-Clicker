const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const COUNTERf  = document.getElementById("COUNTERf");
var cookieCount = 0;
var Clickpersec = 0; 
var click = 0; 


cookie.addEventListener("click", cookieClick);

function cookieClick(){
    cookieCount += 1;
    counter.innerHTML = "counter: " + cookieCount;
    click += 1;
}

function cps() {
    cookieCount += Clickpersec;
    COUNTERf.innerHTML = "clicks/s: " + click;
    counter.innerHTML = "counter: " + cookieCount;
    click = 0;

    setTimeout(cps, 1000);
}


cps();



