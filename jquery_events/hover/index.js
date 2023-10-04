$(document).ready(function(){
    $("h4").hover(function(){
      $(this).css("background-color", "blue");
      }, function(){
      $(this).css("background-color", "red");
    });
  });