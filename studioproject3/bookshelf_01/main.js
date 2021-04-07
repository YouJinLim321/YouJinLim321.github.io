/* globals require */
console.log("Hello, Airtable");

// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable librar to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keyMNcLdDkT2lnvX1" }).base(
  "app3wkyx7gcoF7VI3"
);

//get the "music" table from the base, select ALL the records, and specify the functions that will receive the data
base("vogue_cover").select({}).eachPage(gotPageOfCovers, gotAllCovers);

// an empty array to hold our book data
const covers = [];

// callback function that receives our data
function gotPageOfCovers(records, fetchNextPage) {
  console.log("gotPageOfCovers()");
  // add the records from this page to our books array
  covers.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllCovers(err) {
  console.log("gotAllCovers()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogCovers();
  showCovers();
}

// just loop through the books and console.log them
function consoleLogCovers() {
  console.log("consoleLogCovers()");
  covers.forEach((cover) => {
    console.log("Cover:", cover);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
function showCovers() {
  console.log("showCovers()");
  covers.forEach((cover) => {
    
        //add song titles
        //var songTitle = document.createElement("h1");
        //songTitle.classList.add("song-title");
        //songTitle.innerText = song.fields.song_title;
        //document.body.append(songTitle);

        var coverContainer = document.createElement("div");
        coverContainer.classList.add("cover-container");
        document.querySelector(".container").append(coverContainer);

        //add song titles to our song container
        var coverYear = document.createElement("h1");
        coverYear.classList.add("cover-year");
        

       //add artists to our song container
        var coverHair = document.createElement("h1");
       coverHair.classList.add("cover-hair");
      

       //add description to our song container
       var coverMakeup = document.createElement("p");
        coverMakeup.classList.add("cover-makeup");
        

        var coverClothing = document.createElement("p");
        coverClothing.classList.add("cover-clothing");
        

        var coverBackground = document.createElement("p");
        coverBackground.classList.add("cover-background");
        

       //add image to our song container
        var coverImage = document.createElement("img");
        coverImage.classList.add("cover-image");
        coverImage.src = cover.fields.cover_image[0].url;
        coverContainer.append(coverImage);

        //add event listener
        //when user clicks on song container
        //image and description will appear or disappear
        coverContainer.addEventListener("click", function(){
        coverDescription.classList.toggle("active");
        coverImage.classList.toggle("active");


        // get genre field from airtable
        // loop through the array and add each genre as 
        // a class to the song container

        var coverGenre = cover.fields.genre;
        coverGenre.forEach(function(genre) {
          coverContainer.classList.add(genre)
        });

        //add event listener to our filter
        // to add an active class to our song

        var filterCurly = document.querySelector('.curly');
        filterCurly.addEventListener("click", function() {

          if(coverContainer.classList.contains("curly")) {
            coverContainer.style.background = "red";
          } else {
          coverContainer.style.background = "white";
        }
      });

        var filterStraight = document.querySelector('.straight');
        filterStraight.addEventListener("click", function() {

          if(coverContainer.classList.contains("straight")) {
            coverContainer.style.background = "red";
          } else {
          coverContainer.style.background = "white";
        }
        });

        var filterDreamy = document.querySelector('.dreamy');
        filterDreamy.addEventListener("click", function() {

          if(coverContainer.classList.contains("dreamy")) {
            coverContainer.style.background = "red";
          } else {
          coverContainer.style.background = "white";
        }
        });

        var filterLovely = document.querySelector('.lovely');
        filterLovely.addEventListener("click", function() {

          if(coverContainer.classList.contains("lovely")) {
            coverContainer.style.background = "red";
          } else {
          coverContainer.style.background = "white";
        }
        });

        var filterChic = document.querySelector('.chic');
        filterChic.addEventListener("click", function() {

          if(coverContainer.classList.contains("chic")) {
            coverContainer.style.background = "red";
          } else {
          coverContainer.style.background = "white";
        }
        });

        var filterPowerful = document.querySelector('.powerful');
        filterPowerful.addEventListener("click", function() {

          if(coverContainer.classList.contains("powerful")) {
            coverContainer.style.background = "red";
          } else {
          coverContainer.style.background = "white";
        }
        });

        var filterLonely = document.querySelector('.lonely');
        filterLonely.addEventListener("click", function() {

          if(coverContainer.classList.contains("lonely")) {
            coverContainer.style.background = "red";
          } else {
          coverContainer.style.background = "white";
        }
        });

        var filterSoleless = document.querySelector('.soleless');
        filterSoleless.addEventListener("click", function() {

          if(coverContainer.classList.contains("soleless")) {
            coverContainer.style.background = "red";
          } else {
          coverContainer.style.background = "white";
        }
        });

        var filterVintage = document.querySelector('.vintage');
        filterVintage.addEventListener("click", function() {

          if(coverContainer.classList.contains("vintage")) {
            coverContainer.style.background = "red";
          } else {
          coverContainer.style.background = "white";
        }
        });

        var filterSexy = document.querySelector('.sexy');
        filterSexy.addEventListener("click", function() {

          if(coverContainer.classList.contains("sexy")) {
            coverContainer.style.background = "red";
          } else {
          coverContainer.style.background = "white";
        }
        });

        var filterPlayful = document.querySelector('.playful');
        filterPlayful.addEventListener("click", function() {

          if(coverContainer.classList.contains("playful")) {
            coverContainer.style.background = "red";
          } else {
          coverContainer.style.background = "white";
        }
        });

        var filterWarm = document.querySelector('.warm');
        filterWarm.addEventListener("click", function() {

          if(coverContainer.classList.contains("warm")) {
            coverContainer.style.background = "red";
          } else {
          coverContainer.style.background = "white";
        }
        });

        var filterNeutral = document.querySelector('.neutral');
        filterNeutral.addEventListener("click", function() {

          if(coverContainer.classList.contains("neutral")) {
            coverContainer.style.background = "red";
          } else {
          coverContainer.style.background = "white";
        }
       });

        var filterBright = document.querySelector('.bright');
        filterBright.addEventListener("click", function() {

          if(coverContainer.classList.contains("bright")) {
            coverContainer.style.background = "red";
          } else {
          coverContainer.style.background = "white";
        }
        });

         var filterCool = document.querySelector('.cool');
        filterCool.addEventListener("click", function() {

          if(coverContainer.classList.contains("cool")) {
            coverContainer.style.background = "red";
          } else {
          coverContainer.style.background = "white";
        }
        });

         var filterDark = document.querySelector('.dark');
        filterDark.addEventListener("click", function() {

          if(coverContainer.classList.contains("dark")) {
            coverContainer.style.background = "red";
          } else {
          coverContainer.style.background = "white";
        }
        });

         var filterCity = document.querySelector('.city');
        filterCity.addEventListener("click", function() {

          if(coverContainer.classList.contains("city")) {
            coverContainer.style.background = "red";
          } else {
          coverContainer.style.background = "white";
        }
        });

         var filterNature = document.querySelector('.nature');
        filterNature.addEventListener("click", function() {

          if(coverContainer.classList.contains("nature")) {
            coverContainer.style.background = "red";
          } else {
          coverContainer.style.background = "white";
        }
        });

  });
});
}
