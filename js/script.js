$(document).ready(function() {

    // $('p').click(function() {
    //     $(this).slideToggle('slow');
    // });
    
    // $('button').mouseenter(function() {
    //   $(this).removeClass('makeRed').addClass('makeBlue');
    // });
    
    // $('button').mouseleave(function() {
    //   $(this).removeClass('makeBlue').addClass('makeRed');
    // });
    
    // $('.box').on('click', function() {
    //     var classNames = $(this).attr('class').split(' ');
    //     $('.' + classNames[1]).css('background-color', 'red');
    // });

    $('.box').on('click', function() {
        /* when we click on an element that
        *  has a box class, this element will be fire */
        var classNames = $(this).attr('class').split(' ');
        var boxClass = classNames[0];
        var className = classNames[1];
        if($(this).css('background-color') == 'rgb(255, 0, 0)') {
        // if this object is red, turn it back
            $('.' + className).css('background-color', 'black');
        } else {
        // else turns all elements with a box class black
        // and then changes the color of all elements
        // with the same class name as the clicked element to red.
        $('.' + boxClass).css('background-color', 'black');
        $('.' + className).css('background-color', 'red');
        }
    });
    
})