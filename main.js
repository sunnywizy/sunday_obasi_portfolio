// Select elements
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

/* Added an evevntListener to the button*/
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

const texts = [
    "Welcome To My Website!",
    "A Frontend Developer",
    "A Graphic Designer",
    "A Vitual Assistant"
  ];
  
  const slideText = document.getElementById("distigation");
  let index = 0;
  
  function showNextText() {
    // Reset styles to slide out
    slideText.style.opacity = 0;
    slideText.style.transform = "translateX(100%)";
  
    setTimeout(() => {
      // Update text content
      slideText.textContent = texts[index];
  
      // Slide in
      slideText.style.opacity = 1;
      slideText.style.transform = "translateX(0)";
      
      // Move to next index
      index = (index + 1) % texts.length;
    }, 500); // Matches CSS transition duration
  }
  
  // Initial show
  showNextText();
  
  // Change text every 3 seconds
  setInterval(showNextText, 3000);