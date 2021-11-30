
// task30
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line
//  console.log("name".length);
//   return message;
// }
// getNameLength("Poly");
// getNameLength("Harambe");
// getNameLength("Billy");
// getNameLength("Joe");
 

// task32
// function getSubstring(string, length) {
//   const substring = "Hello world"; // Change this line
//  console.log(substring.slice(0, 2, substring.length));
//  console.log(substring.slice(0, 5, substring.length));
//   console.log(substring.slice(0, 7, substring.length));
//   console.log(substring.slice(11, substring.length));
//  console.log(substring.length);

//   return substring;
// }
// function getSubstring(string, length) {
  
//      const substring = string.slice(0, length); // Change this line


//   return substring;
// }
// task33

// result = message.length <= maxLength ? message : message.slice(0, maxLength) + "...";


// Modul 2  Task 11

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line  return message.split(" ").length;
 
// let result;
//   result = message.split(" ").length * pricePerWord;
// return result;
// }

// task16


// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line

//     let newArray = firstArray.concat(secondArray); 
  
//    if (newArray.length > maxLength) 
//    {
//      return newArray.slice(0, maxLength);
//    }
  
//   return newArray;
//   }

// task18

// function calculateTotal(number) {
//   let sum = 0; 
//   for (let i = 0; i <= number; i += 1) { sum += i; } 
  
//     return sum;
// }


// task19

  
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i+=1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }


// task20!!!!

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1){
//     total += order [i]
//   };
  //   return total;
// }


// task21!!!!


// function findLongestWord(string) {
//     // Change code below this line
  
//     let str = string.split(' ');
//     let longestWord = str[0];
  
//     for (let i = 0; i < str.length; i += 1) {
//         if (str[i].length > longestWord.length) {
//             longestWord = str[i];

//         }
//     }
  
//     return longestWord;
// }


// task22!!!!

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
  
//    for(let i=min; i <= max; i++ ){
     
//        numbers.push(i);
// }
//   return numbers;
// }

// task23!!!!

// function filterArray(numbers, value) {
//    // Change code below this line
   
//   const array = [];
//   for (let i= 0; i<numbers.length; i+=1) {
   
//     if (numbers[i] > value) {
//       array.push(numbers[i]);
//   }
//      }
   
//   return array;

// }


// // task25!!!!
// function getCommonElements(array1, array2) {

//   let commonArray = [];
  
//   for (const array of array1) {
//     if (array2.includes(array)) {
//       commonArray.push(array);
//     }

//   }

//  return commonArray;

// }


// task26!!!!

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const orders of order) {
//     console.log(orders);
//     total += orders;

//   }
//   return total;
// }

// task29!!!!


// function getEvenNumbers(start, end) {
//    // Change code below this line
//  let numbers = [];
//   for ( let i = start; i <= end; i+=1) {
     
//     if (i % 2 === 0) {
//       numbers.push(i);
//     }
//   }
//      return numbers;
//   }


// Module 3
// Task  7

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },

// };

// apartment.area = 60;
// apartment.rooms= 3;

//   apartment.location = {
//      country: "Jamaica",

//       city: "Kingston",
//   };
// console.log(apartment.location);
// console.log(apartment.area);
// console.log(apartment.rooms );

// Taask 10

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = []
// const values = [];

// for( let key in apartment) {
//  keys.push(key);
//   values.push(apartment[key]);

// }

// Task 11
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line}
//   if (apartment.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(apartment[key]);
  
//   keys.push(key);
//   values.push(apartment[key]);
//   }
//   // Change code above this line
// }


// Task 12 ?!

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
//      const keys = Object.keys(apartment);
//   console.log(keys);
//  for (const key of values) { 

//     values.push(key);

//  }
 
// Task 13 ?!

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
  
//    values.push(apartment[key]);
// }

//  Task 14
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
 
//   const keys = Object.keys(object);
  
//   for (let key of keys) {
//       propCount += 1;
    
//   }

//   return propCount;
//   // Change code above this line
// }

//  16
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line

//   const values = Object.values(salaries);
  
//   for (const value of values) {
//     totalSalary += value;
    
//   }
//   // Change code above this line#

//   return totalSalary;
// }

// 17
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];

//  for (const color of colors) {
//    hexColors.push(color.hex);
//    rgbColors.push(color.rgb);
//  }
// 18
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) {

//       return product.price 
//      }
//   }
//   return null;
  
//   // Change code above this line
// }
// 19
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//       const array = [];
//     for (const product of products) {

//     if (product.hasOwnProperty(propName)) {
//         array.push(product[propName]);
//     }
//  }
//   return array;
//   // Change code above this line
// }
// 20
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   for(const product of products) {
//     if(product.name === productName) {
//        return product.price *product.quantity;
//        }
  
//   }
//  return 0;

//   // Пиши код выше этой строки
// }
// 32
// Change code below this line
// function addOverNum( ...args) {
//   let total = 0;

//   for (let i= 0; i < args.length; i+=1) {
//       if (args[i] > args[0]){

//     total += args[i];
//       }
//   }

//   return total;
//   // Change code above this line
// }

// 33
// function findMatches(array, ...args) {
  
//   const matches = []; // Don't change this line
//   for(const arg of args) {
//     if(array.includes(arg)){
//      matches.push(arg);
//     }
//   }
//   // Change code above this line
//   return matches;
// }
// console.log(
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7),
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2),
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41),
// findMatches([63, 11, 8, 29], 4, 7, 16)
// );


