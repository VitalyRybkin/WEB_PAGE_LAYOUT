const dotElems = Array.from(document.querySelectorAll(".comments__gallery_dot"));

let index = 0;

const commentCards = document.querySelectorAll(".comments__gallery_block");
const sliderLine = document.querySelector(".comments__gallery_container");

let cardWidth = commentCards[0].offsetWidth;

const galleryStyles = getComputedStyle(document.querySelector(".comments__gallery_container"));

function init() {
    const galleryWidth = document.querySelector(".comments__gallery").offsetWidth;

    commentCards[0].style.marginLeft = galleryWidth / 2 - parseInt(galleryStyles.paddingLeft) - cardWidth / 2 + "px";
    rollSlider();
}

dotElems.forEach((elem) => {
    elem.addEventListener("click", (e) => {
        index = dotElems.indexOf(e.target);
        rollSlider();

        dotElems.forEach((elem) => {
            if (elem.classList.contains("active")) {
                elem.classList.remove("active");

                commentCards.forEach((card) => {
                    card.classList.remove("shown");
                })
            }
        });

        commentCards[dotElems.indexOf(elem)].classList.add("shown");
        e.target.classList.add("active")
    })
})

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + (index * cardWidth + index * parseInt(galleryStyles.gap)) + 'px)';

}

window.addEventListener("resize", init);
init()