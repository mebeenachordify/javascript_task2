$(document).ready(function(){
    $("h4").click(function(){
      $(this).slideToggle();
    });
    $("button").click(function(){
      $("h4").unbind();
    });
  });