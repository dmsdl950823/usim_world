	function ad_li_play() {
	    var ad_li = $('.ad_li li.on').index();
	    ad_li++
	    if (ad_li > 1) {
	        ad_li = 0
	    }
	    //		console.log(ad_li)
	    //		$('.ad_wrap li').stop().show();

	    //		
	    $('.ad_li li.on').removeClass('on')
	    $('.ad_li li').eq(ad_li).addClass('on')

	    //		$('.ad_wrap li').hide();
	    $('.ad_wrap li').stop().fadeOut(1500);
	    $('.ad_wrap li').eq(ad_li).fadeIn(800);
	}


	function menu() {


	    //웹 메뉴
	    $('.tab_gnb').hover(function () {
	        // $('.shop_innermenu').css('display', 'block');
	        $('.shop_innermenu').fadeIn(100)

	    })
	    $('.shop_innermenu').mouseleave(function () {
	        // $('.shop_innermenu').css('display', 'none');
	        $('.shop_back').css('display', 'none');
	        $('.shop_innermenu').fadeOut(100)
	    })

	    //1024, 768 메뉴
	    $('.hammenu').click(function () {
	        if ($(this).hasClass('on') == false) {
	            $('.shop_innermenu').css('display', 'block');
	            $(this).addClass('on');
	            $('.shop_back').css('display', 'block');
	        } else {
	            $('.shop_innermenu').css('display', 'none');
	            $(this).removeClass('on');
	            $('.shop_back').css('display', 'none');
	        }
	    })
	    $('.shop_innermenu li').click(function () {
	        $('.shop_innermenu').css('display', 'none');
	        $(this).removeClass('on');
	        $('.shop_back').css('display', 'none');
	    })

	    //640, 360 메뉴
	    $('.t_hammenu').click(function () {
	        if ($(this).hasClass('on') == false) {
	            $('.shop_innermenu').css('display', 'block');
	            $(this).addClass('on');
	            $('.shop_back').css('display', 'block');
	        } else {
	            $('.shop_innermenu').css('display', 'none');
	            $(this).removeClass('on');
	            $('.shop_back').css('display', 'none');
	        }
	    })
	    $('.shop_innermenu li').click(function () {
	        $('.shop_innermenu').css('display', 'none');
	        $(this).removeClass('on');
	        $('.shop_back').css('display', 'none');
	    })



	    //640,360 검색버튼
	    $('.mo_searchexeWrap').on('click', function () {
	        if ($(this).children('p').hasClass('mo_search_close') == false) {
	            $('.search_wrap').css('display', 'block');
	            $(this).children('p').removeClass('mo_searchexe');
	            $(this).children('p').addClass('mo_search_close');
	        } else {
	            $(this).children('p').removeClass('mo_search_close');
	            $(this).children('p').addClass('mo_searchexe');
	            $('.search_wrap').css('display', 'none');
	        }
	    })
	}

	function searchway() {
	    $('.search_sel').mouseenter(function () {
	        $('.searchwayUl').css('display', 'block');
	        $('.search_sel').addClass('on');
	    })

	    $('.searchwayUl').mouseleave(function () {
	        $('.searchwayUl').css('display', 'none');
	        $('.search_sel').removeClass('on');
	    })

	    $('.searchwayUl > li').on('click', function () {
	        var A_text = $(this).children().text();
	        $('.search_sel > a').text('');
	        $('.search_sel > a').text(A_text);
	        $('.searchwayUl').css('display', 'none');
	        $('.search_sel').removeClass('on');
	    })
	}

	function sidescroll() {
	    $(window).scroll(function () {
	        var winscroll = $(window).scrollTop();
	        var cont_top = $('#contents').offset().top;
	        //		console.log(cont_top)
	        	    console.log(Math.floor(winscroll) + 'px')

	        if (winscroll === 0 || winscroll <= 230) {
	            $('.sidemenu').css('top', 0)
	        } else if (winscroll > 230 && winscroll < 1170) {
	            $('.sidemenu').css('top', Math.floor(winscroll) - 200 + 'px')
	        } else {
	            $('.sidemenu').css('top', 970 + 'px')
	        }


	    })
	}

	//사이드메뉴
	function sidemen() {
	    $('.nomorebtn').click(function () {
	        $('.sidemenu > ul li').hide();
	        $('.morebtn').css({
	            'width': '50px',
	            'height': '50px',
	            'right': 0,
	            'line-height': '50px'
	        })
	        $('.sidemenu').css({
	            'width': '0px',
	            'height': '0px'
	        })
	        $('.more_show').hide();
	        $('.more_hide').show();
	        $(this).hide();
	    })

	    $('.more_hide').click(function () {
	        $('.morebtn').show();
	        $('.sidemenu').css({
	            'width': '104px',
	            'height': '560px'
	        })
	        $('.morebtn').css({
	            'width': '100%',
	            'height': '104px',
	            'right': '0',
	            'line-height': '104px'
	        })
	        $('.more_show').css('display', 'block');
	        $('.more_hide').hide();
	        $('.sidemenu > ul li').show();
	        $('.sidemenu > ul li:eq(5)').hide();




	        $('.nomorebtn').show();
	    })

	    $('.topbtn').on('click', function (e) {
	        e.preventDefault();
	        $('html,body').animate({
	            scrollTop: 0
	        })
	    })
	}

	//광고



	$(document).ready(function () {
	    var st;
	    menu();
	    searchway();
	    sidescroll();
	    sidemen();
	    st = setInterval(ad_li_play, 5000)
	})
