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
// checks for the amount of numbers that have the 503 area code
numberOf503 = phoneNumbers.reduce((phonebook, number) => {
    if (number.slice(1, 4) === "503") {
        return phonebook + 1;
    } else {
        return phonebook;
    }
}, 0
);
console.log(numberOf503);

const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let displayYears;

// displayYears should be: ["2015 A.D.", "2013 A.D.", "2012 A.D."]
// Write your code below
displayYears = years
    .filter(year => year >= 2001)
    .map(year => `${year} A.D.`);
console.log(displayYears);

const users = [
    { name: 'Samir', age: 27 },
    { name: 'Angela', age: 33 },
    { name: 'Beatrice', age: 42 }
];
console.log(users);
const newUserArray = users
    // .filter(user => user.name !== 'Samir')
    // .map(user => `${user.name} is ${user.age} years old.`)
    .reduce((users, user) => {
        users[user.name] = user.age;
        return users;
    }, {}
    );
console.log(newUserArray);

const authors = [
    { firstName: "Beatrix", lastName: "Potter" },
    { firstName: "Ann", lastName: "Martin" },
    { firstName: "Beverly", lastName: "Cleary" },
    { firstName: "Roald", lastName: "Dahl" },
    { firstName: "Lewis", lastName: "Carroll" }
];
let fullAuthorNames;

// fullAuthorNames should be: ["Beatrix Potter", "Ann Martin", "Beverly Cleary", "Roald Dahl", "Lewis Carroll"]
// Write your code below
fullAuthorNames = authors.map(author => `${author.firstName} ${author.lastName}`)
console.log(fullAuthorNames);

const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];
const newUsers = userNames
    .filter(user => user.charAt(0) === 'S')
    .map(user => ({ user: user })); //you can also use the shorthand ({user})
console.log(newUsers);
// Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];

const users2 = [
    { name: 'Samir', age: 27 },
    { name: 'Angela', age: 33 },
    { name: 'Beatrice', age: 42 },
    { name: 'Shaniqua', age: 30 },
    { name: 'Marvin', age: 23 },
    { name: 'Sean', age: 47 }
];
const userNames2 = users2
    .filter(user => user.age >= 30)
    .map(user => user.name);
console.log(userNames2);

const todos = [
    {
        todo: 'Buy apples',
        done: false
    },
    {
        todo: 'Wash car',
        done: true
    },
    {
        todo: 'Write web app',
        done: false
    },
    {
        todo: 'Read MDN page on JavaScript arrays',
        done: true
    },
    {
        todo: 'Call mom',
        done: false
    }
];
let unfinishedTasks;

// unfinishedTasks should be: ["Buy apples", "Write web app", "Call mom"]
// Write your code below
unfinishedTasks = todos
    .filter(task => task.done === false)
    .map(task => task.todo);
console.log(unfinishedTasks);

const products = [
    { name: 'hard drive', price: 59.99 },
    { name: 'lighbulbs', price: 2.59 },
    { name: 'paper towels', price: 6.99 },
    { name: 'flatscreen monitor', price: 159.99 },
    { name: 'cable ties', price: 19.99 },
    { name: 'ballpoint pens', price: 4.49 }
];
//finds all products over $10 and finds the highest priced ones of those.
const under10 = products
    .filter(product => product.price < 10)
    .reduce((highest, product) => {
        if (highest.price > product.price) {
            return highest;
        } else {
            return product
        }
    }, {}
    );
// Result: { name: 'paper towels', price: 6.99 }
console.log(under10);
//filters items costing more than $10 and adds prices together, rounding to the second decimal place.
const over10 = products
    .filter(product => product.price > 10)
    .reduce((total, product) => total + product.price, 0)
    .toFixed(2);
console.log(over10);

const purchaseItems = [
    {
        name: 'apples',
        dept: 'groceries',
        price: 2.49
    },
    {
        name: 'bread',
        dept: 'groceries',
        price: 2.99
    },
    {
        name: 'batteries',
        dept: 'electronics',
        price: 5.80
    },
    {
        name: 'eggs',
        dept: 'groceries',
        price: 3.99
    },
    {
        name: 't-shirts',
        dept: 'apparel',
        price: 9.99
    }
];
let groceryTotal;
//filter for groceries and adds them tgther
// groceryTotal should be: 9.47
groceryTotal = purchaseItems
    .filter(item => item.dept === "groceries")
    .reduce((sum, item) => sum + item.price, 0)
console.log(groceryTotal);

