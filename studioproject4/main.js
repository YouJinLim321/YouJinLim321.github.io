$(document).ready(function(){

      
    $("#s1").click(function(){
        $(".fa-star").css("color","black")
        $("#s1").css("color","yellow");
        $('[class^="star"]').css('display', 'none');
        getRandomMessage(1).css("display", "block");
        $('body').css('background-image','url(\'1star.jpg\')');
      });
    $("#s2").click(function(){
        $(".fa-star").css("color","black")
        $("#s1,#s2").css("color","yellow");
        $('[class^="star"]').css('display', 'none');
        getRandomMessage(2).css("display", "block");
        $('body').css('background-image','url(\'2star.jpg\')');
      });
    $("#s3").click(function(){
        $(".fa-star").css("color","black")
        $("#s1,#s2,#s3").css("color","yellow");
        $('[class^="star"]').css('display', 'none');
        getRandomMessage(3).css("display", "block");
        $('body').css('background-image','url(\'3star.jpg\')');
      });
    $("#s4").click(function(){
        $(".fa-star").css("color","black")
        $("#s1,#s2,#s3,#s4").css("color","yellow");
        $('[class^="star"]').css('display', 'none');
        getRandomMessage(4).css("display", "block");
        $('body').css('background-image','url(\'4star.jpg\')');
      });
    $("#s5").click(function(){
        $(".fa-star").css("color","black")
        $(".fa-star").css("color","yellow");
        $('[class^="star"]').css('display', 'none');
        getRandomMessage(5).css("display", "block");
        $('body').css('background-image','url(\'5star.jpg\')');
        $('.star5-1,.star5-2,.star5-3,.star5-4,.star5-5').css("font-family", $(this).val());
      });
    });

     function getRandomMessage(category, from = 1, to = 5) {
    const selection = Math.floor(Math.random() * (to - from + 1) + from);
    return $(`.star${category}-${selection}`);
}
