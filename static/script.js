// navigering animation
$(document).ready(function () {
    let position = $(window).scrollTop();

    $(window).scroll(function () {
        let scroll = $(window).scrollTop();

        if (scroll > position) {
            // console.log('scrollDown');
            $("#main-header").css({
                "transform": "translateY(-100px)",
                "transition": "all 0.5s ease"
            });
        } else {
            // console.log('scrollUp'); 
            $("#main-header").css({
                "transform": "translateY(0)"
            });
        }
        position = scroll;
    });
});

// parallax function
function parallax() {
    let el = document.querySelectorAll(".parallax")
    for (let i = 0; i < el.length; i++) {
        let direction = el[i].getAttribute("data-direction");
        let mult = el[i].getAttribute("data-mult");
        let distance = elementDistanceFromBottomOfViewport(el[i]);
        el[i].style.transform = "translate" + direction + distance * mult + "px)";
    }
}

if (window.addEventListener) {
    addEventListener('DOMContentLoaded', parallax, false);
    addEventListener('load', parallax, false);
    addEventListener('scroll', parallax, false);
}

// DistanceFromBottom
function elementDistanceFromBottomOfViewport(el) {
    let rect = el.getBoundingClientRect();
    return window.innerHeight - rect.top;
}


