// Нашому сервісу необхідно розрахувати середній час,
//проведений в одній грі для кожного гравця, і отримати
//загальну суму цих значень часу.Розрахувати час для
//кожного з гравців можна, розділивши його час(властивість playtime)
//на кількість ігор(властивість gamesPlayed).

//ТЕСТИ

// Оголошена змінна players
// Значення змінної players - це масив об'єктів гравців
// Оголошена змінна totalAveragePlaytimePerGame
// Значення змінної totalAveragePlaytimePerGame - це число 1023
// Для перебирання масиву players використовується метод reduce()

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players;

// ------------------ВИКОНАНИЙ КОД ----------------------//

const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce(
  (first, secnd) => first + secnd.playtime / secnd.gamesPlayed,
  0
);

console.log(totalAveragePlaytimePerGame); //1023
