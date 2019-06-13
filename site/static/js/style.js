$(document).ready(function () {
    $('.navbar-toggler ').on('click', function () {
        if ($('navbar-collapse').find('show')) {
            $('body').css('overflow-y', 'hidden');
        }
    });

    $('.g-btn--close-navbar').on('click', function () {
        $('.navbar-collapse').collapse('hide');
        if ($('navbar-collapse').find('show')) {
            $('body').css('overflow-y', 'inherit');
        }
    });
    //Slide trong trang phan mem

    $('.sys_order_imgslide').css('display','none');
    $('.sys_order_imgslide:first-child ').css('display','block');
    $('.sys_order_listslide li:first-child').addClass('active');
    $('.sys_order_listslide li').click(function () {
        $('.sys_order_listslide li').removeClass('active');
        $(this).addClass('active');
        systitle = $(this).attr('data-systitle');
        $('.sys_order_imgslide').each(function () {
            sysimg=$(this).attr('data-sysimg');
            if(sysimg==systitle){
                $('.sys_order_imgslide').css('display','none');
                $(this).fadeIn();
            }
        });
    });
    //End
    $(function () {
        $('#gcarousel-main.slide').carousel({
            interval: 4000,
            pause: "hover"
        });

        $('input').focus(function () {
            $("#gcarousel-main").carousel('pause');
        }).blur(function () {
            $("#gcarousel-main").carousel('cycle');
        });
    });
    $('#gcarousel-main').slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
        cssEase: 'linear',
    });
    $('.gslide-customer').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }
        ]
    });

    $('.list-post-news').slick({
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }
        ]
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function() {
        $($(this).attr('href')).find('.post-index-news').slick({
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                    }
                }
            ]
        })
    }).first().trigger('shown.bs.tab');

    $('.title-question').click(function (e) {
        e.preventDefault();
        $(this).parents('.question-detail').toggleClass('active');
    });

    $(window).scroll(function () {
        scroll = $(window).scrollTop();
        if (scroll > 90) {
            $('.gnavbar').addClass('fixed');
            $('.gnavbar').fadeIn("slow").addClass('active');
        } else {
            $('.gnavbar').removeClass('active');
            $('.gnavbar').removeClass('fixed');
        }
    });
})
;