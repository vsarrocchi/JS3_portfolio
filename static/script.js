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

function elementDistanceFromBottomOfViewport(el) {
    let rect = el.getBoundingClientRect();
    return window.innerHeight - rect.top;
}

// nav active
// function addActiveLink() {
//     let element = document.querySelectorAll('.nav');
//     let link = document.querySelectorAll('.activeNav');
//     for (let i = 0; i < element.length; i++) {
//         console.log(element[i]);
//         if (isElementInViewport(element[i])) {
//             link[i].setAttribute("class", "active");
//         }
//     }
// }

// function isElementInViewport(el) {
//     let rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// if (window.addEventListener) {
//     addEventListener('DOMContentLoaded', addActiveLink, false);
//     addEventListener('load', addActiveLink, false);
//     addEventListener('scroll', addActiveLink, false);
// }

// $(function () {
//     $('.activeNav').click(function () {
//         $('.activeNav').css('text-decoration', 'none');
//         $(this).css('text-decoration', 'underline');
//     });
// });

// $(document).ready(function () {
//     $('.activeNav').bind('click', function (e) {
//         e.preventDefault(); // prevent hard jump, the default behavior

//         var target = $(this).attr("to"); // Set the target as variable

//         // perform animated scrolling by getting top-position of target-element and set it as scroll target
//         $('html, body').stop().animate({
//             scrollTop: $(target).offset().top
//         }, 600, function () {
//             location.hash = target; //attach the hash (#jumptarget) to the pageurl
//         });

//         return false;
//     });
// });

// $(window).scroll(function () {
//     var scrollDistance = $(window).scrollTop();

//     // Show/hide menu on scroll
//     //if (scrollDistance >= 850) {
//     //		$('nav').fadeIn("fast");
//     //} else {
//     //		$('nav').fadeOut("fast");
//     //}

//     // Assign active class to nav links while scolling
//     $('.nav').each(function (i) {
//         if ($(this).position().top <= scrollDistance) {
//             $('.navigation a.active').removeClass('active');
//             $('.navigation a').eq(i).addClass('active');
//         }
//     });
// }).scroll();

// $(document).ready(function () {
//     $(document).on("scroll", onScroll);

//     function onScroll(event) {
//         var scrollPos = $(document).scrollTop();
//         $('a').each(function () {
//             var currLink = $(this);
//             var refElement = $(currLink.attr("href"));
//             if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//                 $('a').removeClass("active");
//                 currLink.addClass("active");
//             } else {
//                 currLink.removeClass("active");
//             }
//         });
//     }
// })

const svgPath = document.querySelectorAll('.path');

const svgText = anime({
    targets: svgPath,
    loop: true,
    direction: 'alternate',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 700,
    delay: (el, i) => { return i * 500 }
});