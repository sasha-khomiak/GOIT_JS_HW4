// Доповни функцію makeMessage таким чином,
// щоб вона очікувала другим параметром(параметр callback) колбек
// - функцію і повертала її виклик.Функція deliverPizza
// або makePizza буде передаватися як колбек і очікувати
// аргументом ім'я готової піци, що доставляється.

//ТЕСТИ

// Оголошена функція deliverPizza
// Оголошена функція makePizza
// Оголошена функція makeMessage
// Функція makeMessage приймає два параметри, названі відповідно до завдання, pizzaName і callback
// Виклик makeMessage("Royal Grand", makePizza) повертає рядок "Pizza Royal Grand is being prepared, please wait..."
// Виклик makeMessage("Ultracheese", deliverPizza) повертає рядок "Delivering Ultracheese pizza."

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName) {
//   return;
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Chande code below this line
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

console.log(makeMessage("Royal Grand", makePizza));
// повертає рядок "Pizza Royal Grand is being prepared, please wait..."

console.log(makeMessage("Ultracheese", deliverPizza));
// повертає рядок "Delivering Ultracheese pizza."
