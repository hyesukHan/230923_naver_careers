//header sub메뉴 나오게 컨트롤

$('.header-right .gnb-list .item').hover(function(){
  if($(this).find('.sub').length){
    $('.header').addClass('on');
    $(this).find('.sub').addClass('on');
  }
},function(){
  $('.header,.header-right .sub').removeClass('on');
  
})
   
   var swiper1 = new Swiper(".sc-visual .swiper", {
        loop : true,
        speed:700,
        touchRatio: 0,
        autoplay: {
            delay: 3000,
          },
    });

    var swiper2 = new Swiper(".sc-people .swiper", {
      slidesPerView: 1,
      navigation: {   
            nextEl: ".control .btn-next",
            prevEl: ".control .btn-prev",
          },
      breakpoints: {
    
        768: {
          slidesPerView: 1.1,
          spaceBetween: 30,  //브라우저가 768보다 클 때
        },
      },
    });

    var swiper3 = new Swiper(".sc-benefits .swiper", {
        
        slidesPerView: 1,
        navigation: {   
            nextEl: ".control .btn-next",
            prevEl: ".control .btn-prev",
          },
          breakpoints: { //스와이퍼 반응형 
    
            980: {  //980보다 클 때
              slidesPerView: 3,
              spaceBetween: 30,  
            },
            768: {  //768보다 클 때
              slidesPerView: 2,
              spaceBetween: 30,
            },
          },
    });

// 한글 영어 선택메뉴
  $('.header-left .utils .lang').click(function(){
      $('.header-left .utils .lang').toggleClass('on');
    })

//select-box 버튼 이미지 변경
  $('.select-box').click(function(){
      $(this).toggleClass('active');
  });
//select-box 글자색 바꿈
  $('.select-box').change(function(){
    $(this).css('color','#000000');
});

//관련사이트 박스 
$('#site-box').click(function(){
  $('#site-select-box').addClass('active');
});

$('#related-site-close').click(function(){
  $('#site-select-box').removeClass('active');
});

//mobile메뉴 on off

$('.header-left .menu-wrap .btn-menu').click(function(){
  $('.header-left .menu-wrap').toggleClass('on');
})

$('.header-left .menu-wrap .menu-area .menu-2dept').click(function(){
  $(this).toggleClass('on');
})

//언어 선택 
$('.header-left .menu-wrap .menu-area .lang .text').click(function(){
  $(this).addClass('on');
  $(this).siblings().removeClass('on');
})

//서치 박스 on / off

$('.sc-team .search-box').click(function(){
  $('.sc-team .search-wrap').addClass('on');
})
$('.sc-team .search-wrap .btn-close').click(function(){
  $('.sc-team .search-wrap').removeClass('on');
})

// 초기에 아코디언 메뉴 닫기
$('.slide > ul, .slide2 > ul').hide();

// 아코디언 메뉴 토글
$('.slide > .dropdown, .slide2 > .dropdown').click(function(){
  $(this).toggleClass('on');
  $(this).siblings('ul').slideToggle();
});

// 모든 선택 해제
$('#all').click(function(){
  $(this).toggleClass('on');
  $(this).children('span').css('background', $(this).hasClass('on') ? '#fff' : '#000');
  $('.tech-item .bullet span').css('background', $(this).hasClass('on') ? '#fff' : '#000');
});

// Bullet 컨트롤 토글
$('.bullet').click(function(){
  $(this).toggleClass('on');
  $(this).children('span').css('background', $(this).hasClass('on') ? '#fff' : '#000');
});
