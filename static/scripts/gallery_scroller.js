let index;

let galleryStyles;
let cardWidth;

function init(block) {
    index = 0;
    const dotElems = Array.from(document.querySelectorAll(`.${block} .gallery_dot`));
    const commentCards = document.querySelectorAll(`.${block} .gallery_block`);
    const cardWidth = commentCards[0].offsetWidth;
    const sliderLine = document.querySelector(`.${block} .gallery_container`);
    galleryStyles = getComputedStyle(sliderLine);

    const galleryWidth = document.querySelector(`.${block} .gallery`).offsetWidth;
    commentCards[0].style.marginLeft = galleryWidth / 2 - parseInt(galleryStyles.paddingLeft) - cardWidth / 2 + "px";
    rollSlider(sliderLine, cardWidth);

    dotElems.forEach((elem) => {
        elem.addEventListener("click", (e) => {
            index = dotElems.indexOf(e.target);
            rollSlider(sliderLine, cardWidth);

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
}


function rollSlider(sliderLine, cardWidth) {
    sliderLine.style.transform = 'translate(-' + (index * cardWidth + index * parseInt(galleryStyles.gap)) + 'px)';
}

window.addEventListener("resize", init);
init('comments')
init('news')
