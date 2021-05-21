//slider\\
let slides = document.querySelectorAll("#slides .slide");
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);
function nextSlide() {
  slides[currentSlide].className = "slide";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = "slide showing";
}

//animation bg nav scroll\\
let nav = document.querySelector(".nav");

window.addEventListener("scroll", (Event) => {
  if (window.pageYOffset > 300) {
    nav.style.position = "fixed";
    nav.style.backgroundColor = "rgba(0,0,0,1)";
    nav.style.transition = "2s all ease";
  } else if (window.pageYOffset < 50) {
    nav.style.backgroundColor = "rgba(0,0,0,0)";
  }
});
function myFunction(x) {
  x.classList.toggle("change");
}


// // theme
// let themeBut = document.querySelector(".but_theme");
// let baseURL =
//   "file:///home/student-pc-3/Documents/mikhaylets/gg-project-master/html/home.html/";
// let file = document.querySelector("link[href]");
// let cont = document.querySelector(".container-home");

// themeBut.addEventListener('click', function () {
//   if (file.attributes[1].textContent === "../css/light-theme.css") {
//     file.attributes[1].textContent = "../css/dark-theme.css";
//   } else if (file.attributes[1].textContent === "../css/dark-theme.css") {
//     file.attributes[1].textContent = "../css/light-theme.css";
//   }
// });



// поп товары 
let blockNg2 = document.querySelectorAll('.games-bot')
let blockNg1 = document.querySelectorAll('.games-top');
let buttonRight = document.querySelector('.but-right');
let buttonLeft = document.querySelector('.but-left');

buttonLeft.addEventListener('click',function (){
  
  for (let index = 0; index < blockNg1.length; index++) {
     blockNg1[index].style.display='none';
  }
  for (let index = 0; index < blockNg2.length; index++) {
    blockNg2[index].style.display="block";
    
  }

})
buttonRight.addEventListener('click',function (){
  
  for (let index = 0; index < blockNg1.length; index++) {
     blockNg1[index].style.display='block';
  }
  for (let index = 0; index < blockNg2.length; index++) {
    blockNg2[index].style.display="none";
    
  }

})
// let side =document.querySelector('.sidespan') 
// let closed =document.querySelector('.closebtn')
// function openNav() {
//   document.querySelector("#mySidenav").style.width = "250px";
//   side.style.display ='none' 
//   closed.style.display='block'
// }

// function closeNav() {
//   document.querySelector("#mySidenav").style.width = "0";
//   side.style.display ='block'
//   closed.style.display='none'
// }



let burgerMenu = document.querySelector('.burger-menu')
let menuList = document.querySelector('.sidenav')

burgerMenu.addEventListener('click', (Event) =>{
  menuList.classList.toggle('visible-list')
})






let accordion = document.querySelectorAll(".accordion");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



















