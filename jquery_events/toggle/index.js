$(document).ready(function(){
    $("h3").toggle("click",
      function(){$("h3").css({"color": "yellow"});},
      function(){$("h3").css({"color": "pink"});},
      function(){$("h3").css({"color": "green"});
      
    });
 });
  