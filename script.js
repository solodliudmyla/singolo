// active header menu
let header = document.getElementById("nav__menu");
let navItems = header.getElementsByClassName("nav__item");
for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
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
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
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

