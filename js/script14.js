// Доповни код таким чином, щоб у змінній planetsLengths
// вийшов масив довжин назв планет.Обов'язково використовуй метод map()

//ТЕСТИ

// Оголошена змінна planets
// Значення змінної planets - це масив ["Earth", "Mars", "Venus", "Jupiter"]
// Оголошена змінна planetsLengths
// Значення змінної planetsLengths - це масив [5, 4, 5, 7]
// Для перебирання масиву планет використаний метод map()

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets;

// ------------------ВИКОНАНИЙ КОД ----------------------//

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map((planet) => planet.length);

console.log(planetsLengths);
