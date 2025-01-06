document.querySelector(".button").addEventListener("click", (e) => {
  console.log("clicked")
  menuItems = document.querySelector(".menu-items")
  if (menuItems.classList.contains("hidden")) {
    document.querySelector(".menu-items").classList.replace("hidden", "visible")
  } else {
    document.querySelector(".menu-items").classList.replace("visible", "hidden")
  }
})

document.querySelector("#right-button").addEventListener("click", () => {
  next()
})

document.querySelector("#left-button").addEventListener("click", () => {
  prev()
})

document.querySelector(".dots").addEventListener("click", (e) => {
  if (e.target.classList.contains("dot")) {
    children = Array.from(e.target.parentElement.children)
    const i = children.indexOf(e.target) - 1
    const el = document.querySelector(".images")
    el.style.left = i * -500 + "px"
    selectDot(i + 1)
  }
})

function next() {
  const el = document.querySelector(".images")
  const val = Number(
    window.getComputedStyle(el).getPropertyValue("left").slice(0, -2)
  )
  const newVal = val > -2000 ? val - 500 : 0
  const i = newVal / -500 + 1
  selectDot(i)
  el.style.left = newVal + "px"
}

function prev() {
  const el = document.querySelector(".images")
  const val = Number(
    window.getComputedStyle(el).getPropertyValue("left").slice(0, -2)
  )
  const newVal = val < 0 ? val + 500 : -2000
  const i = newVal / -500 + 1
  selectDot(i)
  el.style.left = newVal + "px"
}

function selectDot(i) {
  const dots = Array.from(document.querySelector(".dots").children)
  dots.forEach((dot) => dot.classList.remove("selected"))
  dots[i].classList.add("selected")
}

setInterval(next, 5000)
