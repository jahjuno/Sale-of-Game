// snow area
var particles= document.getElementById("snow");

function main(){
    var np = document.documentElement.clientWidth / 70;
    particles.innerHTML = "";
    for (var i = 0; i < np; i++) {
        var w = document.documentElement.clientWidth;
        var h = document.documentElement.clientHeight;
        var rndw = Math.floor(Math.random() * w ) + 1;
        var rndh = Math.floor(Math.random() * h ) + 1;
        var widthpt = Math.floor(Math.random() * 8) + 3;
        var opty = Math.floor(Math.random() * 5) + 2;
        var anima = Math.floor(Math.random() * 12) + 8;

        var div = document.createElement("div");
        div.classList.add("snow");
        div.style.marginLeft = rndw+"px";
        div.style.marginTop = rndh+"px";
        div.style.width = widthpt+"px";
        div.style.height = widthpt+"px";
        div.style.background = "white";
        div.style.opacity = opty;
        div.style.animation = "move "+anima+"s ease-in infinite ";
        particles.appendChild(div);
    }
}
window.addEventListener("resize", main);
window.addEventListener("load", main);

// snow area end


$(function () {
    "use strict";
    /*mobile_menu*/
    function clone_main_menu() {
        var _clone_menu = $('#header .clone-main-menu');
        var _target = $('#box-mobile-menu .clone-main-menu');
        var _data_width = $('#header .main-navigation').data('width');
        if ($(window).innerWidth() <= _data_width) {
            if (_clone_menu.length > 0) {
                _clone_menu.each(function () {
                    $(this).appendTo('#box-mobile-menu .box-inner');
                });
            }
        }
        else {
            if (_target.length > 0) {
                _target.each(function () {
                    $(this).appendTo('#header .main-navigation');
                });
            }
        }

        function action_addClass() {
            $('body').addClass('box-mobile-menu-open');
            return false;
        }

        function action_removeClass() {
            $('body').removeClass('box-mobile-menu-open');
            return false;
        }
        $(".mobile-navigation").on('click', action_addClass);
        $("#box-mobile-menu .close-menu, .body-overlay").on('click', action_removeClass);
    }
    function box_mobile_menu() {
        var _content = $('#box-mobile-menu .clone-main-menu');
        if ($(window).innerWidth() <= 1024) {
            _content.each(function () {
                var t = $(this);
                t.addClass('active');
                $(this).find('.toggle-submenu').on('click', function () {
                    t.removeClass('active');
                    var text_next = $(this).prev().text();
                    $('#box-mobile-menu .box-title').html(text_next);
                    t.find('li').removeClass('mobile-active');
                    $(this).parent().addClass('mobile-active');
                    $(this).parent().closest('.submenu').css({
                        'position': 'static'
                        , 'height': '0'
                    , });
                    $('#box-mobile-menu #back-menu').css('display', 'block');
                })
            });
            $('#box-mobile-menu #back-menu').on('click', function () {
                _content.find('li.mobile-active').each(function () {
                    _content.find('li').removeClass('mobile-active');
                    if ($(this).parent().hasClass('main-menu')) {
                        _content.addClass('active');
                        $('#box-mobile-menu .box-title').html('MAIN MENU');
                        $('#box-mobile-menu #back-menu').css('display', 'none');
                    }
                    else {
                        _content.removeClass('active');
                        $(this).parent().parent().addClass('mobile-active');
                        $(this).parent().css({
                            'position': 'absolute'
                            , 'height': 'auto'
                        , });
                        var text_prev = $(this).parent().parent().children('a').text();
                        $('#box-mobile-menu .box-title').html(text_prev);
                    }
                })
            });
        }
        $('.mobile-navigation').on('click', function () {
            $('body').addClass('box-mobile-menu-open');
        });
        $('#box-mobile-menu .close-menu, .body-overlay').on('click', function () {
            $('body').removeClass('box-mobile-menu-open');
        });
    }
    $(window).on("resize", function () {
        clone_main_menu();
    });
    $(document).ready(function () {
        clone_main_menu();
        box_mobile_menu();
        kunka_google_maps();
    });
    $(window).on("load", function () {
        clone_main_menu();
        box_mobile_menu();
    });
    // Particles
    if ($('#particles-js').length > 0) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 100
                    , "density": {
                        "enable": true
                        , "value_area": 800
                    }
                }
                , "color": {
                    "value": "#fa434a"
                }
                , "shape": {
                    "type": "circle"
                    , "stroke": {
                        "width": 0
                        , "color": "#000000"
                    }
                    , "polygon": {
                        "nb_sides": 5
                    }
                    , "image": {
                        "src": "img/github.svg"
                        , "width": 100
                        , "height": 100
                    }
                }
                , "opacity": {
                    "value": 0.5
                    , "random": false
                    , "anim": {
                        "enable": false
                        , "speed": 1
                        , "opacity_min": 0.1
                        , "sync": false
                    }
                }
                , "size": {
                    "value": 3
                    , "random": true
                    , "anim": {
                        "enable": false
                        , "speed": 40
                        , "size_min": 0.1
                        , "sync": false
                    }
                }
                , "line_linked": {
                    "enable": true
                    , "distance": 150
                    , "color": "#fa434a"
                    , "opacity": 0.4
                    , "width": 1
                }
                , "move": {
                    "enable": true
                    , "speed": 6
                    , "direction": "none"
                    , "random": false
                    , "straight": false
                    , "out_mode": "out"
                    , "bounce": false
                    , "attract": {
                        "enable": false
                        , "rotateX": 600
                        , "rotateY": 1200
                    }
                }
            }
            , "interactivity": {
                "detect_on": "canvas"
                , "events": {
                    "onhover": {
                        "enable": true
                        , "mode": "grab"
                    }
                    , "onclick": {
                        "enable": true
                        , "mode": "push"
                    }
                    , "resize": true
                }
                , "modes": {
                    "grab": {
                        "distance": 140
                        , "line_linked": {
                            "opacity": 1
                        }
                    }
                    , "bubble": {
                        "distance": 400
                        , "size": 40
                        , "duration": 2
                        , "opacity": 8
                        , "speed": 3
                    }
                    , "repulse": {
                        "distance": 200
                        , "duration": 0.4
                    }
                    , "push": {
                        "particles_nb": 4
                    }
                    , "remove": {
                        "particles_nb": 2
                    }
                }
            }
            , "retina_detect": true
        });
    }
    var wind = $(window);
    // scroll
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'swing', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -70 // offste (in px) for fixed top navigation
    });
    // navbar scrolling background
    wind.on("scroll", function () {
        var bodyScroll = wind.scrollTop()
            , navbar = $(".navbar")
            , logo = $(".navbar .logo> img");
        if (bodyScroll > 100) {
            navbar.addClass("nav-scroll");
            logo.attr('src', 'assets/img/logo-dark.png');
        }
        else {
            navbar.removeClass("nav-scroll");
            logo.attr('src', 'assets/img/logo-light.png');
        }
    });
    // close navbar-collapse when a  clicked
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    // Progress Bar
    wind.on('scroll', function () {
        $(".skill-progress .progres").each(function () {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if (bottom_of_window > bottom_of_object) {
                $(this).css({
                    width: myVal
                });
            }
        });
    });
    // Sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function (indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
    // Testimonials owlCarousel
    $('.carousel-single.owl-carousel').owlCarousel({
        items: 1
        , loop: true
        , margin: 0
        , mouseDrag: false
        , autoplay: true
        , smartSpeed: 500
    });
    // Testimonials owlCarousel
    $('.testimonials .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: true
        , dots: true
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 3
            }
        }
    });
    // magnificPopup
    $('.gallery').magnificPopup({
        delegate: '.popimg'
        , type: 'image'
        , gallery: {
            enabled: true
        }
    });
});
// === window When Loading === //
$(window).on("load", function () {
    var wind = $(window);
    // Preloader
    $(".loading").fadeOut(500);
    // stellar
    wind.stellar();
    // isotope
    $('.gallery').isotope({
        // options
        itemSelector: '.items'
        , masonry: {
            columnWidth: '.isotope-sizer'
        }
    , });
    var $gallery = $('.gallery').isotope({
        // options
    });
    // filter items on button click
    $('.filtering').on('click', 'span', function () {
        var filterValue = $(this).attr('data-filter');
        $gallery.isotope({
            filter: filterValue
        });
    });
    $('.filtering').on('click', 'span', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // contact form validator
    $('#contact-form').validator();
    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";
            $.ajax({
                type: "POST"
                , url: url
                , data: $(this).serialize()
                , success: function (data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });
});
// Slider 
$(document).ready(function () {
    var owl = $('.header .owl-carousel');
    // Slider owlCarousel
    $('.slider .owl-carousel').owlCarousel({
        items: 1
        , loop: true
        , margin: 0
        , autoplay: true
        , smartSpeed: 500
    });
    // Slider owlCarousel
    $('.slider-fade .owl-carousel').owlCarousel({
        items: 1
        , loop: true
        , margin: 0
        , autoplay: false
        , smartSpeed: 500
    });
    owl.on('changed.owl.carousel', function (event) {
        var item = event.item.index - 2; // Position of the current item
    });
});

jQuery(document).ready(function () {
        // Init AOS Animate On Scroll Library
        AOS.init({
            duration: 1200,
            startEvent: 'DOMContentLoaded',
            once: true,
        });
    })