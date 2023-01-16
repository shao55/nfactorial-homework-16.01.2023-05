// Тренируемся общаться с пользователем посредством alert / confirm / prompt
let user = {};
user.name = prompt("Как вас зовут?", "");
user.age = prompt("Сколько вам лет?", "");
user.sex = prompt("Вы мужчина или женщина?", "");
console.log(user);

// Работа с операторами
let num = prompt("Введите число!", "1");
let toNum = Number(num);
if (toNum === Number(num)) {
    alert(toNum);
} else {
    alert("Вы ввели не число! Попробуйте еще!");
};

// Работа с условиями
let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a) // number

switch (a) {
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert( '2,3' );
};

// Посчитайте сумму всех четных чисел в промежутке 1-100. Выведите в консоль
let sum = 0;
for (i = 1; i <=100; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}
console.log(sum);

// Перепишите цикл for на while
let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++
};

