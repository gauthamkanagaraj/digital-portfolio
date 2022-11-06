var trackerInit;
var docInit;
var bannerWind = false;
var logoHeight = $(".logo").height();
var logoWidth = $(".logo").width();
var bannerHeight = $(".banner").height();
$(document).ready(function() {
		if($(window).height() > $(window).width()) {
			$(".title").css("font-size", "2.4em");
			$(".title").css("width", "100%");
			$(".info").html('Scroll <i class="material-icons">keyboard_double_arrow_down</i> to Navigate');
			$(".info").css("font-size", "1.7em");
			$(".screen-image-container").css("height", "36vh");
			$(".screen-title").css("font-size", "3.6em");
			$(".screen-title").css("margin-bottom", "10%");
			$(".screen-description").css("font-size", "2.6em");
			$(".screen-description").css("width", "80%");
			$(".screen-description").css("margin-bottom", "10%");
			$(".contact-labels").css("font-size", "2.9em");
			$(".contact-link").css("font-size", "1.4em");
		}
        $(window).scrollTop(0);
        $(".loader").fadeOut();
        trackerInit = document.querySelector("#tracker").getBoundingClientRect().top;
        console.log("Tracker Init " + trackerInit);
        docInit = $(document).height();
        window.setTimeout( show_content, 400); // 1 second
});

function show_content() {
    $(".wrapper").css("visibility", "visible");
}

$(document.body).on('touchmove', onScroll); // for mobile
$(window).on('scroll', onScroll);

function onScroll() {
    //You've scrolled this much:

    var scrollPos = $(window).scrollTop()+($(window).height()/2);
    var padTop = scrollPos - trackerInit;
    if($(window).scrollTop() > $(window).height()/4) {
        windBanner($(window).scrollTop());
    } else {
        unwindBanner($(window).scrollTop());
    }
    if(padTop > 0 && padTop < docInit) {
       $("#tracker").css("padding-top", padTop + "px");
    }
    //console.log("You've scrolled " + scrollPos + " pixels");
};

function windBanner(scrollPosition) {
  if(!bannerWind) {
    var ratio = scrollPosition / $(window).height()/2;
    console.log("Ratio " + ratio);
    $(".banner").css("height", bannerHeight - ((bannerHeight/2)*ratio) + "px");
    $(".logo").css("height", logoHeight - ((logoHeight/2)*ratio) + "px");
    $(".logo").css("width", logoWidth - ((logoWidth/2)*ratio) + "px");
    if(scrollPosition >= $(window).height()/2) {
      $(".banner").css("height", (bannerHeight/2) + "px");
      $(".logo").css("height", (logoHeight/2) + "px");
      $(".logo").css("width", (logoWidth/2) + "px");
      $(".banner").css("background-color", "#181818");
      bannerWind = true;
    }
  }
}


function unwindBanner() {
  if(bannerWind) {
    $(".banner").css("height", "200px");
    $(".banner").css("background-color", "transparent");
    $(".logo").css("height", "200px");
    $(".logo").css("width", "200px");
    bannerWind = false;
  }
}