

let slide_index = 1;




/* SCRIPT SlideShow */

function plusSlides(num) {
    showSlides(slide_index += num);
}

function currentSlide(num) {
    showSlides(slide_index -= num);
}

function showSlides(num) {

    let i;

    let slides = document.getElementsByClassName("item_slideshow");

    if (num > slides.length) {
        slide_index = 1;
    }

    if (num < 1) {
        slide_index = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slide_index - 1].style.display = "block";

}

showSlides(slide_index);


$(document).ready(function () {


    console.log("Amazon!");
  

    // All - Menu
    $("#all-menu").click(function () {
        console.log("Expanding...");
        $("#menu_all").css("display", "block");
        $("#app").css("overflow", "hidden");
        $("#menu_all").css("overflow", "hidden");
    });

    $("#menu_all_close").click(function () {
        $("#menu_all").css("display", "none");
        $("#app").css("overflow", "visible");
        $("#menu_all").css("overflow", "visible");
    });

    
    // Scroll smooth
    $("#scroll_up").on("click", function (e) {
        console.log("Scrolling...");
        // console.log(e);

        const destiny = $("#app");

        $("html,body").animate({
            scrollTop: destiny.offset().top
        }, "slow");
    });



})