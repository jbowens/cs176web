$(document).ready(function() {
    $(".portrait").each(function(index, img) {
        $(img).attr('data-origsrc', $(img).attr('src'));
        $(img).hover(function(e) {
                $(this).attr('src', $(img).attr('data-hoverimg') || $(img).attr('data-origsrc'));
            },
            function(e) {
                $(this).attr('src', $(img).attr('data-origsrc'));
            });
    });
 });
