(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 30)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    })

})(jQuery); // End of use strict





       (function () {
    var move = document.getElementById('trapezoid');

    move.onclick = function () {

        if (trapezoid.style.marginTop === "51px") {
             trapezoid.style.marginTop = "0";

        } else {
             trapezoid.style.marginTop = "51px";
        }
    };
})();



var count = jQuery('.content').length;
var curPage = 1;

jQuery('.content').each(function(i) {
  jQuery(this).addClass('page'+(i+1));
  jQuery('.pagination').append('<span class="pageNum pageNum' + (i+1) + '">' + (i+1) + '</span>');
})

 if (curPage == 1) {
  if (count == curPage) { 
    jQuery('#page').addClass('noNav');
  }
  jQuery('.prev').addClass('hide');
  jQuery('.pageNum1').addClass('navActive');
}

jQuery('.content').not('.page'+curPage).hide();


jQuery('.next').click(function() {
  if (curPage != count) {
    jQuery('.content').hide();
    jQuery('.pageNum').removeClass('navActive');
    curPage++;
    jQuery('.content.page'+curPage).show();
    jQuery('.pageNum'+curPage).addClass('navActive');
    //jQuery('.console').html('count = ' + count + ' - current = ' + curPage);
  }
  
  if (curPage == count) {
    jQuery('.next').addClass('hide');
  }
  
  jQuery('.prev').removeClass('hide');
  
})

jQuery('.prev').click(function() {
  if (curPage != 1) {
    jQuery('.content').hide();
    jQuery('.pageNum').removeClass('navActive');
    curPage--;
    jQuery('.content.page'+curPage).show();
    jQuery('.pageNum'+curPage).addClass('navActive');
    //jQuery('.console').html('count = ' + count + ' - current = ' + curPage);
  }
  
  if (curPage == 1) {
    jQuery('.prev').addClass('hide');
  }
  
  jQuery('.next').removeClass('hide');
})

jQuery('.pageNum').click(function() {
  var pageClick = jQuery(this).text();
  jQuery('.pageNum').removeClass('navActive');
  jQuery(this).addClass('navActive');
  curPage = jQuery(this).text();
  jQuery('.content').hide();
  jQuery('.content.page'+curPage).show();
  
  if (curPage == 1) {
    jQuery('.prev').addClass('hide');
    jQuery('.next').removeClass('hide');
  } else if (curPage == count) {
    jQuery('.prev').removeClass('hide');
    jQuery('.next').addClass('hide');
  } else {
    jQuery('.prev').removeClass('hide');
    jQuery('.next').removeClass('hide');
  }
})

//jQuery('.console').append('count = ' + count + ' - current = ' + curPage);