var slideIndex = 0;
slideshow();

function slideshow() {
    var i;
    var x = document.getElementsByClassName("mainImg");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    x[slideIndex - 1].style.display = "block";
    setTimeout(slideshow, 2000);
}

function bigImg(x) {
    x.style.height = "90px";
    x.style.width = "90px";
}

function normalImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
}