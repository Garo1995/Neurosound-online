

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const menuBg = document.querySelector('.menu-bg');
const headerBody = document.querySelector('.header-body');



document.addEventListener('DOMContentLoaded', function () {
    burger.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    menuBg.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    function openMenu() {
        menu.classList.add('active');
        burger.classList.add('active');
        header.classList.add('active');
        menuBg.classList.add('active');
        headerBody.classList.add('active');


    }

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');
        header.classList.remove('active');
        menuBg.classList.remove('active');
        headerBody.classList.remove('active');

    }


});

window.addEventListener('scroll', function() {
    const headerTop = document.querySelector('.header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});






document.addEventListener("DOMContentLoaded", function () {
    let elem = document.querySelector('.reviews-body');
    let msnry = new Masonry( elem, {
        itemSelector: '.reviews-item',
        columnWidth: 20,
        gutter: 20,
        percentPosition: true,

    });



});

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.reviews-btn');
    const reviewsList = document.querySelector('.reviews-list');

    button.addEventListener('click', function() {
        reviewsList.classList.toggle('active');
    });
});



function toggleActiveState(item) {
    const allItems = document.querySelectorAll('.often-asks-item');

    allItems.forEach(otherItem => {
        if (otherItem !== item) {
            otherItem.classList.remove('active');
        }
    });

    item.classList.toggle('active');
}

document.querySelectorAll('.often-asks-item').forEach(item => {
    item.addEventListener('click', () => toggleActiveState(item));
    const icon = item.querySelector('.asks-list-icon');
    icon.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleActiveState(item);
    });
});


document.querySelectorAll('.range-input').forEach((sliderEl) => {
    const valueDisplay = document.querySelector(sliderEl.getAttribute('data-value'));

    updateSlider(sliderEl, valueDisplay);

    sliderEl.addEventListener('input', () => updateSlider(sliderEl, valueDisplay));
});

function updateSlider(slider, valueDisplay) {
    const tempSliderValue = slider.value;
    valueDisplay.textContent = tempSliderValue;

    const progress = (tempSliderValue / slider.max) * 100;


    slider.style.background = `linear-gradient(to right, #8A3EDF ${progress}%, #ccc ${progress}%)`;
}


document.querySelectorAll('.range').forEach(block => {


    function rangeEnter() {
        if (block) {
            block.classList.add('active');
        }

    }

    function rangeEnd() {


    }

    block.addEventListener('mouseenter', rangeEnter);
    block.addEventListener('mouseleave', rangeEnd);

});



const scrollbar = Scrollbar.init(document.querySelector(".wrapper"), {
    damping: 0.08,
});
