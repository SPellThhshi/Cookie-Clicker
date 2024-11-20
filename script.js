const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const COUNTER = document.getElementById("COUNTERf")
var cookieCount = 0;
var Clickpersec = 0;

cookie.addEventListener("click", cookieClick);
cookie.addEventListener("click", cookieClick);


function cookieClick(){
    cookieCount += 1;
    counter.innerHTML = "counter: " + cookieCount;
}

function cps() {

    cookieCount += cps;
    lickpersec.innerHTML = "COUNTERf" + Clickpersec;

    setTimeout(cps, 1000);
}






