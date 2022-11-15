$(function(){
    $('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
    // navigation: true,
    // navigationPosition: 'right',
    navigationTooltips: ['main', 'aboutme','portfolio','contact'],
    anchors:['main', 'aboutme', 'portfolio','contact'],
    // menu: '#right_nav',
    slidesNavigation: true
        
	});
  // $('.btn_menu').click(function(){
  //   $('.full_menu').addClass('on');
  //   $('.full_menu_inner').addClass('on');
  // });
  // $('.btn_close').click(function(){
  //   $('.full_menu').removeClass('on');
  //   $('.full_menu_inner').removeClass('on');
  // });
  $('.btn_menu').click(function(){
    $('.full_menu').fadeIn(400);
    $('.full_menu').css({'right':0});
    $('.full_menu_inner').animate({'right':0},400);
});
$('.btn_close').click(function(){
    $('.full_menu').fadeOut(400);
    $('.full_menu').css({'right':'-100%'});
    $('.full_menu_inner').animate({'right':'-100%'},400);
});
  $('.slide').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    fade: true,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    // 페이지버튼나오게하는명령
    dots: true
  });
});