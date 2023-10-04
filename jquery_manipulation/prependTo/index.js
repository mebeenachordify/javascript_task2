$(document).ready(function(){
    $("#app1").click(function(){
      $(" <i>item prepended</i>.").prependTo("p");
    });
    $("#app2").click(function(){
      $("<li>prepended</li>").prependTo("ul");
    });
  });