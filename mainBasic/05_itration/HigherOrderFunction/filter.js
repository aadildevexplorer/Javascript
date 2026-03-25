// filter

// regular
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const data = num.filter((item) => item > 2);
// console.log(data);

// explicit return if you are using {} so you will have to use return keyword
// const nm = num.filter((ele) => {
//   return ele > 7;
// });
// console.log(nm);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const allBooks = books
  .filter((data) => data.publish > 2000)
  .map((data) => data.publish);
console.log(allBooks);

const book = books.filter((bk) => bk.genre === "History");
console.log(book);

// console.log(books[0].title)
