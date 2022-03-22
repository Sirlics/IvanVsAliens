const newDino =document.querySelector(".newDino");
const oldDino =document.querySelector(".oldDino");
const pashaDino = document.querySelector(".pashaDino")
let pers = 2;
newDino.addEventListener("click" , function() {
   localStorage.clear;
    pers = 1;
   localStorage.setItem("number" , pers);
});

oldDino.addEventListener("click" , function() {
   localStorage.clear;
    pers = 2;
   localStorage.setItem("number" , pers);
});

pashaDino.addEventListener("click" , function() {
   localStorage.clear;
    pers = 3;
   localStorage.setItem("number" , pers);
});