$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("#navBar").addClass("blue");
    } else {
        $("#navBar").removeClass("blue");
    }
});
