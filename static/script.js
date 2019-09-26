$(document).ready(function () {

    // nav animation
    let position = $(window).scrollTop();

    $(window).scroll(function () {
        let scroll = $(window).scrollTop();

        if (scroll > position) {
            $("#main-header").css({
                "transform": "translateY(-100px)",
                "transition": "all 0.5s ease"
            });
        } else {
            $("#main-header").css({
                "transform": "translateY(0)"
            });
        }
        position = scroll;
    });

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

    // function checkForVisibility2() {
    //     let aboutElement = document.querySelector(".scroll");
    //     if (isElementInViewport(aboutElement)) {
    //         if (aboutElement.dataset.hasAppeared == 'true') return;
    //         else {
    //             aboutElement.classList.add("aboutElementVisible");
    //             aboutElement.dataset.hasAppeared = 'true';
    //         }
    //     } else {
    //         aboutElement.classList.remove("aboutElementVisible");
    //         aboutElement.dataset.hasAppeared = 'false';
    //     }
    // }

    // if (window.addEventListener) {
    //     addEventListener('DOMContentLoaded', checkForVisibility2, false);
    //     addEventListener('load', checkForVisibility2, false);
    //     addEventListener('scroll', checkForVisibility2, false);
    // }

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

    // mobil dropdown function
    let dropDownElement = document.querySelector('#dropDownElement');

    dropDownElement.addEventListener('click', function (e) {
        e.preventDefault();
        let x = 'nav';
        let y = 'bars-icon';
        let z = 'cross-icon';

        let nav = document.getElementById(x);
        let icon1 = document.getElementById(y);
        let icon2 = document.getElementById(z);

        if (nav.style.display === "flex") {
            nav.style.display = "none";
            icon1.style.display = "flex";
            icon2.style.display = "none";
        } else {
            nav.style.display = "flex";
            icon1.style.display = "none";
            icon2.style.display = "flex";
        }
    });

});