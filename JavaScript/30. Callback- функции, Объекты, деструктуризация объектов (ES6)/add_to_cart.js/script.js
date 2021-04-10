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

// // for (var i = 0; i < elements.length; i++) { 
// //         elements[i].addEventListener("click", myFunction, false);
// //     }

// // let ttl = document.getElementsByClassName('ttl');
// // ttl.textContent = ('Жакет из крепа с помпоном');

// // var elements  = document.getElementsByClassName("add_cart");

// // function test_fun(param, param1, param2, param3){
// //     var number = 10;
// //     var res;

// //     res = number + param - param1 * param2 / param3;
// //     alert(res);
// // }

// // test_fun(20, 2, 5, 2);

// const arr = {
//     name: "Atabek",
//     surname: "Iskandarov",
//     age: 37,
//     location: "St.Petersburg",
//     status: "FRONTEND student",
//     param: {
//         meritalStatus: "divorced", 
//         children: "one",
//         work: "yes",
//         bankAccount: "N/A"
//     }
// };

// // console.log(arr.surname);

// // delete arr.surname;

// // console.log(arr);

// for (key in arr){ 

//     if(typeof(arr[key]) === 'object'){
//         for (let key2 in arr[key]) {
//             console.log(arr[key] [key2]);
//         }
//     } else {
//         console.log(arr[key]);
//     }
    
 
// function min( a, b ){
//     alert( (a<b)? a : b );
//     }
    
//     Min(1, 1);

//  console.log(min);

// const arr = [-20, 10, 5, -2];
// Math.min.apply(null, arr);
// Math.min(...arr);
// console.log(min);

// const a = 120;
//       b = 110;

// Math.min(a,b);

// console.log(min);

// function min(a, b) {
//     if (a < b)
//     return a;
//     else
//     return b;
// }
// console.log(min(88, 90));
//   // → 88
// console.log(min(7, -24));
//   // → -24

// var radius = 10;
// var circleLength = 2*Math.PI*radius;
// var circleSquare = Math.PI*Math.pow(radius, 2);
// console.log("Длина окружности равна " + сircleLength.toFixed(2));
// console.log("Площадь круга равна " + сircleSquare.toFixed(2));

function result (radius){
    var circle = {
    square: function (){
    return Math.PI * Math.pow(radius, 2)
},
    length: function (){
    return Math.PI * 2 * radius;
}
};
    return[circle.square(),circle.length()];
}
 
    var answer = result (2);
    console.log (answer);

