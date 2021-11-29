// Task 6
let input;
const numbers = [];
let total = 0;

do {
    input = Number(prompt("Ввести число"));
    if (!isNaN(input) && input !== 0) {
        numbers.push(input);
    }
} while (isNaN(input) || input);

for (const number of numbers) {
    total += number;
}
console.log(`Общая сумма чисел равна ${total}`);
