// Доповни код таким чином, щоб у змінній ascendingReleaseDates
// вийшла копія масиву releaseDates, відсортована за зростанням,
// а у змінній alphabeticalAuthors - копія масиву імен авторів authors,
// відсортована за алфавітом.

//ТЕСТИ

// Оголошена змінна releaseDates
// Значення змінної releaseDates - це масив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Оголошена змінна authors
// Значення змінної authors - це масив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]
// Оголошена змінна ascendingReleaseDates
// Значення змінної ascendingReleaseDates - це масив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Оголошена змінна alphabeticalAuthors
// Значення змінної alphabeticalAuthors - це масив ["Bernard Cornwell", "Tanith Lee", "Robert Sheckley", "Fyodor Dostoevsky"]
// Використаний метод sort()

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = releaseDates;

// const alphabeticalAuthors = authors;

// ------------------ВИКОНАНИЙ КОД ----------------------//

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

const alphabeticalAuthors = [...authors].sort((a, b) => a.localeCompare(b));

console.log(releaseDates); //масив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
console.log(authors); // масив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]
console.log(ascendingReleaseDates); //масив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
console.log(alphabeticalAuthors); //масив ['Bernard Cornwell', 'Fyodor Dostoevsky', 'Robert Sheckley', 'Tanith Lee']
