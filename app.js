console.log("Hello World!\n==========\n");

// Exercise 1 Section - The Sum of an Array
console.log("EXERCISE 1:\n==========\n"); 

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(number) {
    let sum = 0;

    number.forEach((number) => {
        sum += number;
    });

    return sum;
};

console.log(arraySum(numbers));


// Exercise 2 Section - Favorite Book
console.log("EXERCISE 2:\n==========\n");

let book = {
    title: "Twilight",
    pages: 498,
    read: 5,
    info: function () {
        return(`${this.title} by Stephanie Meyer, ${this.pages} pages, read ${this.read} times.`);
    }
};

console.log(book.info());


// Exercise 3 Section - Reverse a String
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";
let words = sentence.split(' ');

for(let i = 0; i < words.length; i++) {
    let characters = words[i].split('');
    characters.reverse();
    words[i] = characters.join('');
};

let sentenceReversed = words.join(' ');
console.log(sentenceReversed);


// Exercise 4 Section - Parse a CSV
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
let rows = csvData.split("\n");
let headers = rows.shift().split(',');

let array = []
for(let row of rows) {
    let value = row.split(',');
    let obj = {};
    for(let i = 0; i < headers.length; i++) {
        obj[headers[i]] = value[i];
    }
    array.push(obj);
};

console.log(array);