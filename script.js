// active header menu
let header = document.getElementById("nav__menu");
let navItems = header.getElementsByClassName("nav__item");
for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("nav__item-active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" nav__item-active", "");
    }
    this.className += " nav__item-active";
  });
}


//  slide switch----------------------------------------------------------------------

let backgroundColorsSlider=['#ef6c64','#0000FF'];
let slideIndex = 1;
showAnotherSlide(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showAnotherSlide(slideIndex += n);
  changeBackgroundColor(slideIndex)
}
function changeBackgroundColor(n) {
  let slider= document.querySelector('#slider');
  slider.style.backgroundColor=backgroundColorsSlider[n-1];
}

function showAnotherSlide(n) {
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Activating Phone Screens---------------------------------------------------

document.querySelector('.iphone-vertical').addEventListener('click',()=>{
  if (document.querySelector('.iphone-vertical-display').style.display==='none'){
    document.querySelector('.iphone-vertical-display').style.display='block'}
    else document.querySelector('.iphone-vertical-display').style.display='none'
  }
);
document.querySelector('.iphone-horizontal').addEventListener('click',()=>{
    if (document.querySelector('.iphone-horizontal-display').style.display==='none'){
      document.querySelector('.iphone-horizontal-display').style.display='block'}
    else document.querySelector('.iphone-horizontal-display').style.display='none'
  }
);

// Portfolio Tab Switching -----------------------------------------------------------------

document.querySelector('.tabs-line').addEventListener('click',changeImages);
function changeImages() {
 let imgArray= document.querySelectorAll('.portfolio__image img');
  let firstImg= imgArray[0].src;
 for (let i=1;i<imgArray.length;i++){
   imgArray[i-1].src=imgArray[i].src;
}
 imgArray[imgArray.length-1].src=firstImg;
}

// active tabs-----------------------------------------------------------------------------------

let tabsLine = document.querySelector(".tabs-line");
let tabItems = tabsLine.querySelectorAll(".tab");
for (let i = 0; i < tabItems.length; i++) {
  tabItems[i].addEventListener("click",function() {
    let current = document.getElementsByClassName("tab-active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" tab-active", "");
    }
    this.className += " tab-active";
  });
}

//---Portfolio Image Interaction-----------------------------------------------------------------------

let s= document.querySelector(".portfolio__layout-4-column");
let k=s.querySelectorAll(".portfolio__image img");
for (let i = 0; i < k.length; i++) {
  k[i].addEventListener("click",changeBorder)
}
function changeBorder(e) {
  for (let i = 0; i < k.length; i++) {
console.log(k[i].style.border);
  if (k[i].style.border==='5px solid rgb(240, 108, 100)'){
    k[i].style.border=''
  }
    e.currentTarget.style.border='5px solid rgb(240, 108, 100)'
  }
}

//----modal window-------------------------------------------------------------------------------------------------------

// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}
