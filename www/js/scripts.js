$(function(){
    let lines = $('#title-box h1');
    lines.each(function(i) {
        $(this).delay(i * 1000).fadeIn(2000);
    })
});
