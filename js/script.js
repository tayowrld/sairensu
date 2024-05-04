const scrollErrorModal = document.getElementById("scroll_error");
let lastScrollTime = Date.now();
let lastScrollTop = window.pageYOffset;

window.addEventListener("scroll", () => { // обработка модального окна при быстром скролле
    const currentScrollTime = Date.now();
    const currentScrollTop = window.pageYOffset;
    const timeDifference = currentScrollTime - lastScrollTime;
    const scrollDifference = Math.abs(currentScrollTop - lastScrollTop);

    const scrollSpeed = scrollDifference / timeDifference;

    if (scrollSpeed > 6) { // здесь менять значение
        /* 
        ОСТАЛЬНОЕ БЛЯДЬ НЕ МЕНЯТЬ!!! 
        ХУЙ КАК РАБОТАЕТ! 
        */
        if (scrollErrorModal.style.display != "flex") {
            scrollErrorModal.style.display = "flex";
            setTimeout(() => scrollErrorModal.style.opacity = "1", 200);

            function error_timeout() {
                setTimeout(() => scrollErrorModal.style.display = "none", 1000);
                scrollErrorModal.style.opacity = "0";
            }
            setTimeout(() => error_timeout(), 3000);
        }
    }

    lastScrollTime = currentScrollTime;
    lastScrollTop = currentScrollTop;

    const block3 = document.getElementById('block-3');
    const split1 = document.getElementById('bl3_split_1');
    const split2 = document.getElementById('bl3_split_2');

    const block3Rect = block3.getBoundingClientRect();

    // Активация скролла для split_1
    if (block3Rect.top < window.innerHeight && block3Rect.bottom > 0) {
        console.log(block3Rect.top, window.innerHeight);
        const scrollPerc = (window.innerHeight - block3Rect.top) / (window.innerHeight + block3Rect.height);
        split1.style.backgroundPosition = `0 ${-scrollPerc*1.2 * 100}%`;
    }

    // Активация скролла для split_2
    if (block3Rect.top < window.innerHeight && block3Rect.bottom > 0) {
        const scrollPerc = (window.innerHeight - block3Rect.top) / (window.innerHeight + block3Rect.height);
        split2.style.backgroundPosition = `0 ${scrollPerc * 0.9 * 100}%`;
    }
});


document.addEventListener('scroll', function() { // обработка анимаций по скроллу

    const block_1 = document.getElementById('block-1');
    const block_2 = document.getElementById('block-2');

    const block_2_el_1 = document.getElementById('bl2_anim_el1');
    const block_2_el_2 = document.getElementById('bl2_anim_el2');
    const block_2_el_3 = document.getElementById('bl2_anim_el3');
    const block_2_el_4 = document.getElementById('bl2_anim_el4');
    const block_2_el_5 = document.getElementById('bl2_anim_el5');
    const block_2_el_6 = document.getElementById('bl2_anim_el6');
    const block_2_el_7 = document.getElementById('bl2_anim_el7');
    const block_2_el_8 = document.getElementById('bl2_anim_el8');
    const block_2_el_9 = document.getElementById('bl2_anim_el9');
    const block_2_el_10 = document.getElementById('bl2_anim_el10');
    const block_2_el_11 = document.getElementById('bl2_anim_el11');
    const skills = document.querySelectorAll('.skill-bar');


    function block2_animations() {
        let duration = 0.8;
        if (scrollPercent > 0.8) {
            block_2.style.animation = 'block_2_anim_in ' + duration + 's forwards';
            block_2_el_1.style.animation = 'block_2_anim_in ' + duration + 's forwards';
            block_2_el_2.style.animation = 'block_2_anim_in ' + duration + 's forwards';
            block_2_el_3.style.animation = 'block_2_anim_in ' + duration + 's forwards';
            block_2_el_4.style.animation = 'block_2_anim_in ' + duration + 's forwards';
            block_2_el_5.style.animation = 'block_2_anim_in ' + duration + 's forwards';
            block_2_el_6.style.animation = 'block_2_anim_in ' + duration + 's forwards';
            block_2_el_7.style.animation = 'block_2_anim_in ' + duration + 's forwards';
            block_2_el_8.style.animation = 'block_2_anim_in ' + duration + 's forwards';
            block_2_el_9.style.animation = 'block_2_anim_in ' + duration + 's forwards';
            block_2_el_10.style.animation = 'block_2_anim_in ' + duration + 's forwards';
            block_2_el_11.style.animation = 'block_2_anim_in ' + duration + 's forwards';
            skills.forEach(function(skill) {
                skill.classList.add('active');
            });
        } else {
            block_2.style.animation = 'block_2_anim_out ' + duration + 's forwards';
            block_2_el_1.style.animation = 'block_2_anim_out ' + duration + 's forwards';
            block_2_el_2.style.animation = 'block_2_anim_out ' + duration + 's forwards';
            block_2_el_3.style.animation = 'block_2_anim_out ' + duration + 's forwards';
            block_2_el_4.style.animation = 'block_2_anim_out ' + duration + 's forwards';
            block_2_el_5.style.animation = 'block_2_anim_out ' + duration + 's forwards';
            block_2_el_6.style.animation = 'block_2_anim_out ' + duration + 's forwards';
            block_2_el_7.style.animation = 'block_2_anim_out ' + duration + 's forwards';
            block_2_el_8.style.animation = 'block_2_anim_out ' + duration + 's forwards';
            block_2_el_9.style.animation = 'block_2_anim_out ' + duration + 's forwards';
            block_2_el_10.style.animation = 'block_2_anim_out ' + duration + 's forwards';
            block_2_el_11.style.animation = 'block_2_anim_out ' + duration + 's forwards';
            skills.forEach(function(skill) {
                skill.classList.remove('active');
            });
        }
    }

    const windowHeight = window.innerHeight;
    const windowCenter = window.scrollY + windowHeight / 2;

    const block_1_rect = block_1.getBoundingClientRect();
    const block_2_rect = block_2.getBoundingClientRect();

    const zoneStart_1 = window.scrollY + block_1_rect.bottom - block_1.offsetHeight * 0.25;

    const zoneStart_2 = window.scrollY + block_2_rect.top + block_2.offsetHeight * 0.25;

    if (windowCenter > zoneStart_1 && windowCenter < zoneStart_2) {
        let zoneHeight = zoneStart_2 - zoneStart_1;
        let scrolledInZone = windowCenter - zoneStart_1;
        scrollPercent = 0;
        scrollPercent = scrolledInZone / zoneHeight;
        if (scrollPercent > 0.1 & scrollPercent <= 0.8) {
            block_1.style.opacity = 0;
        } else if (scrollPercent > 0.8) {
            block_1.style.opacity = 0;
        } else {
            block_1.style.opacity = 1;
        }
        block2_animations(scrollPercent);
    }
});