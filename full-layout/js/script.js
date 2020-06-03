new Vivus('svg1', {
    duration: 200, animTimingFunction: Vivus.EASE
});
new Vivus('svg2', {
    duration: 200, animTimingFunction: Vivus.EASE
});
new Vivus('svg3', {
    duration: 200, animTimingFunction: Vivus.EASE
});
new Vivus('svg4', {
    duration: 200, animTimingFunction: Vivus.EASE
});


window.onscroll = () => {

    if (window.scrollY > 200) {
        document.querySelector('.menu').classList.add('solid')
    }
    else {
        document.querySelector('.menu').classList.remove('solid')
    }
}