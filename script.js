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