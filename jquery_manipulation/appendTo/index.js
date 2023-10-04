$(document).ready(function(){
    $("#app1").click(function(){
      $(" <i>item Appended</i>.").appendTo("p");
    });
    $("#app2").click(function(){
      $("ul").appendTo("<li>Appended</li>");
    });
  });