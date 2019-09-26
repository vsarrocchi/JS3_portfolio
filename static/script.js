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

// home title animation
var textWrapper = document.querySelector('#ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
        loop: false
    })
    .add({
        targets: '#ml3 .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 50 * (i + 1)
    });

function checkVisibility() {
    let homeSection = document.querySelector("#home");
    if (isElementInViewport(homeSection)) {
        if (homeSection.dataset.hasAppeared == 'true') return;
        else {
            let textWrapper = document.querySelector('#ml3');
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

            anime.timeline({
                    loop: false
                })
                .add({
                    targets: '#ml3 .letter',
                    opacity: [0, 1],
                    easing: "easeInOutQuad",
                    duration: 2250,
                    delay: (el, i) => 50 * (i + 1)
                });

            homeSection.dataset.hasAppeared = 'true';
        }
    } else {
        homeSection.dataset.hasAppeared = 'false';
    }
}

if (window.addEventListener) {
    addEventListener('DOMContentLoaded', checkVisibility, false);
    addEventListener('load', checkVisibility, false);
    addEventListener('scroll', checkVisibility, false);
}

function checkForVisibility2() {
    let aboutElement = document.querySelector(".scroll");
    if (isElementInViewport(aboutElement)) {
        if (aboutElement.dataset.hasAppeared == 'true') return;
        else {
            aboutElement.classList.add("aboutElementVisible");
            aboutElement.dataset.hasAppeared = 'true';
        }
    } else {
        aboutElement.classList.remove("aboutElementVisible");
        aboutElement.dataset.hasAppeared = 'false';
    }
}

if (window.addEventListener) {
    addEventListener('DOMContentLoaded', checkForVisibility2, false);
    addEventListener('load', checkForVisibility2, false);
    addEventListener('scroll', checkForVisibility2, false);
}

function checkForVisibility3() {
    let contactSection = document.querySelector('.ml6 .letters');
    if (isElementInViewport(contactSection)) {
        if (contactSection.dataset.hasAppeared == 'true') return;
        else {
            let textWrapper = document.querySelector('.ml6 .letters');
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

            anime.timeline({
                    loop: false
                })
                .add({
                    targets: '.ml6 .letter',
                    translateY: ["1.1em", 0],
                    translateZ: 0,
                    duration: 750,
                    delay: (el, i) => 50 * i
                })

            contactSection.dataset.hasAppeared = 'true';
        }
    } else {
        contactSection.dataset.hasAppeared = 'false';
    }
}

if (window.addEventListener) {
    addEventListener('DOMContentLoaded', checkForVisibility3, false);
    addEventListener('load', checkForVisibility3, false);
    addEventListener('scroll', checkForVisibility3, false);
}

// skills animation visibility
// function checkForVisibility4() {
//     let skillsElement = document.querySelector("#skillsTitle");
//     // console.log(isElementInViewport(skillsElement));
//     if (isElementInViewport(skillsElement)) {
//         if (skillsElement.dataset.hasAppeared == 'true') return;
//         else {
//             // skillsElement.classList.add("skillsElementVisible");
//             skillsElement.dataset.hasAppeared = 'true';
//         }
//     } else {
//         // skillsElement.classList.remove("skillsElementVisible");
//         skillsElement.dataset.hasAppeared = 'false';
//     }
// }

// if (window.addEventListener) {
//     addEventListener('DOMContentLoaded', checkForVisibility4, false);
//     addEventListener('load', checkForVisibility4, false);
//     addEventListener('scroll', checkForVisibility4, false);
// }


// element in viewport function
function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

});
//---------------------------------------------------------------------------------------------------

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

// const svgPath = document.querySelectorAll('.path');

// const svgText = anime({
//     targets: svgPath,
//     loop: true,
//     direction: 'alternate',
//     strokeDashoffset: [anime.setDashoffset, 0],
//     easing: 'easeInOutSine',
//     duration: 700,
//     delay: (el, i) => { return i * 500 }
// });