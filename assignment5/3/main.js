// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    
    $( ".step1" ).click(function() {
    $(".step2").css("display", "block");
    $("body").css("background-color", "#828282");
});
    $( ".step2" ).click(function() {
    $(".step3").css("display", "block");
    $("body").css("background-color", "#88807B");
});
     $( ".step3" ).click(function() {
    $(".step4").css("display", "block");
    $("body").css("background-color", "#D9DDDC");
});
      $( ".step4" ).click(function() {
    $(".step5").css("display", "block");
    $("body").css("background-color", "#777B7E");
});
       $( ".step5" ).click(function() {
    $(".step6").css("display", "block");
    $("body").css("background-color", "#877F7D");
});
        $( ".step6" ).click(function() {
    $(".step7").css("display", "block");
    $("body").css("background-color", "#97978F");
});
         $( ".step7" ).click(function() {
    $(".step8").css("display", "block");
    $("body").css("background-color", "#808588");
    $("#toggle").effect("shake");
});
              $( ".step8" ).click(function() {
    $(".step9").css("display", "block");
    $("body").css("background-color", "#818380");
    $("#toggle").effect("shake");
});
                   $( ".step9" ).click(function() {
    $(".step10").css("display", "block");
    $("body").css("background-color", "#B9BBB6");
    $("#toggle").effect("shake");
});
                        $( ".step10" ).click(function() {
    $(".step11").css("display", "block");
    $("body").css("background-color", "#363636");
    $("#toggle").effect("shake");
});
                             $( ".step11" ).click(function() {
    $(".step12").css("display", "block");
    $("body").css("background-color", "#3E424B");
    $("#toggle").effect("shake");
});

});
