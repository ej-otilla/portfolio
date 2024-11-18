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

/* Greeting ----------------------------------------------------------------------------------- */

const greetingElement = document.getElementById("greeting");

if (greetingElement) {
  const hours = new Date().getHours(); // Gets the current hour of the day from the user's timezone
  let greetingMessage = ""; // Stores the appropriate greeting message
  let greetingClass = ""; // Stores the CSS class for styling based on time of day

  // Determines the appropriate greeting based on the time
  if (hours < 12) {
      greetingMessage = "Good morning!";
      greetingClass = "morning";
  } else if (hours >= 12 && hours < 17) {
      greetingMessage = "Good afternoon!";
      greetingClass = "afternoon";
  } else {
      greetingMessage = "Good evening!";
      greetingClass = "evening";
  }

  // Updates the text content and CSS class of the greeting element
  greetingElement.textContent = greetingMessage;
  greetingElement.className = `greeting ${greetingClass}`;
}

/* Alert Button ------------------------------------------------------------------------------- */

const alertButton = document.getElementById("tmpBtnAlert");

if (alertButton) {
    // Show alert message on click
    alertButton.addEventListener("click", () => {
        alert("Hi there! :-)");
    });

    // Change label on hover
    alertButton.addEventListener("mouseover", () => {
        alertButton.innerText = "Click Me!";
    });

    // Revert label when hover ends
    alertButton.addEventListener("mouseout", () => {
        alertButton.innerText = "Hover Over Me!";
    });
}

/* Numbers List ------------------------------------------------------------------------------- */

const numbersList = document.getElementById('numbers');

// Use a for loop to create and populate the <li> elements
if (numbersList) {
  for (let i = 1; i <= 12; i++) {
      const listItem = document.createElement("li"); // Create a new <li> element
      listItem.textContent = i % 2 === 0 ? "even" : "odd"; // Set the text content to 'even' or 'odd' based on the index
      numbersList.appendChild(listItem); // Append the new <li> element to the ordered list
  }
}

// for (let i = 1; i <= 12; i++) // Bonus: More efficient increment syntax for the loop

/* Today's Date ------------------------------------------------------------------------------- */

console.log(new Date().toLocaleString());

/* Copyright Year ----------------------------------------------------------------------------- */

const fYear = document.getElementById("footerYear");
const d = new Date();
fYear.textContent = d.getFullYear();