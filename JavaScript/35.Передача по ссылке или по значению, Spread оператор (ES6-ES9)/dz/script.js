const name = "Atabek";
const surname = "Iskandarov";
const city = "St.Petersburg";

function getPersonInfo() {
    const name = "Brat";
    const surname = "Pit";
    const allInfo = "Brat Pit lives in los Angeles, and Atabek Iskandarov lives in St.Petersburg";

    return [...name], [...surname],[...allInfo];
}
console.log (getPersonInfo());


// const obj = {
//     id1: {
//       name: 'Atabek',
//       age: 32,
//     },
//     id2: {
//       name: 'Olya',
//       age: 28,
//     },
//     id3: {
//       name: 'Stas',
//       age: 30,
//     },
//   };
   
//   // const { getUserInfo, getUsersIds } = db;
   
//   function getUsersIds(db) {
//     setTimeout(() => db(Object.keys(obj)), 500);
//   };
   
//   function getUserInfo(ids, db) {
//     setTimeout(() => db(Object.values(obj)), 1000);
//   }
   
//   function getUsersId(db, callback) {
//     let results;
   
//     ids.forEach((n, i) => {
//       getUserInfo(n, user => {
//         results[i] = user;
   
//         if (results.length === ids.length) callback(result);
//       });
//     });
//   };
   
   
//   getUsersIds((ids) => {
//     console.log(ids);
//   });
   
//   getUserInfo('someUserId', (userInfo) => {
//     console.log(userInfo);
//   });