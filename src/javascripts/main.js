//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Fetch and inject the navbar
  fetch("navmenu.html")
    .then((res) => res.text())
    .then((text) => {
      let oldelem = document.querySelector("script#js_navmenu")
      let newelem = document.createElement("div")
      newelem.innerHTML = text
      oldelem.parentNode.replaceChild(newelem, oldelem)
      setActiveNavLink()
    })

  // Function to set active nav link based on current URL
  function setActiveNavLink() {
    let currentPath = window.location.pathname.slice(1) || "index.html" // Get current URL path without leading slash
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link") // Select all nav links

    navLinks.forEach((link) => {
      const linkPath = link.getAttribute("href")
      if (linkPath === currentPath) {
        link.classList.add("active") // Set active class if it matches the current URL
      } else {
        link.classList.remove("active") // Remove active class from other links
      }
    })
  }
})

//add footer to page
fetch("footer.html")
  .then((res) => res.text())
  .then((text) => {
    let oldelem = document.querySelector("script#js_footer")
    let newelem = document.createElement("div")
    newelem.innerHTML = text
    oldelem.parentNode.replaceChild(newelem, oldelem)
  })
