// Виконай рефакторинг функції calculateTotalPrice()
// таким чином, щоб вона використовувала неявне повернення.

//ТЕСТИ

// Оголошена змінна calculateTotalPrice
// Змінній calculateTotalPrice присвоєна стрілочна функція з параметрами (quantity, pricePerItem)
// У функції використане неявне повернення
// Виклик calculateTotalPrice(5, 100) повертає 500
// Виклик calculateTotalPrice(8, 60) повертає 480
// Виклик calculateTotalPrice(3, 400) повертає 1200
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };
// // Change code above this line

// ------------------ВИКОНАНИЙ КОД ----------------------//

// Change code below this line
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// Change code above this line

console.log(calculateTotalPrice(5, 100)); // Виклик  повертає 500
console.log(calculateTotalPrice(8, 60)); // Виклик  повертає 480
console.log(calculateTotalPrice(3, 400)); // Виклик  повертає 1200
