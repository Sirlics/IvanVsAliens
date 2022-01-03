const dino = document.getElementById("dino");
const enemy = document.getElementById("enemy");
const text = document.getElementById("text");
const fon = document.querySelector(".start")
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
      }
   }
}, 10);

const start = document.querySelector(".start-botton");
start.addEventListener("click" , function(event) {
  console.log("Работает");
  fon.style.opacity="0";
  setTimeout(() => {
   enemy.classList.add("run")
  }, 3000);
 
 
  
});
document.addEventListener("click" , function (event){
   dino.classList.add("jump")

setTimeout(() => {
  
      dino.classList.remove("jump")

}, 900);
});

