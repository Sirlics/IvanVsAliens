const dino = document.getElementById("dino");
const enemy = document.getElementById("enemy");
const text = document.getElementById("text");
const fon = document.getElementById("start")
const set = document.getElementById("set");

document.addEventListener("click" , function (event){
   dino.classList.add("jump")
})

 let result = setInterval(() => {
  let dinoBottom = dino.offsetHeight + parseInt(getComputedStyle(dino).getPropertyValue('top'))
   let dinoRight = dino.offsetWidth + parseInt(getComputedStyle(dino).getPropertyValue('left'))
   let enemyTop = parseInt(getComputedStyle(enemy).getPropertyValue('top'))
   let enemyLeft =   parseInt(getComputedStyle(enemy).getPropertyValue('left'))
   if(dinoBottom>240){
      dinoBottom=230;
   }
   else {
      dinoBottom=340;
   }

   //console.log(dinoBottom , enemyTop)
   //console.log(dinoRight , enemyLeft )
   if( dinoBottom <= enemyTop && 120>= enemyLeft && enemyLeft > 50 ){
    const replay =  confirm(`СДОХ БЛЯТЬ ЛОХ БОТЯРА НАХУЙ`);
      enemy.classList.remove("run");
      fon.style.opacity="0"
      if(replay== true || replay == false){
         fon.style.opacity="1";
         console.log("Ура")
         divScore.textContent = "0";
         set.style.pointerEvents="visible";
          fon.style.opacity="1";
      }
   }
}, 10);
if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
   let result = setInterval(() => {
      let dinoBottom = dino.offsetHeight + parseInt(getComputedStyle(dino).getPropertyValue('top'))
       let dinoRight = dino.offsetWidth + parseInt(getComputedStyle(dino).getPropertyValue('left'))
       let enemyTop = parseInt(getComputedStyle(enemy).getPropertyValue('top'))
       let enemyLeft =   parseInt(getComputedStyle(enemy).getPropertyValue('left'))
       if(dinoBottom>120){
          dinoBottom=115;
       }
       else {
          dinoBottom=170;
       }
       //console.log(dinoBottom , enemyTop)
       //console.log(dinoRight , enemyLeft )
       if( dinoBottom <= enemyTop && 60>= enemyLeft && enemyLeft > 25 ){
        const replay =  confirm(`СДОХ БЛЯТЬ ЛОХ БОТЯРА НАХУЙ`);
          enemy.classList.remove("run");
          fon.style.opacity="0"
          if( replay == false){
            divScore.textContent = "0";
            set.style.pointerEvents="visible";
             fon.style.opacity="1";
            
          }
          if( replay == true){

            divScore.textContent="0";
            set.style.pointerEvents="visible";
            fon.style.opacity="1";
            
         }
       }
    }, 10);
   }

const start = document.querySelector(".start-botton");
start.addEventListener("click" , function(event) {
  console.log("Работает");
  fon.style.opacity="0";
  set.style.pointerEvents="none";
  setTimeout(() => {
   enemy.classList.add("run")
  }, 3000);
 
 
  
});
document.addEventListener("click" , function (event){
   dino.classList.add("jump");
  

setTimeout(() => {
  
      dino.classList.remove("jump")
    
   
}, 900);
});

const divScore = document.querySelector(".score__result-num");
const divScoreBest = document.querySelector(".score__result-best");
/*
setInterval(() => {
   fonOP = parseInt( getComputedStyle(fon).getPropertyValue("opacity"));
}, 10);*/


document.addEventListener("click", function(event){
   let countrClickScore = divScore.textContent;
   divScore.textContent =  parseInt(countrClickScore) + 1 ;
    
});

let valuePers = localStorage.getItem("number");
console.log(valuePers);
if(valuePers==2){
   dino.innerHTML=`<img src="/img/Иван.jpg" alt="" class="dino-img">`
}
if(valuePers==1){
   dino.innerHTML=`<img src="/img/Кира.jpg" alt="" class="dino-img">`
}
if(valuePers==3){
   dino.innerHTML=`<img src="/img/паша.jpg" alt="" class="dino-img">`
}