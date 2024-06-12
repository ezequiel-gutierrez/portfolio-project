const hexagonVisibility =  new IntersectionObserver((entries) => {
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

const hexagons = document.querySelectorAll(".hexagon-shape");
const icons = document.querySelectorAll(".icon");
const text = document.querySelectorAll(".text-container");

hexagons.forEach((element) => hexagonVisibility.observe(element));
icons.forEach((element) => hidingIcons.observe(element));
text.forEach((element) =>showingText.observe(element));