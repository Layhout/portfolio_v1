// mobile nav
const btnOpen = document.querySelector("#openNavMenu");
const btnClose = document.querySelector("#closeNavMenu");
const menu = document.querySelector("#navMenu");
const menuLinks = document.querySelectorAll("#navMenu li");
const sections = document.querySelectorAll("section");

btnOpen.addEventListener("click", () => {
    menu.classList.add("nav_opened");
});

btnClose.addEventListener("click", () => {
    menu.classList.remove("nav_opened");
});

menuLinks.forEach(l => {
    l.addEventListener("click", () => {
        menu.classList.remove("nav_opened");
        l.classList.add("active_link");
        l.querySelector("#underline").classList.add("underline_active");
    })
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        document.querySelector("nav").classList.add("nav_shadow");
    } else {
        document.querySelector("nav").classList.remove("nav_shadow");
    }
    sections.forEach(s => {
        if (window.scrollY > s.offsetTop - 70 && window.scrollY <= (s.offsetTop - 70) + s.offsetHeight) {
            document.querySelector(`#navMenu #link_${s.querySelector("div[id]").getAttribute("id")}`).classList.add("active_link");
            document.querySelector(`#navMenu #link_${s.querySelector("div[id]").getAttribute("id")} #underline`).classList.add("underline_active");
        } else {
            document.querySelector(`#navMenu #link_${s.querySelector("div[id]").getAttribute("id")}`).classList.remove("active_link");
            document.querySelector(`#navMenu #link_${s.querySelector("div[id]").getAttribute("id")} #underline`).classList.remove("underline_active");
        }
    })
});

// Qualification tabs
const tabEd = document.querySelector("#tabEd"), tabExp = document.querySelector("#tabExp"), divEdus = document.querySelectorAll("#education"), divExps = document.querySelectorAll("#experience");

tabEd.addEventListener("click", () => {
    divEdus.forEach(ded => {
        ded.classList.add("show");
    })
    divExps.forEach(dep => {
        dep.classList.remove("show");
    })
    tabEd.classList.add("open");
    tabExp.classList.remove("open");
});

tabExp.addEventListener("click", () => {
    divEdus.forEach(ded => {
        ded.classList.remove("show");
    })
    divExps.forEach(dep => {
        dep.classList.add("show");
    })
    tabEd.classList.remove("open");
    tabExp.classList.add("open");
});

// accordion
const accordions = document.querySelectorAll("#accordion");
const accordionContent = document.querySelectorAll("#accordionContent");
accordionContent[0].style.maxHeight = accordionContent[0].scrollHeight + "px";

accordions.forEach((a, i) => {
    a.addEventListener("click", () => {
        a.classList.toggle("accordion_open");
        a.querySelectorAll("i").forEach(i => {
            i.classList.toggle("open");
        });
        a.querySelector("#downArrow").classList.toggle("rotate-180");
        if (accordionContent[i].style.maxHeight) {
            accordionContent[i].style.maxHeight = null;
        } else {
            accordionContent[i].style.maxHeight = accordionContent[i].scrollHeight + "px";
        }
    })
})

// scroll up
const scrollUp = document.querySelector("#scrollUp");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        scrollUp.classList.remove("translate-y-28");
    } else {
        scrollUp.classList.add("translate-y-28");
    }
})

const logo = document.querySelector("#logo")

logo.addEventListener("click", () => {
    window.scrollTo(0, 0);
})

// dark mode
const dmBtn = document.querySelector("#darkModeBtn");

if (localStorage.getItem("darkMode")) {
    dmBtn.classList.add("fa-sun");
    document.body.classList.add("dark");
}

dmBtn.addEventListener("click", () => {
    dmBtn.classList.toggle("fa-sun");
    if (localStorage.getItem("darkMode")) {
        localStorage.setItem("darkMode", "");
        document.body.classList.remove("dark");
    } else {
        localStorage.setItem("darkMode", "true");
        document.body.classList.add("dark");
    }
});

// animation on scroll
AOS.init({
    delay: 300,
    duration: 1000,
    once: true,
    offset: 100,
});

// copy right statement
document.querySelector("#copyRight_Statement").innerHTML += ` ${new Date().getFullYear()} Chea Layhout. All right reserved`;