// 35
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
    
//     const index = this.books.indexOf(oldName) ;
    
//     if (index > -1) {
//        this.books.splice(index, 1, newName);
// }
    
//   },
// };


// 39
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {

//      this.potions.splice( this.potions.indexOf(potionName), 1);

//     // Change code above this line
//   },
// };

// 41
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line

//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//      for(const potion of this.potions){
//     if (potion.name === newPotion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//      }

//     return this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
// for (let i=0; i < this.potions.length; i+=1){
//     if (this.potions[i].name === potionName) {
//         return  this.potions.splice(i, 1);
//     }
// }
//       return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
  //       const index = this.potions.indexOf(oldName);
//       for (const potion of this.potions) {
//       if (this.potions[index].name === oldName) {
//          return this.potion.splice(index, 1, newName.name);
//     }
//     }

//       return `Potion ${oldName} is not in inventory!`;
//   },
  
//   // Change code above this line
// };
// console.table(atTheOldToad);
// 41 Artem
//       const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 }
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     let potionIndex;
//     for (const index of this.potions.keys()) {
//       if (this.potions[index].name === potionName) {
//         potionIndex = index;
//       }
//     }

//     if (potionIndex) {
//       this.potions.splice(potionIndex, 1);
//     } else {
//       return `Potion ${potionName} is not in inventory!`;
//     }
//   },
//   updatePotionName(oldName, newName) {
//     let potionIndex;
//     let updatedPotion;
//     for (const index of this.potions.keys()) {
//       if (this.potions[index].name === oldName) {
//         potionIndex = index;
//         updatedPotion = this.potions[index];
//         updatedPotion.name = newName;
//       }
//     }
//     if (potionIndex) {
//       this.potions.splice(potionIndex, 1, updatedPotion);
//     } else {
//       return `Potion ${oldName} is not in inventory!`;
//     }
//   }
//   // Change code above this line
// };
// // console.log(atTheOldToad.getPotions());
// // console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// // console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.updatePotionName("new", "Polymorth"));
// console.log(atTheOldToad.getPotions());


// Practice
// const clients = ["Mango", "Poly", "Ajax"];
// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }
// // Указывая в скобках индекс элемента мы получаем его значение
// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax
// console.table(clients);
// console.log(clients.length); // 3

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript это интересно";
// console.log(message.split(" ")); // ["JavaScript", "это", "интересно"]
// const words = ["JavaScript", "это", "интересно"];
// console.log(words.join("")); // "JavaScriptэтоинтересно"
// console.log(words.join(" ")); // "JavaScript это интересно"
// console.log(words.join("-")); // "JavaScript-это-интересно"

// Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);
// ---------- ----------
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest("Манго", function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest("Поли", function notify(name) {
//   console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });
// ---------- ----------
// function processCall(recipient) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`);
//     // Логика принятия звонка
//   }
// }

// processCall("Манго");

// ---------- ----------
// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Поли", takeCall, activateAnsweringMachine);


// ---------- ----------

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// // }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });
// // До
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // После
// const arrowAdd = (a, b, c) => a + b + c;

// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]

// ---------- ----------

// Колбэк-функция
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;

// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
//       callback(pizzaName);

// }

// Module 4
// Task 20 flatMap &filter

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book=> book.genres);
// const uniqueGenres = allGenres.filter((genre, index, array)=> array.indexOf(genre) === index);

//------------ 25
// const getFriends = (users) => {
//  return users
//    .flatMap((user) => user.friends)
//    .filter((user, index, array) => array.indexOf(user) === index, 0)
// };
// // Change code above this line

//------------ 47

// // Change code below this line
// const getSortedFriends = users => 
//   [...users] 
//   .map(friend=> friend.friends)
//   .reduce((allFriends, user) => [...allFriends, ...user], [])

//   .filter((friend, index, array)=> array.indexOf(friend)=== index)
//   .sort();
// // Change code above this line

// Module 5
// 16
// class Car {
//   // Change code below this line
//   #price;
//  static MAX_PRICE =50000;
  
//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//         if (newPrice < Car.MAX_PRICE ){
//          this.#price = newPrice;
//         }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// 17

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//  static checkPrice(price){
//   return price > Car.#MAX_PRICE ? "Error! Price exceeds the maximum" :"Success! Price is within acceptable limits";
// }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

