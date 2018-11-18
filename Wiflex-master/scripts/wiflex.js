$(document).ready(function(){
	console.log("Developers - Srishti Saboo Email-saboosrishti@gmail.com");
console.log("Developers - Rajat Jaswal Email-rajat05jaswal@gmail.com");
    var windowWidth,windowHeight;
    // var lastScrollTop = 0;
    windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    windowHeight = window.innerHeight|| document.documentElement.clientHeight || document.body.clientHeight;
    $(window).resize(function(){
        windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        windowHeight = window.innerHeight|| document.documentElement.clientHeight || document.body.clientHeight;
    });
    $(window).scroll(function() {
      if(windowWidth > 729){
        if ($(this).scrollTop() > 1){
          $('header').addClass("sticky");
        }
        else{
          $('header').removeClass("sticky");
        }
      }
    });
    
     $("#myCarousel").carousel({interval: 5000});
     $(".key-features:visible").animate({left:'250px'})

     $('.loader').show();
      var interval= setInterval(function(){
        var imgcarousel = $('img').length;
        var backgroundImg = $('.background-container').length;
        var imgCount=backgroundImg+imgcarousel;
        var loadingCount=0;
        if(backgroundImg >0){
          var imgPath = $('.background-container').css("background-image");
          imgPath = imgPath && imgPath.match(/url\((['"])?(.*?)\1\)/);
          imgPath = imgPath && imgPath[2];
          var dummyImg = $('<img>').attr('src', imgPath);
          if($(dummyImg)[0].complete){
            loadingCount++;
          }
        }
        $('img').each(function(){
          if($(this)[0].complete){
            loadingCount++;
          }
        })
        if(loadingCount===imgCount){
          $('.loader').hide();
          clearInterval(interval);
        }
      },1000)


});
