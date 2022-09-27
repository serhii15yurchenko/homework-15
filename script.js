// МІНІМУМ
// // Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), 
// // передбач можливість введення невірних даних.

let userAge = +prompt('Enter your age?');
if (isNaN(userAge)) {
    console.log('It is not a numerical value') 
} else {
    if (userAge < 0) {
        console.log('Please input correct age');
    } else if (userAge === 0 || userAge <= 11) {
        console.log('You are child');
    } else if (userAge < 18) {
        console.log('You are teenager');
    } else if (userAge < 59) {
        console.log('You are adult');
    } else if (userAge <= 120) {
        console.log('You are pensioner');
    } else {
        console.log('Please input correct age');
    }
}

// // Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

let number = +prompt('Введіть число від 0 до 9', 0);
if (isNaN(number)) {
    alert('Це не числове значення, введіть число')
} else {
    if (number < 0 || number > 9) {
        alert('Введіть число від 0 до 9');
    } else if (number === 1) {
        alert('Спецсимвол, який розташований на цій клавіші - "!"')
    } else if (number === 2) {
        alert('Спецсимвол, який розташований на цій клавіші - "@"')
    } else if (number == 3) {
        alert('Спецсимвол, який розташований на цій клавіші - "#"')
    } else if (number == 4) {
        alert('Спецсимвол, який розташований на цій клавіші - "$"')
    } else if (number == 5) {
        alert('Спецсимвол, який розташований на цій клавіші - "%"')
    } else if (number == 6) {
        alert('Спецсимвол, який розташований на цій клавіші - "^"')
    } else if (number == 7) {
        alert('Спецсимвол, який розташований на цій клавіші - "&"')
    } else if (number == 8) {
        alert('Спецсимвол, який розташований на цій клавіші - "*"')
    } else if (number == 9) {
        alert('Спецсимвол, який розташований на цій клавіші - "("')
    } else if (number == 0) {
        alert('Спецсимвол, який розташований на цій клавіші - ")"')
    } 
}



// // Підрахуй суму всіх чисел в заданому користувачем діапазоні.

let min = +prompt('Enter first number');
let max = +prompt('Enter second number');
sum = 0;

if (isNaN(min) || isNaN(max)) {
    alert('It is not a numerical value');
} else {
    for (i = min; i < max; i++) {
        sum = sum + i;
    }
    console.log(sum);
}


// Запитай у користувача 2 числа і знайди найбільший спільний дільник.

let firstNumber = +prompt('Введіть перше число', 0);
let secondNumber = +prompt('Введіть друге число', 0);
let thirdNumber;
while(firstNumber != secondNumber) {
    if (firstNumber > secondNumber) {
        firstNumber = firstNumber - secondNumber;
    }
    else {
        secondNumber = secondNumber - firstNumber;
    }
}
thirdNumber = firstNumber;
alert(`Найбільшим спільним дільником є ${thirdNumber}`);

// Запитай у користувача число і виведи всі дільники цього числа.

let userNumber = +prompt('Введіть число:', 0);
for (let i = 1; i <= userNumber; i++) {
    if (userNumber % i == 0) {
        alert(`Дільником Вашого числа є ${i}`);
    }
}

// НОРМА
// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

let number1 = prompt('Введіть п’ятирозрядне число') 
if (number1.length > 5 || number1.length < 5) {
    console.log ('Введіть п’ятирозрядне число');
} 
else if (number1[0] === number1[4] || number1[1] === number1[3]) {
    console.log(`${number1} - паліндром`);
} else {
    console.log(`${number1} - не паліндром`);
}

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

let buy = +prompt(`Введіть суму покупки`, 0);
if (buy === 0) {
    alert(`Введіть суму покупки`);
} else if (buy < 200) {
    alert (`До сплати ${buy}`);
} else if (buy <= 300) {
    alert(`До сплати ${buy * 0.97}, знижка 3%`)
} else if (buy <= 500) {
    alert(`До сплати ${buy * 0.95}, знижка 5%`)
} else if (buy > 500) {
    alert(`До сплати ${buy * 0.93}, знижка 7%`)
}

// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, 
// від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. 
// Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

