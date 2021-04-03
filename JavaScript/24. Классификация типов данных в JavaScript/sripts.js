// создайте объект person, этот объект должен содержать данные о человеке, 
// например имя, фамилие, возраст, год рождение, место рождение и.т.д. 

var person = {
    name: "Atabek",
    Surname: "Iskandarov",
    Age: 37,
    DateOfBirth: 1983,
    PlaceOfBirth: "Kyrgyz USSR"
};

console.log (person.name, person.Surname, person.DateOfBirth, person.PlaceOfBirth);



// создайте массив, внутри массива запишите несколько данных 

var notebooks = ['Honor MagicBook', 'Lenovo', 'HP', 'Dell', 'McBook Air', 'samsung', 'asus'];
console.log(notebooks[4]);



// Объекты внутри массива

var laptop = [
    {notebook: "Honor MagicBook", price: '1100$'},
    {notebook: 'Lenovo', price: '800$'},
    {notebook: 'HP', price: '770$'},
    {notebook: 'Dell', price: '1000$'},
    {notebook: 'McBook Air', price: '1800$'},
    {notebook: 'samsung', price: '900$'},
    {notebook: 'asus', price: '700$'},
];

console.log(laptop[4]);


