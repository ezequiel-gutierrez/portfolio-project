// Hexagons being observed

const hexagonVisibility = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("hexagon-is-visible");
        } else {
            entry.target.classList.remove("hexagon-is-visible");
        }
    });
});

const hidingIcons = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("hide-icon-on-delay");
        } else {
            entry.target.classList.remove("hide-icon-on-delay");
        }
    });
});

const showingText = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-after-delay");
        } else {
            entry.target.classList.remove("show-after-delay");
        }
    });
});

const hexagonOneShows = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("hexagon1-coming-down");
        } else {
            entry.target.classList.remove("hexagon1-coming-down");
        }
    });
});

const hexagonTwoShows = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("hexagon2-coming-down");
        } else {
            entry.target.classList.remove("hexagon2-coming-down");
        }
    });
});

const hexagonThreeShows = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("hexagon3-coming-up");
        } else {
            entry.target.classList.remove("hexagon3-coming-up");
        }
    });
});

const bubblesOnScreen = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            bubbles.forEach((element) => element.classList.add("bubbles-showing"));
        } else {
            bubbles.forEach((element) => element.classList.remove("bubbles-showing"));
        }
    });
});

function observeElement(observedElement, observer) {
    observedElement.forEach((element) => observer.observe(element));
}

const hexagons = document.querySelectorAll(".hexagon-shape");
const hexagonOne = document.querySelectorAll(".hexagon-container1");
const hexagonTwo = document.querySelectorAll(".hexagon-container2");
const hexagonThree = document.querySelectorAll(".hexagon-container3");
const icons = document.querySelectorAll(".icon");
const text = document.querySelectorAll(".text-container");
const bubbles = document.querySelectorAll(".technology-bubble");
const skillMaster = document.querySelectorAll(".the-skill-master");

observeElement(hexagons, hexagonVisibility);
observeElement(icons, hidingIcons);
observeElement(text, showingText);
observeElement(hexagonOne, hexagonOneShows);
observeElement(hexagonTwo, hexagonTwoShows);
observeElement(hexagonThree, hexagonThreeShows);
observeElement(skillMaster, bubblesOnScreen);
