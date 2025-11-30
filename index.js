// menu toggle

// open & close buttons
$("header .menu-bar, header .close-menu-bar").click(function (e) {
    e.stopPropagation(); // escape from window click
    $("header .menu").toggleClass("show");
});

// window click hide menu
$(window).click(function (e) {

    // agar menub clicked ignore
    if ($(e.target).closest("header .menu").length) return;

    // if menu-bar clicked ignore
    if ($(e.target).closest("header .menu-bar").length) return;

    // otherwise remove menu 
    $("header .menu").removeClass("show");
});

const box = $(".coffee-card-container");
const scrollAmount = 260;

$(".right-btn").click(function () {
    box.animate({
        scrollLeft: box.scrollLeft() + scrollAmount
    }, 1000);
});

$(".left-btn").click(function () {
    box.animate({
        scrollLeft: box.scrollLeft() - scrollAmount
    }, 1000);
});


// wrap-4

$(".gallery-img-box").mouseover(function () {
    // active current
    $(this).find(".gallery-box-layer").addClass("active");

    // remove active from others
    $(this).siblings().find(".gallery-box-layer").removeClass("active");
});


// ***************** wrap-5 ***************************
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// ***************** wrap-6 contact  *****************

$(".wrap-6 form").submit(function (e) {
    e.preventDefault();
    const userName = $(".wrap-6 input[type='text']").val();
    alert(`Hello ${userName}, We'll contact you soon!`);
    $(".wrap-6 input[type='text'], input[type='email'], input[type='number'], textarea").val("");
    $(".wrap-6 input[type='text']").focus();
});


// ************ footer *************

$(window).scroll(function () {
    const height = $(window).scrollTop();
    if (height > 200) {
        $("footer #go-top").addClass("show-go-top");
    } else {
        $("footer #go-top").removeClass("show-go-top");
    }
});