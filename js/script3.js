// Доповни другий виклик функції makePizza(pizzaName, callback),
// передавши другим аргументом інлайн колбек -
// функцію eatPizza(pizzaName), яка логує рядок "Eating pizza <назва піци>".

//ТЕСТИ

// Оголошена функція makePizza
// Функція makePizza приймає два параметри
// Другим аргументом під час виклику makePizza("Ultracheese")
// передана функція eatPizza з єдиним параметром pizzaName

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese");

// ------------------ВИКОНАНИЙ КОД ----------------------//

function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});
// Change code below this line

makePizza("Ultracheese", function eatPizza(pizzaName) {});
