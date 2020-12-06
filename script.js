
// --- keep active a pushed menu item ---

let navItems = document.querySelectorAll('.nav__link');
navItems.forEach(el => {
  el.addEventListener('click', () => {
    let current = document.querySelectorAll('.nav__item-active');
    if (current.length > 0) {
      current[0].className = current[0].className.replace('nav__item-active', '');
    }
    el.className += ' nav__item-active';
  });
});

// --- slide switch ---

const changeBackgroundColor = (n) => {
  let slider = document.querySelector('#slider');
  slider.style.backgroundColor = backgroundColorsSlider[n - 1];
  slider.style.borderBottomColor = backgroundColorsSlider[n - 1];
};

const showAnotherSlide = (n) => {
  let slides = document.querySelectorAll('.two-slides');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'inline-flex';
};
const plusSlides = (n) => {
  showAnotherSlide(slideIndex += n);
  changeBackgroundColor(slideIndex);
};

let backgroundColorsSlider = ['#ef6c64', '#0000FF'];
let slideIndex = 1;
showAnotherSlide(slideIndex);

// --- Activating Phone Screens ---

document.querySelector('.iphone-vertical').addEventListener('click', () => {
    if (document.querySelector('.iphone-vertical-display').style.display === 'none') {
      document.querySelector('.iphone-vertical-display').style.display = 'block';
    } else document.querySelector('.iphone-vertical-display').style.display = 'none';
  }
);
document.querySelector('.iphone-horizontal').addEventListener('click', () => {
    if (document.querySelector('.iphone-horizontal-display').style.display === 'none') {
      document.querySelector('.iphone-horizontal-display').style.display = 'block';
    } else document.querySelector('.iphone-horizontal-display').style.display = 'none';
  }
);

// --- Portfolio Tab Switching ---

const changeImages = () => {
  let imgArray = document.querySelectorAll('.portfolio__image img');
  let firstImg = imgArray[0].src;
  for (let i = 1; i < imgArray.length; i++) {
    imgArray[i - 1].src = imgArray[i].src;
  }
  imgArray[imgArray.length - 1].src = firstImg;
};
document.querySelector('.tabs-line').addEventListener('click', changeImages);

// --- add active tab style ---

let tabItems = document.querySelectorAll('.tab');
tabItems.forEach(el => {
  el.addEventListener('click', () => {
    let current = document.querySelectorAll('.tab-active');
    if (current.length > 0) {
      current[0].className = current[0].className.replace('tab-active', '');
    }
    el.className += ' tab-active';
  });

});

// --- Portfolio Image Interaction ---

let portfolioImgArr = document.querySelectorAll('.portfolio__image img');

const changeBorder = (e) => {
  for (let i = 0; i < portfolioImgArr.length; i++) {
    if (portfolioImgArr[i].style.border === '5px solid rgb(240, 108, 100)') {
      portfolioImgArr[i].style.border = '';
      portfolioImgArr[i].style.filter = '';
    }
    e.currentTarget.style.border = '5px solid rgb(240, 108, 100)';
    e.currentTarget.style.filter = 'brightness(70%)';
  }
};

portfolioImgArr.forEach(el => el.addEventListener('click', changeBorder));

// --- Submit modal window ---

const form = document.getElementById('form');
const modal = document.querySelector('#my-modal');
const closeBtn = document.querySelector('.close');

form.addEventListener('submit', onSubmitForm);
closeBtn.addEventListener('click', closeModal);

function onSubmitForm(event) {
  event.preventDefault();
  const subject = document.querySelector('#feedback__subject').value;
  const description = document.querySelector('#feedback__description').value;
  openModal(subject, description);
}

function openModal(subject, description) {
  modal.style.display = 'block';
  document.querySelector('#sb').innerHTML = subject ? `Subject: ${subject}` : 'Without subject';
  document.querySelector('#des').innerHTML = description ? `Description: ${description}` : 'Without description';
}

function closeModal() {
  modal.style.display = 'none';
  clearForm();
}

function clearForm() {
  let formLine = document.querySelector('.feedback__form');
  let formItems = formLine.querySelectorAll('.feedback__field');
  for (let i = 0; i < formItems.length; i++) {
    formItems[i].value = '';
  }
}

// Limit textarea chars

function limitText(limitField, limitNum) {
  if (limitField.value.length > limitNum) {
    limitField.value = limitField.value.substring(0, limitNum);
  }
}


