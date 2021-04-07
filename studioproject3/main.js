console.log("Hello, Bookshelf!");

var Airtable = require("airtable");
console.log(Airtable);

var base = new Airtable({ apikey: "keyMNcLdDkT2lnvX1"}).base(
  "app42Ha3M8ZwUdEpi"
);

base("books").select({}).eachPage(gotPageOfBooks,)

const books = [];

function gotPageOfBooks(records, fetchNextPage) {
  console.log("gotPageOfBooks()");

  books.push(...records);

  fetchNextPage();
}

function gotAllBooks(err) {
  console.log("gotAllBooks()");

  if (err) {
    console.log("error loading books");
    console.error(err)
    return;
  }


  consoleLogBooks();
}

function consoleLogBooks() {
  console.log("consoleLogBooks()");
  books.forEach((book) => {
    console.log("Book:", book);
    });
}