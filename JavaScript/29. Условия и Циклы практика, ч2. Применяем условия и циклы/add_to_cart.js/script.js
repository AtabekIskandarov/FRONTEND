// // let ttl = document.getElementsByClassName("ttl");
// // console.log(ttl[1].innerText);



// // // let desc_img = document.getElementsByClassName("desc_img");
// // // console.log(desc_img[0]);

// // let img = document.getElementsByTagName('img');
// // console.log(img[1]);

// // //  let price = document.getElementsByClassName("price");
// // //  console.log(price[0]);

// // let span = document.getElementsByTagName('span');
// // console.log(span[14].innerText);

// // let del = document.getElementsByTagName("del");
// // console.log(del[0].innerText);


// //  var arr = ["яблоко", "апельсин", "груша"]; 

// //  arr.forEach(function(item, i, arr){
// //      alert ( i + ": " + item + "(массив: " +arr + ")");
// //  });


// //  var arr = [1, -1, 2, -2, 3];

// //  var positiveArr = arr.filter(function(number) {
// //      return number > 0;
// //  });

// //  alert ( positiveArr ); //1,2,3

// // var names = ["HTML", "CSS", "JavaScript"];

// // var nameLengths = names.map(function(name) {
// //     return name.length; 
// // });

// // // ПОЛУЧИЛИ МАССИВ С ДЛИНАМИ 
// // alert ( nameLengths ); //4,3,10

// // var arr = [1, -1, 2, -2, 3];

// // function isPositive(number) {
// //     return number > 0;
// // }

// // alert( arr.every(isPositive ) ); //false не все положительные
// // alert( arr.some(isPositive ) ); // true есть хоть одно положительное 

// // var arr = [1,2,3,4,5];

// // //для каждого элемента массива запустить функцию
// // //промежуточный резлуьтат передавать первым аргументом далее 
// // var result  = arr.reduce(function(sum, current) {
// //     return sum + current;
// // }, 0); 

// // alert( result ); //15

// let ttl = document.querySelectorAll(".body_product > .ttl");
// console.log(ttl[1].innerText);
// console.log(ttl[0].innerText);
// console.log(ttl[4].innerText);

// let ttl = document.querySelectorAll(".body_product > .ttl");

// for (let text of ttl) {
//     console.log(text.innerText);
// }

// var elements  = document.getElementsByClassName("add_cart");

// var myFunction = function() {
//     var attribute = this.parentNode.parentNode.parentNode.querySelectorAll("ttl");
//     alert (attribute[0].innerText);
// }; 

// for (var i = 0; i < elements.length; i++) { 
//     elements[i].addEventListener("click", myFunction, false);
// }
// var elements = document.getElementsByClassName('ttl');

// var myFunction = function() {
//     var attribute = this.parentNode.querySelectorAll('ttl');
//     alert(attribute[0] .innerText);
// };

// for (var i = 0; i < elements.length; i++) { 
//         elements[i].addEventListener("click", myFunction, false);
//     }

// let ttl = document.getElementsByClassName('ttl');
// ttl.textContent = ('Жакет из крепа с помпоном');

var elements  = document.getElementsByClassName("add_cart");
