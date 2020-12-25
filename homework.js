/*1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3
Почему код даёт именно такие результаты?*/

//Ответ:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 Т.к. префиксная форма - сначала инкрементирование (a+1), потом возврат
d = b++; alert(d);           // 1 Т.к. постфиксная форма, сначала возврат заданного b, потом инкрементирование
c = (2 + ++a); alert(c);      // 5 вначале инкрементирование а (2+1), затем сложение с 2
d = (2 + b++); alert(d);      // 4 b инерементировано после вывода в строке 3, здесь складывается с 2
alert(a);                    // 3 а равно 3 в строке 4, здесь просто выводится
alert(b);                    // 3 b равно 2 в строке 5, но с помощь постфиксной формы становится 3 после вывода, поэтому тут выводится уже 3


/*2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
Ответ:
выполнение кода в консоли показывает результат 5.*/

/*3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; 
ноль можно считать положительным числом.
4. Присвоить переменной а значение в промежутке [0..15]. 
С помощью оператора switch организовать вывод чисел от a до 15. ### 
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
Обязательно использовать оператор return. 
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch). 
7) *Сравнить null и 0. Попробуйте объяснить результат. 
8) *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.*/

//3
var a = 3, b = 5;
if (a > 0 && b > 0) {
    console.log(a - b);
}
else if (a < 0 && b < 0) {
    console.log(a * b);
}
else if (a < 0 && b > 0 || a > 0 && b < 0) {
    console.log(a + b);
}

//4 in progress

//5
function addition(a, b) {
        let c = a + b;
        return c
    }

function substraction(a, b) {
        let c = a - b;
        return c
    }

function multiplication(a, b) {
        let c = a * b;
        return c
    }

function division(a, b) {
        let c = a / b;
        return c
    }

console.log(addition(2, 3))
console.log(substraction(2, 3))
console.log(multiplication(2, 3))
console.log(division(2, 3))
//6
let x = "сложение";
let y = "вычитание";
let z = "умножение";
let t = "деление";
function mathOperation(arg1, arg2, operation) {
            switch (operation) {
                case x:
                    console.log(addition(arg1, arg2));
                    break;
                case y:
                    console.log(substraction(arg1, arg2));
                    break;
                case z:
                    console.log(multiplication(arg1, arg2));
                    break;
                case t:
                    console.log(division(arg1, arg2));
                    break;
                default:
                    break;
            }
        }
console.log(mathOperation(5, 7, x));
console.log(mathOperation(5, 7, y));
console.log(mathOperation(5, 7, z));
console.log(mathOperation(5, 7, t));
//7 in progress
//8 in progress
