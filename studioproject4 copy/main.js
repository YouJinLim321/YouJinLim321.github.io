$(document).ready(function(){
    console.log( "ready!");

      $("#s1").click(function(){
        $(".fa-star").css("color","black")
        $("#s1").css("color","yellow");
        $(".step1-1").css("display","block");
        $(".step1-2").css("display","block");
        $(".step1-3").css("display","block");
        $(".step1-4").css("display","block");
        $(".step1-5").css("display","block");
        $('body').css('background-image','url(\'1star.jpg\')');
      });
    $("#s2").click(function(){
        $(".fa-star").css("color","black")
        $("#s1,#s2").css("color","yellow");
        $(".step2-1").css("display","block");
        $(".step2-2").css("display","block");
        $(".step2-3").css("display","block");
        $(".step2-4").css("display","block");
        $(".step2-5").css("display","block");
        $('body').css('background-image','url(\'2star.jpg\')');
      });
    $("#s3").click(function(){
        $(".fa-star").css("color","black")
        $("#s1,#s2,#s3").css("color","yellow");
        $(".step3-1").css("display","block");
        $(".step3-2").css("display","block");
        $(".step3-3").css("display","block");
        $(".step3-4").css("display","block");
        $(".step3-5").css("display","block");
        $('body').css('background-image','url(\'3star.jpg\')');
      });
    $("#s4").click(function(){
        $(".fa-star").css("color","black")
        $("#s1,#s2,#s3,#s4").css("color","yellow");
        $(".step4-1").css("display","block");
        $(".step4-2").css("display","block");
        $(".step4-3").css("display","block");
        $(".step4-4").css("display","block");
        $(".step4-5").css("display","block");
        $('body').css('background-image','url(\'4star.jpg\')');
      });
    $("#s5").click(function(){
        $(".fa-star").css("color","black")
        $(".fa-star").css("color","yellow");
        $(".step5-1").css("display","block");
        $(".step5-2").css("display","block");
        $(".step5-3").css("display","block");
        $(".step5-4").css("display","block");
        $(".step5-5").css("display","block");
        $('body').css('background-image','url(\'5star.jpg\')');
      });
    });