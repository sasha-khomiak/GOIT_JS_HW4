// Доповни код таким чином, щоб у змінній evenNumbers утворився
// масив парних чисел з масиву numbers, а в змінній oddNumbers -
// масив непарних.Обов'язково використовуй метод filter().

//ТЕСТИ

// Оголошена змінна numbers
// Значення змінної numbers - це масив [17, 24, 82, 61, 36, 18, 47, 52, 73]
// Оголошена змінна evenNumbers
// Значення змінної evenNumbers - це масив [24, 82, 36, 18, 52]
// Оголошена змінна oddNumbers
// Значення змінної oddNumbers - це масив [17, 61, 47, 73]
// Для перебирання масиву numbers використаний метод filter()

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers;
// const oddNumbers = numbers;

// ------------------ВИКОНАНИЙ КОД ----------------------//

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2 !== 0);

console.log(numbers); //масив [17, 24, 82, 61, 36, 18, 47, 52, 73]
console.log(evenNumbers); //масив [24, 82, 36, 18, 52]
console.log(oddNumbers); //масив [17, 61, 47, 73]
