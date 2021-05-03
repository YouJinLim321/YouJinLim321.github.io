var emotionsArray = {

    angry:"&#x1F620;",

    disappointed:"&#x1F61E;",

    meh:"&#x1F610;",

    happy:"&#x1F60A;",

    smile:"&#x1F603;",

    wink:"&#x1F609;",

    laughing:"&#x1F606;",

    inLove:"&#x1F60D;",

    heart:"&#x2764;",

    crying:"&#x1F622;",

    star:"&#x2B50;",
};

var emotionsArray = ['angry','disappointed','meh','happy','inLove'];

$("#myRating").emotionsRating({

  emotions: emotionsArray

});

    $("#myRating").emotionsRating({

 

  // background emoji

  bgEmotion:"happy",


  // number of emoji

  count: 5,


  // color of emoji

  // gold, red, blue, green, black,

  // brown, pink, purple, orange

  color:"red",

 

  // initial rating value

  initialRating: 4

 

  // size of emoji

  emotionSize: 30,

 

  // input name

  inputName:"ratings[]",

 

  // callback

  emotionOnUp<a href="https://www.jqueryscript.net/time-clock/">date</a>:null,

 

  // if is disabled?

  disabled:false,

 

  // enable use of images as emoji

  useCustomEmotions:false,

 

  // if you want to process the images

  transformImages:false

   

});

