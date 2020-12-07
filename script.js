let navItems = document.querySelectorAll('.nav__link');
navItems.forEach(el => {
  el.addEventListener('click', () => {
    document.querySelectorAll('.nav__menu .active')
      .forEach(el => el.classList.remove('active'));
    el.classList.add('active');
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
    document.querySelectorAll('.tab .active')
      .forEach(el => el.classList.remove('active'));
    el.classList.add('active');
  });
});

// --- Portfolio Image Interaction ---

let portfolioImgArr = document.querySelectorAll('.portfolio__image img');
portfolioImgArr.forEach(el => {
  el.addEventListener('click', () => {
    document.querySelectorAll('.portfolio__image .active')
      .forEach(el => el.classList.remove('active'));
    el.classList.add('active');
  });
});

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
  formItems.forEach(el => el.value = '');
}

// Limit textarea chars

function limitText(limitField, limitNum) {
  if (limitField.value.length > limitNum) {
    limitField.value = limitField.value.substring(0, limitNum);
  }
}


