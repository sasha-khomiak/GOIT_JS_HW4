// Онлайн бібіліотеці необхідно відображати книги,
// відсортовані за датою видання, за її зростанням або спаданням.
// Доповни код таким чином, щоб у змінній ascendingReleaseDates
// вийшла копія масиву releaseDates, відсортована за зростанням,
// а у змінній descendingReleaseDates - копія, відсортована за спаданням.

//ТЕСТИ

// Оголошена змінна releaseDates
// Значення змінної releaseDates - це масив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Оголошена змінна ascendingReleaseDates
// Значення змінної ascendingReleaseDates - це масив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Оголошена змінна descendingReleaseDates
// Значення змінної descendingReleaseDates - це масив [2016, 2012, 2008, 1997, 1984, 1973, 1967]
// Використаний метод sort()

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = releaseDates;

// const descendingReleaseDates = releaseDates;

// ------------------ВИКОНАНИЙ КОД ----------------------//

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

const ascendingReleaseDates = releaseDates.sort((a, b) => a - b);

const descendingReleaseDates = releaseDates.sort((a, b) => b - a);

console.log(releaseDates); //масив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
console.log(ascendingReleaseDates); //[1967, 1973, 1984, 1997, 2008, 2012, 2016]
console.log(descendingReleaseDates); //масив [2016, 2012, 2008, 1997, 1984, 1973, 1967]

// Онлайн бібіліотеці необхідно відображати книги,
// відсортовані за датою видання, за її зростанням або спаданням.
// Доповни код таким чином, щоб у змінній ascendingReleaseDates
// вийшла копія масиву releaseDates, відсортована за зростанням,
// а у змінній descendingReleaseDates - копія, відсортована за спаданням.
