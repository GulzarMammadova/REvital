const btnPrev = document.querySelector('.btnPrev')
const btnNext = document.querySelector('.btnNext')
let currentSlide = 0;

//PARTNERSHIP START
let partnership = document.querySelector(".partnership-cont")

window.addEventListener("click", function func(e) {
    if (e.target.innerHTML == "Сотрудничество") {
        partnership.classList.remove("hidden")
        blur.classList.remove("hidden")
    }
})
//PARTNERSHIP END

//BRANDS SLIDER START
const brandsImg = document.querySelectorAll('.brands-image')
let latestSlide = brandsImg.length - 1;


btnNext.addEventListener("click", function () {
    if (currentSlide === latestSlide) {
        currentSlide = 0
    } else {
        currentSlide++
    }

      //100 % slide move
    brandsImg.forEach((slide, index) => {
        slide.style.transform = "translateX(" + 100 * (index - currentSlide) + "%)";
        // slide.style.transform = `translateX(${(index-currentSlide)*100}%)`
    })
})

btnPrev.addEventListener("click", function () {
    if (currentSlide === 0) {
        currentSlide = latestSlide
    } else {
        currentSlide--
    }

    //-100 % slide move
    brandsImg.forEach((slide, index) => {
    // slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    slide.style.transform = "translateX(" + 100 * (index - currentSlide) + "%)";
    // slide.style.transform = `translateX(${( index - currentSlide )*100}%)`  
});
})
//BRANDS SLIDER END

//COLLECTION START
function pageScroll() {
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,10);
}

//COLLECTION END