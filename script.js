let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const thumbnails = document.querySelectorAll('.thumbnail');

function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  thumbnails[currentSlide].classList.remove('active');

  currentSlide = index;
  slides[currentSlide].classList.add('active');
  thumbnails[currentSlide].classList.add('active');
}

function changeSlide(step) {
  let newSlide = currentSlide + step;
  if (newSlide >= slides.length) newSlide = 0;
  if (newSlide < 0) newSlide = slides.length - 1;
  showSlide(newSlide);
}

// Initialize the first slide as active
showSlide(0);


// const toggleButton = document.getElementById("toggle-navi");
// const hiddenNames = document.querySelectorAll(".navigation");
// let isExpanded = false;

// toggleButton.addEventListener("click", () => {
//   isExpanded = !isExpanded;

//   hiddenNames.forEach((name) => {
//     name.style.display = isExpanded ? "list-item" : "none";
//   });

//   toggleButton.textContent = isExpanded 
//     ? 
//     '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#252B42"><path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z"/></svg>' 
//     : 
//     '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#252B42"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>';
// });

const toggleButton = document.getElementById("toggle-navi");
const hiddenNames = document.querySelectorAll(".navigation");
let isExpanded = false;

toggleButton.addEventListener("click", () => {
  isExpanded = !isExpanded;

  hiddenNames.forEach((name) => {
    name.style.display = isExpanded ? "list-item" : "none";
  });

  toggleButton.innerHTML = isExpanded  
    ? 
    '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#252B42"><path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z"/></svg>' 
    : 
    '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#252B42"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>';
});