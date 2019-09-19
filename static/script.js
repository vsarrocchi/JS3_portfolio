$(document).ready(function () {
    let position = $(window).scrollTop();

    $(window).scroll(function () {
        let scroll = $(window).scrollTop();

        if (scroll > position) {
            // console.log('scrollDown');
            $("#main-header").css({
                "opacity": "0",
                "transform": "translateY(-100px)",
                "transition": "all 0.7s ease"
            });
        } else {
            // console.log('scrollUp'); 
            $("#main-header").css({
                "opacity": "1",
                "transform": "translateY(0)"
            });
        }
        position = scroll;
    });
});

// function showHeader() {
//     let el = document.querySelector("#main-header");
//     console.log(el);

// }

// if (window.addEventListener) {
//     addEventListener('DOMContentLoaded', showHeader, false);
//     addEventListener('load', showHeader, false);
//     addEventListener('scroll', showHeader, false);
// }

// function parallax() {
//     let el = document.querySelectorAll(".parallax")
//     for (let i = 0; i < el.length; i++) {
//       let direction = el[i].getAttribute("data-direction");
//       let mult = el[i].getAttribute("data-mult");
//       let distance = elementDistanceFromBottomOfViewport(el[i]);
//       /* el[i].style.transform = `translate ${ + direction + distance * mult} px)`; */
//       el[i].style.transform = "translate" + direction + distance * mult + "px)";
//     }
//   }

//   if (window.addEventListener) {
//     addEventListener('DOMContentLoaded', parallax, false);
//     addEventListener('load', parallax, false);
//     addEventListener('scroll', parallax, false);
//   }

//   // DistanceFromBottom
//   function elementDistanceFromBottomOfViewport(el) {
//     let rect = el.getBoundingClientRect();
//     return window.innerHeight - rect.top;
//   }