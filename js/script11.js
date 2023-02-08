// Заміни оголошення функції filterArray()
// і колбек для методу forEach() на стрілочні функції.

//ТЕСТИ

// Оголошена змінна filterArray
// Змінній filterArray присвоєна стрілочна функція з параметрами (numbers, value)
// Для перебирання масиву numbers використаний метод forEach
// Колбек для методу forEach - це стрілочна функція
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// // Change code below this line
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

// Change code below this line

const filterArray = (numbers, value) => {
  const filteredNumbers = [];
  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  return filteredNumbers;
};

console.log(filterArray([1, 2, 3, 4, 5], 3)); //повертає [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // повертає [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); //повертає []
console.log(filterArray([12, 24, 8, 41, 76], 38)); //повертає [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); //повертає [24, 41, 76]
