// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    
    $( ".step1" ).click(function() {
    $(".step2").css("display", "block");
    $("body").css("background-color", "#B7FFBF");
});
    $( ".step2" ).click(function() {
    $(".step3").css("display", "block");
    $("body").css("background-color", "#95F985");
});
     $( ".step3" ).click(function() {
    $(".step4").css("display", "block");
    $("body").css("background-color", "#4DED30");
});
      $( ".step4" ).click(function() {
    $(".step5").css("display", "block");
    $("body").css("background-color", "#26D701");
});
       $( ".step5" ).click(function() {
    $(".step6").css("display", "block");
    $("body").css("background-color", "#00C301");
});
        $( ".step6" ).click(function() {
    $(".step7").css("display", "block");
    $("body").css("background-color", "#00AB08");
});
});
