$(document).ready(() => {
    $(".accordion").on('click', () => {
        $(this).next().slideToggle();
        
    });

    // $('.accordion').on('click', () => {
    //     $(this).hide();

    // $('.panel').on('mouseleave', () => {
    //     $('.panel').slideUp();
        
});