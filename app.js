var main = function() {
  $('img').on('click', function() {
    alert('img clicked');
    $('ul.dropdown-menu').slideToggle("fast", function() {
    alert('ul toggled '); 
      $('ul.dropdown-menu').append('<li><a href="#">Portfolio</a></li>');
      alert('portfolio appended');
      $('ul.dropdown-menu').append('<li><a href="#">Play</a></li>');
      alert('play appended');
    });
    
  });
  
};
 
$(document).ready(main);