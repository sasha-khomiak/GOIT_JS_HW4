// Функція changeEven(numbers, value) приймає масив чисел numbers
// і оновлює кожен елемент, значення якого - це парне число,
// додаючи до нього значення параметра value.

// Виконай рефакторинг функції таким чином, щоб вона
// стала чистою - не змінювала масив чисел numbers,
// а створювала, наповнювала і повертала новий масив з оновленими значеннями.

//ТЕСТИ

// Оголошена функція changeEven(numbers, value)
// Функція changeEven не змінює значення параметра numbers
// Виклик changeEven([1, 2, 3, 4, 5], 10) повертає новий масив [1, 12, 3, 14, 5]
// Виклик changeEven([2, 8, 3, 7, 4, 6], 10) повертає новий масив [12, 18, 3, 7, 14, 16]
// Виклик changeEven([17, 24, 68, 31, 42], 100) повертає новий масив [17, 124, 168, 31, 142]
// Виклик changeEven([44, 13, 81, 92, 36, 54], 100) повертає новий масив [144, 13, 81, 192, 136, 154]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function changeEven(numbers, value) {
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   // Change code above this line
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

function changeEven(numbers, value) {
  // Change code below this line

  const array = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = numbers[i] + value;
    }
    array.push(numbers[i]);
  }

  return array;
  // Change code above this line
}

console.log(changeEven([1, 2, 3, 4, 5], 10)); //новий масив [1, 12, 3, 14, 5]
console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); //новий масив [12, 18, 3, 7, 14, 16]
console.log(changeEven([17, 24, 68, 31, 42], 100)); //новий масив [17, 124, 168, 31, 142]
console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); //новий масив [144, 13, 81, 192, 136, 154]
