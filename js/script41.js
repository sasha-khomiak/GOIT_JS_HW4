// Доповни код таким чином, щоб:

// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.

//ТЕСТИ

// Оголошена змінна books
// Значення змінної books - це вихідний масив об'єктів книг
// Оголошена змінна sortedByAuthorName
// Значення змінної sortedByAuthorName - це масив книг, відсортований за ім'ям автора в алфавітному порядку
// Оголошена змінна sortedByReversedAuthorName
// Значення змінної sortedByReversedAuthorName - це масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку
// Оголошена змінна sortedByAscendingRating
// Значення змінної sortedByAscendingRating - це масив книг, відсортований за зростанням рейтингу
// Оголошена змінна sortedByDescentingRating
// Значення змінної sortedByDescentingRating - це масив книг, відсортований за спаданням рейтингу
// Для перебирання масиву books використовується метод sort()

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = books;

// const sortedByReversedAuthorName = books;

// const sortedByAscendingRating = books;

// const sortedByDescentingRating = books;

// ------------------ВИКОНАНИЙ КОД ----------------------//

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

// У змінній sortedByAuthorName вийшов масив книг,
// відсортований за ім'ям автора в алфавітному порядку.
const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
  firstAuthor.author.localeCompare(secondAuthor.author)
);

// У змінній sortedByReversedAuthorName вийшов масив книг,
// відсортований за ім'ям автора у зворотному алфавітному порядку.
const sortedByReversedAuthorName = [...books].sort(
  (firstAuthor, secondAuthor) =>
    secondAuthor.author.localeCompare(firstAuthor.author)
);

// У змінній sortedByAscendingRating вийшов масив книг,
// відсортований за зростанням рейтингу.
const sortedByAscendingRating = [...books].sort(
  (firstRating, secondRating) => firstRating.rating - secondRating.rating
);

// У змінній sortedByDescentingRating вийшов масив книг,
// відсортований за спаданням рейтингу.
const sortedByDescentingRating = [...books].sort(
  (firstBook, secondBook) => secondBook.rating - firstBook.rating
);

console.log("масив books:", books);
console.log("масив sortedByAuthorName:", sortedByAuthorName);
console.log("масив sortedByReversedAuthorName:", sortedByReversedAuthorName);
console.log("масив sortedByAscendingRating:", sortedByAscendingRating);
console.log("масив sortedByDescentingRating:", sortedByDescentingRating);
