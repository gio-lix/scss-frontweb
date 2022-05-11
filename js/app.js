const body = document.querySelector("body")
const btn = document.querySelector("#btnHamburger")
const header = document.querySelector(".header")
const overLay = document.querySelector(".overlay")
    const fadeElems = document.querySelectorAll(".has-fade")

btn.addEventListener("click", () => {
    if (header.classList.contains("open")) {
        body.classList.remove("noscroll")
        header.classList.remove("open")
        fadeElems.forEach((element) => {
            element.classList.remove("fade-in")
            element.classList.add("fade-out")
        })
        overLay.classList.remove("fade-in")
        overLay.classList.add("fade-out")
    } else {
        body.classList.add("noscroll")
        header.classList.add("open")
        fadeElems.forEach((element) => {
            element.classList.remove("fade-out")
            element.classList.add("fade-in")
        })

    }
})