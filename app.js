console.log("Hello World!\n==========\n");
const numbers = [2, 22, 12, 17, 18, 39, 129];
//const arrReducer = (accumulator, currentValue) => accumulator + currentValue;
//console.log(numbers.reduce(arrReducer));
//console.log(numbers.forEach((x, y) => { x + y }));

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function arraySum(numbers) {
    let sum = 0;
    numbers.forEach((num, index) => {
        sum += num
    });
    return sum;
}

console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let book = {
    title: "The Lord of the Rings",
    pages: 458,
    readcount: 0,

    info() {
        return `Title: ${this.title}\n
                Pages: ${this.pages}\n
                ReadCount: ${this.readcount}\n`
    }
}
console.log(book.info());



