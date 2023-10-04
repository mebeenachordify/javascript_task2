
//trigger()
$(document).ready(function(){
    $("input").select(function(){
      $("input").after(" It's Trigger Method!");
    });
    $("button").click(function(){
      $("input").trigger("select");
    });
  });