// Виконай рефакторинг функції calculateTotalPrice() таким чином,
//     щоб вона була оголошена як стрілочна.

//ТЕСТИ

// Оголошена змінна calculateTotalPrice
// Змінній calculateTotalPrice присвоєна стрілочна функція з параметрами (quantity, pricePerItem)
// Виклик calculateTotalPrice(5, 100) повертає 500
// Виклик calculateTotalPrice(8, 60) повертає 480
// Виклик calculateTotalPrice(3, 400) повертає 1200
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// // Change code below this line

// function calculateTotalPrice(quantity, pricePerItem) {
//   // Change code above this line
//   return quantity * pricePerItem;
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

// Change code below this line

const calculateTotalPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
};

console.log(calculateTotalPrice(5, 100)); // Виклик  повертає 500
console.log(calculateTotalPrice(8, 60)); // Виклик  повертає 480
console.log(calculateTotalPrice(3, 400)); // Виклик  повертає 1200
