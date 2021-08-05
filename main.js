$(function(){
  ///////////////////////////////////////////
  
  
  $("#kim_portfolio").fullpage({
    anchors:['intro', 'pf01', 'pf02', 'pf03', 'pf04', 'pf05', 'info'],
    afterLoad: function(origin, destination, direction){
      
      $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
      //nav ul li
      $("nav ul li").eq(destination.index).addClass("on").siblings().removeClass("on");
    },
  });
  
  
  $(".xi-pause.vod").on("click", function(){
    $(this).parent().parent().siblings().find("video").trigger("pause");
  });
  $(".xi-play.vod").on("click", function(){
    $(this).parent().parent().siblings().find("video").trigger("play");
  });
  
  
  $(".visual_slider").slick({
    arrows:false,
    dots:true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  
  $(".slider_arrows i.xi-angle-right").on("click", function(){
    $(".visual_slider").slick("slickNext");
  });
  $(".slider_arrows i.xi-angle-left").on("click", function(){
    $(".visual_slider").slick("slickPrev");
  });
  
  
  $("header .mopen").on("click", function(){
    $(this).toggleClass("on");
    $(".cover").toggleClass("on");
  });
  
  $(".cover li a").on("click", function(){
    $(".cover").removeClass("on");
    $("header .mopen").removeClass("on");
  })
  
  //typing txt intro
  var options = {
    strings: ['kimgaram 2021 portfolio'],
    typeSpeed: 100
  };
  
  var typed = new Typed('.intro_slogan .txt', options);
  
  
  
  
  
  
  
  
  
  
  /////////////////////////////////////////////
  });