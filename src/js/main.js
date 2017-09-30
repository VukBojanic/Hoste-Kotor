$(document).ready(function(){
  
  function checkScroll(){
    var startY = $('.navbar').height() * 2; //Promjena navbara scroll event

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}

});

// function initMap() {
//     var options = {
//         zoom:8,
//         center:{lat:42.422936,lng:18.771674}
//     }
//     var map = new google.maps.Map(document.getElementById('map'), options);
// }