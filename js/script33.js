const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];

// Доповни функцію isAnyUserActive(users) таким чином,
// щоб вона перевіряла наявність активних користувачів
// (властивість isActive) і повертала true або false.

//ТЕСТИ

// Оголошена функція isAnyUserActive(users)
// Для перебирання параметра users використовується метод some()
// Виклик функції із зазначеним масивом користувачів повертає true
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// // Change code below this line
// const isAnyUserActive = users => {

// };
// // Change code above this line

// ------------------ВИКОНАНИЙ КОД ----------------------//

const isAnyUserActive = (users) => users.some((user) => user.isActive);

console.log(isAnyUserActive(users)); //true
