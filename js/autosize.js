$(document).ready(function () {
        var iw = $("iframe").width();
        iw = iw / 16 * 9;
        iw = iw.toFixed(0);
        $("iframe").height(iw);
    });
    $(window).resize(function () {
        var iw = $("iframe").width();
        iw = iw / 16 * 9;
        iw = iw.toFixed(0);
        $("iframe").height(iw);
    });