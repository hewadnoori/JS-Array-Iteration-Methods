const fruits = ['apple', 'pear', 'cherry'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
fruits.forEach(fruit => {
    console.log(fruit)
});
//pros of foreach: easier to read and understand
//bugs are easier to avoid: infinite loop is impossible, avoids incrementing mistakes and wrong condition

//cons of foreach: cant break out early
//rare that youd need to, but use a for or while loop if you need to.
let capitalizedFruits = [];
fruits.forEach(fruit => {
    let capitalizedFruit = fruit.toUpperCase();
    capitalizedFruits.push(capitalizedFruit);
})

console.log(capitalizedFruits);

const prices = [6.75, 3.10, 4.00, 8.12]; //total: 21.97
let total = 0;
prices.forEach(price => {
    total += price;
})
console.log(total);
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];// Result: ['Selma', 'Sam', 'Sharon'];
const startsWithS = name => name.charAt(0) === "S";
const newNames = names.filter(startsWithS); // this will add all names that start with s to the newNames array from the names array.
console.log(newNames);

names.forEach((name, index) => console.log(`${index + 1}) ${name}`));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.filter(number => number % 2 === 0); //add even numbers
console.log(evens);

//using map method to edit arrays
const strings = ['1', '2', '3', '4', '5'];
const numbers2 = strings.map(string => parseInt(string, 10))
console.log(numbers2);//this will turn the strings array into numbers

const fruits2 = ['apple', 'pear', 'cherry']; //this does what the first code did but much cleaner and quicker
const capFruits = fruits2.map(fruit => fruit.toUpperCase());
console.log(capFruits);
const prices2 = [5, 4.23, 6.4, 8.09, 3.20];
const priceToDollars = price => '$' + price.toFixed(2);
const newPrices = prices2.map(priceToDollars)
//const newPrices = prices2.map(price => `$${price.toFixed(2)}`);
console.log(newPrices);
// Result: [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ]

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let abbreviatedDays;

// abbreviatedDays should be: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
abbreviatedDays = daysOfWeek.map(day => day.slice(0, 3));
console.log(abbreviatedDays)

//reduce method which lets you turn all of the items in an array into one value
var prices3 = [6.75, 3.10, 4.00, 8.12].reduce(
    (accumulator, currentValue) => accumulator + currentValue, //the accumulator is the var that holds each number and the currentvalue is the value that is being passed through
    0 // 0 is the first value of the accumulator so its, 0 + 6.75, then 6.75 + 3.10, then 9.85 + 4.00
); // Total: 21.97
console.log(prices3);

const names2 = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony']
const gNameCount = names2.reduce((count, word) => {
    if (word[0] === 'G') { //you can also use word.charAt(0)
        return count + 1;
    } else {
        return count;
    }
}, 0
);
console.log(gNameCount);
// Result: 4

const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];
let numberOf503;

// numberOf503 should be: 3
// Write your code below
numberOf503 = phoneNumbers.reduce((phonebook, number) => {
    if (number.slice(1, 4) === "503") {
        return phonebook + 1;
    } else {
        return phonebook;
    }
}, 0
);
console.log(numberOf503);