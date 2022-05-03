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
let newNames = [];
names.forEach(name => {
    if (name.charAt(0) === "S") {
        newNames.push(name);
    }
})
console.log(newNames);

names.forEach((name, index) => console.log(`${index + 1}) ${name}`));