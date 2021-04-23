// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    
    $( ".step1" ).click(function() {
    $(".step2").css("display", "block");
    $("body").css("background-color", "#FF0000");
});
    $( ".step2" ).click(function() {
    $(".step3").css("display", "block");
    $("body").css("background-color", "#DD0000");
});
     $( ".step3" ).click(function() {
    $(".step4").css("display", "block");
    $("body").css("background-color", "#BB0000");
});
      $( ".step4" ).click(function() {
    $(".step5").css("display", "block");
    $("body").css("background-color", "#9A0000");
});
       $( ".step5" ).click(function() {
    $(".step6").css("display", "block");
    $("body").css("background-color", "#790001");
});
        $( ".step6" ).click(function() {
    $(".step7").css("display", "block");
    $("body").css("background-color", "#5A0004");
});
         $( ".step7" ).click(function() {
    $(".step8").css("display", "block");
    $("body").css("background-color", "#3A0002");
    $("#toggle").effect("shake");
});

});
