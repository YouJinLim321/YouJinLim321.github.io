/* globals require */
console.log("Hello, Airtable");

// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable librar to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keyMNcLdDkT2lnvX1" }).base(
  "applYB2UaWCn7ypjy"
);

//get the "music" table from the base, select ALL the records, and specify the functions that will receive the data
base("tarot cards& card games").select({}).eachPage(gotPageOfCards, gotAllCards);

// an empty array to hold our book data
var cards = [];

// callback function that receives our data
function gotPageOfCards(records, fetchNextPage) {
  console.log("gotPageOfCards()");
  // add the records from this page to our books array
  cards.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllCards(err) {
  console.log("gotAllCards()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogCards();
  showCards();
}

// just loop through the books and console.log them
function consoleLogCards() {
  console.log("consoleLogCards()");
  cards.forEach((card) => {
    console.log("Card:", card);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
function showCards() {
  console.log("showCards()");
  cards.forEach((card) => {
    
        //add song titles
        //var songTitle = document.createElement("h1");
        //songTitle.classList.add("song-title");
        //songTitle.innerText = song.fields.song_title;
        //document.body.append(songTitle);

        var cardContainer = document.createElement("div");
        cardContainer.classList.add("card-container");
        document.querySelector(".container").append(cardContainer);

        //add song titles to our song container
        var cardTitle = document.createElement("h1");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = card.fields.Name;
        cardContainer.append(cardTitle);

       //add artists to our song container
        var cardArtist = document.createElement("h1");
       cardArtist.classList.add("card-artist");
       cardArtist.innerText = card.fields.Name_of_deck;
       cardContainer.append(cardArtist);

       //add description to our song container
       var cardDescription = document.createElement("p");
        cardDescription.classList.add("card-description");
        cardDescription.innerText = card.fields.Year;
        cardContainer.append(cardDescription);

       //add image to our song container
        var cardImage = document.createElement("img");
        cardImage.classList.add("card-image");
        cardImage.src = card.fields.cover_image[0].url;
        cardContainer.append(cardImage);

        //add event listener
        //when user clicks on song container
        //image and description will appear or disappear
        cardContainer.addEventListener("click", function(){
        cardDescription.classList.toggle("active");
        cardImage.classList.toggle("active");
      });
  });
}
