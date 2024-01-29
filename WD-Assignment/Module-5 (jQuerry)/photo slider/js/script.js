$(document).ready(function() {
    var slides = $('.slide');
    var currentSlide = 0;  //it shows the initial slide
    
    slides.eq(currentSlide).addClass('active'); // This function to show the next slide
    function showNextSlide() {
    slides.eq(currentSlide).removeClass('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides.eq(currentSlide).addClass('active');
    }

    //this function use to show the previous slide
    
    function showPreviousSlide() {
    slides.eq(currentSlide).removeClass('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides.eq(currentSlide).addClass('active');
    }
    // this attach click event handlers to the buttons

    $('#prevBtn').click(function() {
    showPreviousSlide();
    });
    $('#nextBtn').click(function() {
    showNextSlide();
    });
});