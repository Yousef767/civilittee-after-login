let nav = document.querySelector("hder");
let main = document.getElementById('main');
let dcont = document.querySelector('.dcont');
let hder = document.querySelector('.hder');
let menu = document.querySelector(".menu");
let profileImg = document.getElementById("profileImg");


menu.addEventListener("click", () => {
  dcont.classList.toggle("showNavLinks");
  dcont.classList.remove("showProfileImg");
});

profileImg.addEventListener("click", () => {
  dcont.classList.toggle("showProfileImg");
  dcont.classList.remove("showNavLinks");
});


main.addEventListener('scroll',()=>{
  if(main.scrollTop >= 50){
    hder.classList.add('shadowHdr');
  }else{
    hder.classList.remove('shadowHdr');
  }
})

let navLinks = document.querySelectorAll(".nLink");
navLinks.forEach((e) => {
  e.addEventListener("click", () => {
    navLinks.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
  });
});



