// Доповни код таким чином, щоб у змінній result був
// результат виконання функції makePizza,
// а у змінній pointer було посилання на функцію makePizza.

//ТЕСТИ

// Оголошена функція makePizza
// Оголошена змінна result
// Значення змінної result - це рядок "Your pizza is being prepared, please wait."
// Значення змінної result отримане за допомогою виклику функції
// Оголошена змінна pointer
// Значення змінної pointer - це посилання на функцію makePizza

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = null;
// const pointer = null;

// ------------------ВИКОНАНИЙ КОД ----------------------//

function makePizza() {
  return "Your pizza is being prepared, please wait.";
}
// Change code below this line

const result = makePizza();
const pointer = makePizza;

console.log(result);
console.log(pointer);
