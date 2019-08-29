$(function() {
    let rows = $('#title-box .row');
    rows.hide();

    rows.each(function(i) {
        $(this).delay(1500 * i).show(1000);
    });
});