const movies = [
    ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
    ['Finding Dory'],
    ['Jaws', 'On the Waterfront']
]

const flatMovies = movies.reduce((arr, innerMovies) => [...arr, ...innerMovies], []);
console.log(flatMovies);
// Result: ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters', 'Finding Dory', 'Jaws', 'On the Waterfront']

const users3 = [
    {
        name: 'Samir',
        age: 27,
        favoriteBooks: [
            { title: 'The Iliad' },
            { title: 'The Brothers Karamazov' }
        ]
    },
    {
        name: 'Angela',
        age: 33,
        favoriteBooks: [
            { title: 'Tenth of December' },
            { title: 'Cloud Atlas' },
            { title: 'One Hundred Years of Solitude' }
        ]
    },
    {
        name: 'Beatrice',
        age: 42,
        favoriteBooks: [
            { title: 'Candide' }
        ]
    }
];
//gets all of the favoriteBooks arrays, then all of the titles into 3 arrays, then puts them all into one array.
const favbooks = users3
    .map(user => user.favoriteBooks.map(book => book.title))
    .reduce((arr, titles) => [...arr, ...titles], []);
console.log(favbooks);
// Result: ['The Iliad', 'The Brothers Karamazov', 'Tenth of December', 'Cloud Atlas', 'One Hundred Years of Solitude', 'Candide'];

const customerNames = [
    ["John", "Sandy", "Tyrone", "Elizabeth", "Penny"],
    ["Barry", "Wanda", "Jamal", "Hayden"],
    ["Portia", "Pam", "Philip"]
];
let flattenedCustomerNames;

// flattenedCustomerNames should be: ["John", "Sandy", "Tyrone", "Elizabeth", "Penny", "Barry", "Wanda", "Jamal", "Hayden", "Portia", "Pam", "Philip"]
flattenedCustomerNames = customerNames.reduce((arr, names) => [...arr, ...names], []);
console.log(flattenedCustomerNames);

const customers = [
    {
        name: "Tyrone",
        personal: {
            age: 33,
            hobbies: ["Bicycling", "Camping"]
        }
    },
    {
        name: "Elizabeth",
        personal: {
            age: 25,
            hobbies: ["Guitar", "Reading", "Gardening"]
        }
    },
    {
        name: "Penny",
        personal: {
            age: 36,
            hobbies: ["Comics", "Chess", "Legos"]
        }
    }
];
let hobbies;
// hobbies should be: ["Bicycling", "Camping", "Guitar", "Reading", "Gardening", "Comics", "Chess", "Legos"]
hobbies = customers
    .map(customers => customers.personal.hobbies)
    .reduce((arr, hobbies) => [...arr, ...hobbies], [])
console.log(hobbies);

const numbers3 = [1, 2, 3, 4, 5];
let total2 = 0;

// Write loop here:
numbers3.forEach(number => { total2 += number })
console.log(total2)

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayAbbreviations = [];

// dayAbbreviations should be: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
days.forEach(day => dayAbbreviations.push(day.slice(0, 2)))
console.log(dayAbbreviations);

const stringPrices = ['5.47', '3.12', '8.00', '5.63', '10.70'];
let priceTotal = 0;

stringPrices.forEach(price => priceTotal += parseFloat(price))
console.log(priceTotal);
// priceTotal should be: 32.92

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let noel = [];
alphabet.forEach(letter => {
    if (letter !== "L") {
        noel.push(letter);
    }
})
console.log(noel)
// noel should be: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// Write your code below

const percentages = [34, 67, 12, 39, 90, 82, 22, 24, 99];
let upperRange = [];

percentages.forEach(percent => {
    if (percent > 50) {
        upperRange.push(percent);
    }
})
console.log(upperRange)
// upperRange should be: [67, 90, 82, 99]
// Write your code below
const colors = ['#87E2D0', '#559F4D', '#FFE0F4', '#7E7E7E', '#FF2D2D', '#F7FFEC'];
let filteredColors = [];

// filteredColors should be: ['#FFE0F4', '#FF2D2D', '#F7FFEC']
// Write your code below
colors.forEach(color => {
    if (color.charAt(1) === "F") {
        filteredColors.push(color);
    }
})
console.log(filteredColors);

const months = ['january', 'february', 'march', 'april', 'may'];
let capitalizedMonths = [];

// capitalizedMonths should be: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY']
// Write your code below

months.forEach(month => capitalizedMonths.push(month.toUpperCase()))
console.log(capitalizedMonths);