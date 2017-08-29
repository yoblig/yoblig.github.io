$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 775) {
            $('.navbar').addClass('navbar-fixed-top');
        }
        if ($(window).scrollTop() < 774) {
            $('.navbar').removeClass('navbar-fixed-top');
        }
    });
});

$(".navbar-dark a[href^='#']").on('click', function(e) {
   e.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 300, function(){
       window.location.hash = hash;
     });
});
$(".navbar-dark ul li a[href^='#']").on('click', function(e) {
   e.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 300, function(){
       window.location.hash = hash;
     });
});

$(".scroll-to-projects a[href^='#']").on('click', function(e) {
   e.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 300, function(){
       window.location.hash = hash;
     });
});
$("footer .scroll-to-top-button a[href^='#']").on('click', function(e) {
   e.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 300, function(){
       window.location.hash = hash;
     });
});

$('.js-wp-1').waypoint(function(direction) {
    $('.js-wp-1').addClass('animated fadeInDown');
}, {
    offset: '50%'
});

$('.js-wp-project').waypoint(function(direction){
  $('.js-wp-project').addClass('animated fadeInUp');
}, {
    offset: '80%'
});

$('.js-wp-work-right-a').waypoint(function(direction){
  $('.js-wp-work-right-a').addClass('animated fadeInRight');
}, {
    offset: '80%'
});

$('.js-wp-work-left-a').waypoint(function(direction){
  $('.js-wp-work-left-a').addClass('animated fadeInLeft');
}, {
    offset: '80%'
});
$('.js-wp-work-right-b').waypoint(function(direction){
  $('.js-wp-work-right-b').addClass('animated fadeInRight');
}, {
    offset: '80%'
});

$('.js-wp-work-left-b').waypoint(function(direction){
  $('.js-wp-work-left-b').addClass('animated fadeInLeft');
}, {
    offset: '80%'
});
