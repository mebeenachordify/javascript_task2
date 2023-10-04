$(document).ready(function(){
    $("#app1").click(function(){
      $("p").append(" <i>item Appended</i>.");
    });
    $("#app2").click(function(){
      $("ul").append("<li>Appended</li>");
    });
  });