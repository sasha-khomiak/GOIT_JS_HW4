// Ігровому сервісу необхідний функціонал підрахунку
//середнього часу, проведеного в іграх.Доповни код
// таким чином, щоб у змінній totalPlayTime вийшло
// загальний ігровий час з масиву playtimes.

//ТЕСТИ

// Оголошена змінна players
// Значення змінної players - це об'єкт гравців з ігровим часом кожного
// Оголошена змінна playtimes
// Значення змінної playtimes - це масив [1270, 468, 710, 244]
// Оголошена змінна totalPlayTime
// Значення змінної totalPlayTime - це число 2692
// Для перебирання масиву playtimes використовується метод reduce()
// Оголошена змінна averagePlayTime
// Значення змінної averagePlayTime - це число 673

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes;

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// ------------------ВИКОНАНИЙ КОД ----------------------//

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line

const totalPlayTime = playtimes.reduce((prev, comm) => prev + comm);

// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length;

console.log(playtimes); // масив [1270, 468, 710, 244]
console.log(totalPlayTime); //число 2692
console.log(averagePlayTime); //число 673
