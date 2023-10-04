$(document).ready(function(){
    $("#app1").click(function(){
      $("p").prepend(" <i>item prepended</i>.");
    });
    $("#app2").click(function(){
      $("ul").prepend("<li>prepended</li>");
    });
  });