//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Fetch and inject the navbar
  fetch("navmenu.html")
    .then((res) => res.text())
    .then((text) => {
      let oldelem = document.querySelector("script#js_navmenu")
      let currentPage = document.querySelector("script#js_navmenu").getAttribute("page-name")
      let newelem = document.createElement("div")
      newelem.innerHTML = text
      oldelem.parentNode.replaceChild(newelem, oldelem)
      setActiveNavLinkFromVar(currentPage)
    })

  function setActiveNavLinkFromVar(currentPage) {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link") // Select all nav links
    navLinks.forEach((link) => {
      const linkId = link.getAttribute("id")
      if (linkId === currentPage) {
        link.classList.add("active") // Set active class if it matches the current URL
      } else {
        link.classList.remove("active") // Remove active class from other links if there
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
