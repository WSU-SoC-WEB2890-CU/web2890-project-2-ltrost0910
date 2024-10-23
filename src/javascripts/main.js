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
        link.classList.add("active") // Set active class if it matches the current page
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

//preload images for gallery
function preloadImages(...images) {
  images.forEach((imageUrl) => {
    const img = new Image()
    img.src = imageUrl
  })
}

preloadImages(
  "/cute-little-girl-autumn-field-with-horse_1157-28310.jpg",
  "/sunset_eq-inside-boy-edited.jpg",
  "/young-female-preparing-ride.jpg",
  "/sunset_outdoor_arena.webp",
  "/sunset_outside_stalls2.webp",
  "/sunset_indoor_arena.webp",
  "/sunset_outside_office_fb.jpg",
  "/palomino_and_pals-edited.jpg",
  "/sunset-eq-inside-cropped.jpg"
)
