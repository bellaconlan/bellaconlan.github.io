$(document).ready(function() {


// Add jQuery here

$('.nav_titles').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.titles').removeClass('hide');
  $('.item.titles').addClass('show');


});



$('.nav_scifi').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.scifi').removeClass('hide');
  $('.item.scifi').addClass('show');
});



$('.nav_stills').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.stills').removeClass('hide');
  $('.item.stills').addClass('show');
});




$('.nav_women').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.women').removeClass('hide');
  $('.item.women').addClass('show');
});



$('.nav_posters').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.posters').removeClass('hide');
  $('.item.posters').addClass('show');
});




$('.nav_all').click(function(event){
  $('.item').removeClass('hide');
  $('.item').addClass('show');
});



$('.nav_thumbnail').click(function(event){
  $('.item').addClass('thumbnail');
});

$('.nav_full').click(function(event){
  $('.item').addClass('full');
});













  });
