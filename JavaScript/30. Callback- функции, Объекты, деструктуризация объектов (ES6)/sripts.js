// // // var years = prompt('How old are you?', "");
// // // alert ('You are ' + years + ' years old!');

// // // promt - состоит из 2х частей
// // // 1-я часть - вопрос
// // // 2-я часть - ответ по умолчанию 
// // // prompt - запоминает данные, для дальнейшей обработки

// // // alert('Welcome, guest'); 
// // // модальное окно - системное - дизайн изменить нельзя

// // // var result = prompt ('Сколько будет 2+2?', "");
// // // result = result+2;
// // // alert ('Вам ' + result + ' лет!');

// // var result = prompt ('Сколько будет 2+2?', "");

// // var msg;
// // if(result == 4) {
// //     msg = 'Верно';
// // } else {
// //     msg = 'Неверно';
// // }

// // alert(msg);

//             // ---------------------------------------------

//                                 // HOMEWORK
//             // Сделайте скрипт который запрашивает у пользователя ввести ИМЯ и ФАМИЛИЯ, 
//             // вы должны получить эти данные и вывести это на консоли

// var FirstName = prompt('What is your name?', "");
// var SecondName = prompt('What is your surname?', "");

// alert('You are Atabek Iskandarov');
// alert("Welcome, mr. Atabek Iskandarov"); 
//             // ---------------------------------------------

//             // Сделайте скрипт который запрашивает ввести два числа
//             // и вывести сумму этих двух чисел

// let a = +prompt("Введите первое число", "");
// let b = +prompt("Введите второе число", "");
            
// alert (a+b);

//             // Сделайте скрипт который запрашивает ввести два числа 
//             // и вывести умножение этих чисел  

// let x = prompt("Введите первое число", "");
// let y = prompt("Введите первое число", "");

// alert (x * y);

                        // УРОК 26
        // Условные операторы
        // важно знать!
        // Операции сравнения всегда будут возвращать одно из следующих значений
        // True - 
        // False - 

    // alert(2>3);

                // УСЛОВНИЕ ОПЕРАТОРЫ
    // IF - если
    // ELSE - в противном случае

    // ЕСЛИ 2 равно 2, то выполни слуд условию, выведи на экран "ОТВЕТ ВЕРНЫЙ"
    // В ПРОТИВНОМ СЛУЧАЕ выведи на экран "ОТВЕТ НЕВЕРНЫЙ!"

                // ЕСЛИ 2 равно 2                      - if(2==2)
                // то выполни слуд условию             - {}
                // выведи на экран "ОТВЕТ ВЕРНЫЙ"      - alert("ОТВЕТ ВЕРНЫЙ")
                // В ПРОТИВНОМ СЛУЧАЕ                  - else{}
                // выведи на экран "ОТВЕТ НЕВЕРНЫЙ!"   - else{}( "ОТВЕТ НЕВЕРНЫЙ!")



//    if (2==2){
//     alert("ОТВЕТ ВЕРНЫЙ");
//    } else {
//     alert("ОТВЕТ НЕВЕРНЫЙ!");
//    }

let ttl = document.getElementsByClassName("ttl");
console.log(ttl[0].innerText);


// let desc_img = document.getElementsByClassName("desc_img");
// console.log(desc_img[0]);

let img = document.getElementsByTagName('img');
console.log(img[1]);

//  let price = document.getElementsByClassName("price");
//  console.log(price[0]);

let span = document.getElementsByTagName('span');
console.log(span[14].innerText);

let del = document.getElementsByTagName("del");
console.log(del[0].innerText);

