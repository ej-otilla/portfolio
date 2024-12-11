/* Hamburger Menu ----------------------------------------------------------------------------- */

const body = document.body;
const hbMenu = document.getElementById("hbMenu");
const offScreenMenu = document.getElementById("offScreenMenu");
const offScreenLinks = offScreenMenu.querySelectorAll("a");
const workWithMeButton = document.getElementById("workWithMeButton");
const footer = document.getElementById("footer");

// Toggle menu open/close
hbMenu.addEventListener("click", () => {
  hbMenu.classList.toggle("active"); // Toggle active class on the hamburger menu
  offScreenMenu.classList.toggle("active"); // Toggle active class on the off-screen menu
  body.classList.toggle('no-scroll'); // Toggle no-scroll class on the body
});

// Close the hamburger menu when "Work With Me" is clicked
workWithMeButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default anchor behavior

  if (hbMenu.classList.contains("active") && offScreenMenu.classList.contains("active")) {
    hbMenu.classList.remove("active");
    offScreenMenu.classList.remove("active");

    // Delay scrolling to the footer
    setTimeout(() => {
      footer.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }
});

// Enable scroll and close the menu when a link in the off-screen menu is clicked
offScreenLinks.forEach(link => {
  link.addEventListener('click', () => {
    body.classList.remove('no-scroll'); // Remove no-scroll class to enable scrolling

    // Close the off-screen menu and hamburger menu
    hbMenu.classList.remove("active");
    offScreenMenu.classList.remove("active");
  });
});

/* Copyright Year ----------------------------------------------------------------------------- */

const fYear = document.getElementById("footerYear");
const d = new Date();
fYear.textContent = d.getFullYear();