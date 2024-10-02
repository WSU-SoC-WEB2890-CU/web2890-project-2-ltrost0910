//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

//add nav menu to page
fetch("navmenu.html")
  .then((res) => res.text())
  .then((text) => {
    let oldelem = document.querySelector("script#js_navmenu")
    let newelem = document.createElement("div")
    newelem.innerHTML = text
    oldelem.parentNode.replaceChild(newelem, oldelem)
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
