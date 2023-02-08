// Необхідно написати логіку обробки замовлення піци.
// Виконай рефакторинг методу order таким чином, щоб
// він приймав другим і третім параметром два колбеки onSuccess і onError.

// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName,
// метод order повинен повертати результат виклику колбека onError,
// передаючи йому аргументом рядок "There is no pizza with
// a name < имя пиццы > in the assortment."
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName,
// метод order повинен повертати результат виклику колбека onSuccess,
// передаючи йому аргументом назву замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і
// виклики методів.Будь ласка, нічого там не міняй.

//ТЕСТИ

// Метод order оголошує три параметри
// Виклик pizzaPalace.order("Smoked", makePizza, onOrderError) повертає "Your order is accepted. Cooking pizza Smoked."
// Виклик pizzaPalace.order("Four meats", makePizza, onOrderError) повертає "Your order is accepted. Cooking pizza Four meats."
// Виклик pizzaPalace.order("Big Mike", makePizza, onOrderError) повертає "Error! There is no pizza with a name Big Mike in the assortment."
// Виклик pizzaPalace.order("Vienna", makePizza, onOrderError) повертає "Error! There is no pizza with a name Vienna in the assortment."

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName) {},
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// ------------------ВИКОНАНИЙ КОД ----------------------//

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, callback1, callback2) {
    for (let pizza of this.pizzas) {
      if (pizzaName === pizza) {
        return callback1(pizzaName);
      }
    }
    return callback2(pizzaName);
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! There is no pizza with a name ${error} in the assortment.`;
}

// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);

//ТЕСТИ

console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// повертає "Your order is accepted. Cooking pizza Smoked."

console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// повертає "Your order is accepted. Cooking pizza Four meats."

console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// повертає "Error! There is no pizza with a name Big Mike in the assortment."

console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));
// повертає "Error! There is no pizza with a name Vienna in the assortment."
