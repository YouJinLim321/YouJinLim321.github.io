/* globals require */
console.log("Hello, Airtable");

// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable librar to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keyMNcLdDkT2lnvX1" }).base(
  "app42Ha3M8ZwUdEpi"
);

//get the "music" table from the base, select ALL the records, and specify the functions that will receive the data
base("music").select({}).eachPage(gotPageOfSongs, gotAllSongs);

// an empty array to hold our book data
var songs = [];

// callback function that receives our data
function gotPageOfSongs(records, fetchNextPage) {
  console.log("gotPageOfSongs()");
  // add the records from this page to our books array
  songs.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllSongs(err) {
  console.log("gotAllSongs()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogSongs();
  showSongs();
}

// just loop through the books and console.log them
function consoleLogSongs() {
  console.log("consoleLogSongs()");
  songs.forEach((song) => {
    console.log("Song:", song);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
function showSongs() {
  console.log("showSongs()");
  songs.forEach((song) => {
    
        //add song titles
        //var songTitle = document.createElement("h1");
        //songTitle.classList.add("song-title");
        //songTitle.innerText = song.fields.song_title;
        //document.body.append(songTitle);

        var songContainer = document.createElement("div");
        songContainer.classList.add("song-container");
        document.querySelector(".container").append(songContainer);

        //add song titles to our song container
        var songTitle = document.createElement("h1");
        songTitle.classList.add("song-title");
        songTitle.innerText = song.fields.album_title;
        songContainer.append(songTitle);

       //add artists to our song container
        var songArtist = document.createElement("h1");
       songArtist.classList.add("song-artist");
       songArtist.innerText = song.fields.artist;
       songContainer.append(songArtist);

       //add description to our song container
       var songDescription = document.createElement("p");
        songDescription.classList.add("song-description");
        songDescription.innerText = song.fields.description;
        songContainer.append(songDescription);

       //add image to our song container
        var songImage = document.createElement("img");
        songImage.classList.add("song-image");
        songImage.src = song.fields.album_artwork[0].url;
        songContainer.append(songImage);

        //add event listener
        //when user clicks on song container
        //image and description will appear or disappear
        songContainer.addEventListener("click", function(){
        songDescription.classList.toggle("active");
        songImage.classList.toggle("active");
      });
  });
}