let positive = 0;
let negative = 0;
let zero = 0;
let even = 0;
let odd = 0;
alert ('Ввeдіть 10 чисел');
for (i = 0; i < 10; i++) {
    let num = +prompt ('Введіть число');
    if (num > 0) {
        positive = positive + 1;
    } else if (num === 0) {
        zero = zero + 1;
    } else if (num < 0) {
        negative = negative + 1;
    }
    if (num != 0 && num % 2 == 0) {
        even = even + 1;
    } else if (num % 2) {
        odd = odd + 1;
    }
}
console.log(`Додатніх чисел - ${positive}`);
console.log(`Від’ємних чисел - ${negative}`);
console.log(`Нулів - ${zero}`);
console.log(`Парних чисел - ${even}`);
console.log(`Непарних чисел - ${odd}`);



// Зацикли відображення днів тижня таким чином: 
// «День тижня. Хочеш побачити наступний день? 
// » і так до тих пір, поки користувач натискає OK.

let day1;
let monday = 'Monday';
let tuesday = 'Tuesday';
let wednesday = 'Wednesday';
let thursday = 'Thursday';
let friday = 'Friday';
let saturday = 'Saturday';
let sunday = 'Sunday';
while (true) {
    if (day1 = monday) {
        confirm(`${day1}. Хочеш побачити наступний день?`);
    }
    if (day1 = tuesday) {
        confirm(`${day1}. Хочеш побачити наступний день?`);
    }
    if (day1 = wednesday) {
        confirm(`${day1}. Хочеш побачити наступний день?`);
    }
    if (day1 = thursday) {
        confirm(`${day1}. Хочеш побачити наступний день?`);
    }
    if (day1 = friday) {
        confirm(`${day1}. Хочеш побачити наступний день?`);
    }
    if (day1 = saturday) {
        confirm(`${day1}. Хочеш побачити наступний день?`);
    }
    if (day1 = sunday) {
        confirm(`${day1}. Хочеш побачити наступний день?`);
        break;
    }
}



// Максимум

// Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і 
// відгадай його наступним способом: 
// кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай 
// у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, 
// зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. 
// Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. 
// І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").

let guess = alert('Загадайте число від 0 до 100');
let maximum = 100;
let minimum = 0;
while (true) {
    let middle = Math.floor((minimum + maximum) / 2);
    let answer = prompt(`Ваше число >, < чи =  ${middle}`)
    if (answer == '=') {
        alert(`Ваше число ${middle} !`);
        break;
    } else if (answer == '>') {
        minimum = middle;
    } else if ( answer == '<') {
        maximum = middle;
    }
};



// Виведи таблицю множення для всіх 
// чисел від 2 до 9. Кожне число 
// необхідно помножити на числа від 1 до 10.

let numberUser = +prompt(`Введіть число від 2 до 9`);
    if (numberUser < 2 || numberUser > 9) {
        console.log (`Помилка! Введіть число від 2 до 9`);
    } else {
            for (i = 1; i <=10; i++) {
                let result = numberUser * i;
                console.log(`${numberUser} * ${i} = ${result}`);
            }
    }


// Запитай дату (день, місяць, рік) і виведи 
// наступну за нею дату. Враховуй можливість переходу 
// на наступний місяць, рік, а також високосний рік.

let day = +prompt('Введіть дату');
let month = +prompt('Введіть місяць');
let year = +prompt('Введіть рік');

if (isNaN(day) || isNaN(month) || isNaN(year)) {
    alert('Неправильно введені дані');
} else {
    if (month > 12) {
        alert('Неправильно введений місяць');
    } else {
        if (day < 30 && month != 2) {
            day = day + 1;
        } else if (day === 28 && month === 2) {
            if (year % 4 === 0) {
                day = 29;
                month = 2;
            } else {
                day = 1;
                month = 3;
            }
        } else if (month == 4 || month == 6 || month == 9 || month == 11) {
            day = 1;
            month = month + 1;
        } else if (day === 31 && month === 12) {
            month = 1;
            year = year + 1;
            day = 1;
        }
    }
}

alert(`${day} ${month} ${year}`)


