const number1 = "Задание номер 1";
console.log(number1);
const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    numberOfPages: 281,
    genre: "Fiction",
    awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"],
  },
  {
    title: "1984",
    author: "George Orwell",
    numberOfPages: 328,
    genre: "Dystopian",
    awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"],
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    numberOfPages: 180,
    genre: "Classic",
    awards: ["Modern Library's Top 100", "National Book Award Nominee"],
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    numberOfPages: 635,
    genre: "Adventure",
    awards: ["Regarded as a Great American Novel", "Part of the Western Canon"],
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    numberOfPages: 432,
    genre: "Romance",
    awards: ["BBC's Big Read", "Guardian's 100 Best Novels"],
  },
];

for (let i = 0; i < books.length; i++) {
  const book = books[i];

  console.log(
    `Название: ${book.title}, Автор: ${book.author}, Количество страниц: ${book.numberOfPages}, Жанр: ${book.genre}`,
  );

  console.log("Награды:");

  for (let j = 0; j < book.awards.length; j++) {
    console.log(` - ${book.awards[j]}`);
  }

  console.log("-----------------------");
}

function calculateAveragePages(booksArray) {
  if (booksArray.length === 0) return 0; // Защита от деления на ноль, если массив пустой

  let totalPages = 0;

  for (let i = 0; i < booksArray.length; i++) {
    totalPages += booksArray[i].numberOfPages;
  }

  const average = totalPages / booksArray.length;

  return average;
}

// Вызываем функцию, выводим результат
const avg = calculateAveragePages(books);
console.log(`Среднее количество страниц во всех книгах: ${avg}`);

const number2 = "Задание номер 2";
console.log(number2);
function repeatString(str, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
}

let userText = prompt("Введите слово");
let count = Number(prompt("Сколько раз повторить?"));

// Проверяем, ввел ли пользователь число
if (isNaN(count)) {
  alert("Ошибка: введите число в поле количества!");
} else {
  // Используем функцию и выводим результат
  let finalResult = repeatString(userText, count);
  console.log("Результат:");
  console.log(finalResult);
  alert(finalResult);
}

const number3 = "Задание номер 3";
console.log(number3);

function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
}

// Проверка работы функции
const input = [10, 20, 30, 40, 50, 60];
const result = calculateAverage(input);

console.log(`Input: [${input}]`);
console.log(`Output: ${result}`);

const number4 = "Задание номер 4";
console.log(number4);

/**
 * Функция для фильтрации чётных чисел
 * @param {number[]} numbers - Массив чисел
 * @returns {number[]} - Новый массив, содержащий только чётные числа
 */
function countEvenNumbers(numbers) {
  let evenNumbers = []; // Создаем пустой массив для хранения результата

  for (let i = 0; i < numbers.length; i++) {
    // Проверяем: делится ли число на 2 без остатка
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]); // Если да, добавляем его в наш новый массив
    }
  }

  return evenNumbers;
}

// Проверка:
const input2 = [1, 2, 3, 4, 5, 6];
const output2 = countEvenNumbers(input2);

console.log("Input:", input2);
console.log("Output:", output2); // [2, 4, 6]
