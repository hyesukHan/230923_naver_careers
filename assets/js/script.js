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


    $('.header-left .utils .lang').click(function(){
        $('.header-left .utils .lang').toggleClass('on');
      })

    $('.select-box').click(function(){
        $(this).toggleClass('active');
    });
    $('.select-box').change(function(){
      $(this).css('color','#000000');
  });

  $('#site-box').click(function(){
    $('#site-select-box').addClass('active');
  });
 
  $('#related-site-close').click(function(){
    $('#site-select-box').removeClass('active');
  });


$('.header-left .menu-wrap .btn-menu').click(function(){
  $('.header-left .menu-wrap').toggleClass('on');
})

$('.header-left .menu-wrap .menu-area .menu-2dept').click(function(){
  $(this).toggleClass('on');
})
$('.header-left .menu-wrap .menu-area .lang .text').click(function(){
  $(this).addClass('on');
  $(this).siblings().removeClass('on');
})

$('.sc-team .search-box').click(function(){
  $('.sc-team .search-wrap').addClass('on');
})
$('.sc-team .search-wrap .btn-close').click(function(){
  $('.sc-team .search-wrap').removeClass('on');
})

$('.slide > .dropdown').click(function(){
  if($(this).hasClass('on')){
    $(this).removeClass('on');
    $(this).siblings('ul').css("display","none");
    
  }else{
    $(this).addClass('on');
    $(this).siblings('ul').css("display","block");
  }
})
$('.slide2 > .dropdown').click(function(){
  if($(this).hasClass('on')){
    $(this).removeClass('on');
    $(this).siblings('ul').css("display","none");
    
  }else{
    $(this).addClass('on');
    $(this).siblings('ul').css("display","block");
  }
})
$('#all').click(function(){
  if($(this).hasClass('on')){
    $(this).removeClass('on');
    $(this).children('span').css('background','#000');
    $('.tech-item .bullet span').css('background','#000');
  }else{
    $(this).addClass('on');
    $(this).children('span').css('background','#fff');
    $('.tech-item .bullet span').css('background','#fff');
  }

})

$('.bullet').click(function(){
  if($(this).hasClass('on')){
    $(this).removeClass('on');
    $(this).children('span').css('background','#000');
  }else{
    $(this).addClass('on');
    $(this).children('span').css('background','#fff');
  }

})