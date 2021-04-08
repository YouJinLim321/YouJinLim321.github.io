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
  showCovers(covers);
  addFilterEventListeners();
}

// just loop through the books and console.log them
function consoleLogCovers() {
  console.log("consoleLogCovers()");
  covers.forEach((cover) => {
    console.log("Cover:", cover);
  });
}

function showCovers(array) {
  console.log("showCovers()");

  // create an array of .cover-container elements out of the array passed as an argument to this function
  const coverContainers = array.map((cover) => {
    const coverContainer = document.createElement("div");
    coverContainer.classList.add("cover-container");

    const coverImage = document.createElement("img");
    coverImage.classList.add("cover-image");
    coverImage.src = cover.fields.cover_image[0].url;

    coverContainer.append(coverImage);
    return coverContainer;
  });

  // appends coverContainers to .covers all at once.
  // the append() method lets you append multiple elements simultaneously if you provide a comma-separated list inside the parentheses.
  // for example: document.body.append(element1, element2, element3). it is like writing an array without the brackets.
  // that is what the ... is for. it strips the brackets out of the array when we pass it as an argument to a function
  document.querySelector(".covers").append(...coverContainers);
}

// function to erase the content of .covers
function clearCovers() {
  const allCovers = document.querySelector(".covers");
  while (allCovers.childNodes.length > 0) {
    allCovers.removeChild(allCovers.firstChild);
  }
}

// add filter functionality to every .filter-item
function addFilterEventListeners() {
  const filterItems = document.querySelectorAll(".filter-item");
  filterItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      // remove all covers first
      clearCovers();

      // event.target means the element being clicked on. note that you need event as an argument in the event listener callback, like so: (event) => {}

      // parentNode means the parent of the element. in this case, the parentNode of button.filter-item is li.
      // however, we want to get the 'data-category' attribute of the ul that is the parent of the li, so we call parentNode twice
      const category = event.target.parentNode.parentNode.getAttribute("data-category");
      const value = event.target.getAttribute("data-value");

      // the filter() method lets us filter an array according to a condition. so if we do covers.filter((cover) => cover.fields.background[0] === "city") then it will return an array of covers with a city background
      // using brackets, we can access the property of an object with a variable
      // then we pass the filtered array to showCovers()
      showCovers(covers.filter((cover) => cover.fields[category][0] === value));
    }, false);
  });
}