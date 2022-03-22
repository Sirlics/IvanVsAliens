const bebr = document.querySelectorAll("bebr");
const mish = document.getElementById("mish");
const menu  = document.querySelectorAll(".colunm__menu");
const wrap = document.getElementById("wrapper");
const clos = document.querySelector(".closet-contein")
menu.forEach(menuItem => {
   menuItem.addEventListener("click" , function(event){
      if(event.target.closest(".column__menu-itemB")){
         mish.style.display="block";
         wrap.style.display="none";

      }
   })
});

clos.addEventListener("click", function(){
   mish.style.display="none";
   wrap.style.display="block";
});


