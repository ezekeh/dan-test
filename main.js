"use strict";

// slider component
/*
I want to press btn and it moves that direction
by 100%,

*/
const right = document.querySelector(".right");
const left = document.querySelector(".left");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const hidden = document.querySelector(".hidden");
const gridCont = document.querySelector(".grid-container");
const toggleBtn = document.querySelector(".toggle-switch");
const header = document.querySelector(".body-header");
const profile = document.querySelector("#profile");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const contactBtn = document.querySelector(".contact-btn");
const contactSection = document.querySelector("#contact");
const homeBtn = document.querySelector(".home-btn");
const gotoCV = document.querySelector(".goto-CV");
const cvBtn = document.querySelector(".resume-btn");

let currslide = 0;
const maxLength = slides.length - 1;
const arrange = (currslide) => {
  slides.forEach((each, i) => {
    each.style.transform = `translateX(${(i - currslide) * 100}%)`;
  });
};
arrange(0);
const moveRight = function () {
  if (currslide == maxLength) currslide = 0;
  else currslide++;
  arrange(currslide);
};

const moveLeft = function () {
  if (currslide == 0) currslide = maxLength;
  else currslide--;
  arrange(currslide);
};

right.addEventListener("click", moveRight);
left.addEventListener("click", moveLeft);

toggleBtn.addEventListener("click", function () {
  if (gridCont.classList.contains("hidden"))
    toggleBtn.textContent = "brand Identity";
  else toggleBtn.textContent = "varieties";

  gridCont.classList.toggle("hidden");
  slider.classList.toggle("hidden");
});

// make intersection

new IntersectionObserver(
  function (entries, observer) {
    console.log(entries);
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) {
      header.classList.add("fixed");
    }
  },
  {
    threshold: 0.1,
    root: null,
    rootMargin: `-${hamburger.getBoundingClientRect().height}px`,
  }
).observe(profile);

// when we click the hamburger

console.log(nav);

hamburger.addEventListener("click", function () {
  nav.classList.toggle("displayNav");
  // console.log("jeol");
});

contactBtn.addEventListener("click", function () {
  contactSection.scrollIntoView({ behavior: "smooth" });
});

nav.addEventListener("click", function (e) {
  e.preventDefault();
  if (!e.target.classList.contains("navlink")) return;
  const ids = e.target.getAttribute("href");
  console.log(ids);
  const sect = document.querySelector(ids);
  sect.scrollIntoView({ behavior: "smooth" });
});
homeBtn.addEventListener("click", function () {
  profile.scrollIntoView({ behavior: "smooth" });
});
gotoCV.addEventListener("click", function (e) {
  if (cvBtn.classList.contains("dim")) cvBtn.classList.remove("dim");
  e.preventDefault();
  profile.scrollIntoView({ behavior: "smooth" });
  cvBtn.classList.add("dim");
});
