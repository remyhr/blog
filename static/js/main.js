// window scroll
const header = document.querySelector(".header-container");
const headerHeight = header.getBoundingClientRect().height;
const moveUpwardIcon = document.querySelector(".move-upward-icon");
console.log(moveUpwardIcon)

window.addEventListener("scroll", function() {
  if (window.pageYOffset > headerHeight) {
    header.classList.add("box-shadow");
  } else {
    header.classList.remove("box-shadow");
  }
  if (window.pageYOffset > 500) {
    console.log(window.pageYOffset)
    moveUpwardIcon.classList.add("move-upward-icon-show");
  } else {
    moveUpwardIcon.classList.remove("move-upward-icon-show");
  }
});


// menu toggle
const navToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".header-nav");
navToggle.addEventListener("click", function() {
  nav.classList.toggle("header-nav-show");
})

// Capture the current theme from local storage and adjust the page to use the current theme.
const htmlEl = document.getElementsByTagName('html')[0];
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    htmlEl.dataset.theme = currentTheme;
}

// When the user changes the theme, we need to save the new value on local storage
const darkTheme = document.querySelector(".dark-btn");
const lightTheme = document.querySelector(".light-btn");
if (currentTheme === 'dark') {
  darkTheme.classList.add('hidden');
  lightTheme.classList.remove('hidden');
}

darkTheme.addEventListener("click", function() {
  htmlEl.dataset.theme = 'dark';
  localStorage.setItem('theme', 'dark');
  darkTheme.classList.add('hidden');
  lightTheme.classList.remove("hidden");
})
lightTheme.addEventListener("click", function() {
  htmlEl.dataset.theme = 'light';
  localStorage.setItem('theme', 'light');
  lightTheme.classList.add('hidden');
  darkTheme.classList.remove('hidden');
})

// current link
const links = document.querySelectorAll(".header-nav-link");
const currentHref = window.location.href;
window.addEventListener("DOMContentLoaded", function() {
  currentTab();
})
function currentTab() {
  links.forEach(function(e) {
    if (e.href === currentHref) {
      e.classList.add("header-nav-link-active");
    } else {
      e.classList.remove("header-nav-link-active");
    }
  })
};