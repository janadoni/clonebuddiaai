// function my(){
//     document.getElementById("drop").classList.toggle("show");
//     alert("ok")
// }
// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }
//   alert("ok")


var div=document.getElementById('menus');
var sub=div.getElementsByClassName('li');
var solutionContent=document.getElementById('solu');
var coding=solutionContent.getElementsByClassName('coding-ai');
for (var i = 0; i < sub.length; i++) {
  sub[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

      
  });
}
// image slider section
let slideIndex=0;
showSlides();

function showSlides(){
    let i;
    let slides=document.getElementsByClassName("review-menu");
    let dots=document.getElementsByClassName("dot");
    for (i=0;i<slides.length;i++){
        slides[i].style.display="none";
        slides[i].style.transition="all 1s"
      }
    slideIndex++;
    if(slideIndex>slides.length){
        slideIndex=1;
    }
    for(i=0;i<dots.length;i++){
        dots[i].className=dots[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className+=" active";
    setTimeout(showSlides,2000);
}
// slider sction ends




// mobile size navbar 
var menubarIcon=document.querySelector(".small-icon");
var menubarIcon1=document.querySelector(".small-icon1");

var closeIcon=document.querySelector(".small-icon2");
var dropdown=document.querySelector(".navbar");
menubarIcon1.addEventListener('click',()=>{
  if(dropdown.style.display==="none"){
    dropdown.style.display="block";
    // menubarIcon1.style.display="none";
    menubarIcon.style.display="none";

   if(dropdown.style.display==="block"){
    closeIcon.style.display="block";
   closeIcon.addEventListener('click',function jana(){
    if(dropdown.style.display==="block"){
      dropdown.style.display="none";
      closeIcon.style.display="none";
    menubarIcon.style.display="block";

    }
   })

    
   }
  }
  else{
    dropdown.style.display="none";
    menubarIcon.style.display="block";
  
  }
});
window.addEventListener('mouseup',function(event){
  var pol = document.getElementById('navbar');
  if(event.target != pol && event.target.parentNode != pol){
    if(dropdown.style.display==="block"){
      dropdown.style.display="none";
      closeIcon.style.display="none";
    menubarIcon.style.display="block";

    }
  }
});  

// closeIcon.addEventListener('click',()=>{
//   if(dropdown.style.display==="block"){
//     dropdown.style.display="none";
//   }
//   else{
//     dropdown.style.display="block"
//   }
// })

console.log(closeIcon);