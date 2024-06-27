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
            bubbles.forEach((element) => element.classList.remove("hide-bubbles"));
        } else {
            bubbles.forEach((element) => element.classList.add("hide-bubbles"));
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

function generateTimer() {
    let newTimer = Math.random()*4;
    newTimer += "s"
    return newTimer
}

function getThatMatrix(elementToCatch) {
    console.log("We started working!")
    const elementMatrix = window.getComputedStyle(elementToCatch).transform;
    const matrix = elementMatrix.match(/matrix.*\((.+)\)/);
    
    if (matrix) {
        const value = matrix[1].split(", ");
        const coordX = parseFloat(value[4]);
        const coordY = parseFloat(value[5]);
        
        return { coordX, coordY };
    }
    
    return "If you see this message, let me tell you that it didn't work... poor you :')"
}

function generateKeyframe(theElement) {
    const coordinates = getThatMatrix(theElement);
    console.log("Now its time to generate the keyframe");
    const bubbleKeyframe = `
        @keyframes bubbles {
            0% {
                transform: translate(${coordinates.coordX}%, ${coordinates.coordY}%) scale(1);
            }

            25% {
                transform: translate(${coordinates.coordX}%, ${coordinates.coordY}%) scale(1.1);
            }

            75% {
                transform: translate(${coordinates.coordX}%, ${coordinates.coordY}%) scale(0.95);
            }

            100% {
                transform: translate(${coordinates.coordX}%, ${coordinates.coordY}%) scale(1);
            }
        }`;
    console.log(`Done, the keyframe is ${bubbleKeyframe}`);
    return bubbleKeyframe;
}

bubbles.forEach((element) => {
    generateKeyframe(element);
});