//load WOW.js on non-touch devices(desktop)
var isPhoneDevice = "ontouchstart" in document.documentElement;
$(document).ready(function() {
    if (isPhoneDevice) {
        //mobile
    } else {
        //desktop
        // Initialize WOW.js
        wow = new WOW({
            offset: 50
        })
        wow.init();
    }
});

// Start of use strict
$(document).ready(function(){
    "use strict";

    // Smooth Scrolling : a태그의 href값으로 애니메이션 이동
    $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 50)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Owl Carousel Settings
    $(".slider-carousel").owlCarousel({
        singleItem: true,
        navigation: true,
        pagination: false,
        navigationText: [
            "<i class='xi-angle-left-thin xi-3x'></i>",
            "<i class='xi-angle-right-thin xi-3x'></i>"
        ],
        autoHeight: true,
        mouseDrag: false,
        touchDrag: false,
        transitionStyle: "fadeUp"
    });


    // Header #gnb Tag
    var gnbTag ="";
    var gnbJson ={
                 gnblistClass:["list1","list2","list3","list4"],
                 gnblistLink:["#","#","#","#"],
                 gnblistText:["ABOUT","OFFLINE","PRODUCT","EVENT"],
                }; ////gnbData
    ///////////////////////실행문///////////////////////
    for(var i in gnbJson.gnblistClass){
      gnbTag += "<li class='"+gnbJson.gnblistClass[i]+"' >";
      gnbTag += "<a href='"+gnbJson.gnblistLink[i]+"' >";
      gnbTag += gnbJson.gnblistText[i]+"</a></li>"
    }
    $("#gnb").html(gnbTag);

})(jQuery); //// End of use strict



//
// $(function(){
//
//   var gnbTag="";
//   var gnbData=[
//                 ["list1","","ABOUT"],
//                 ["list2","","OFFLINE"],
//                 ["list3","","PRODUCT"],
//                 ["list4","","EVENT"],
//                ];
//
//    for(var x=0; x<gnbData.length; x++){
//    gnbTag+="<li class="+gnbData[x][0]+"><a href="+gnbData[x][1]+">"+gnbData[x][2]+"</a></li>";
//    }
//    $("#gnb").html(gnbTag);
//
// });

$(function(){





    });
