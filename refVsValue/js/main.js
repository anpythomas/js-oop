// By Value
let xValue = 10;
let yValue = xValue;
xValue = 20;
// when we console: x = 20, y = 10


// By Reference
let xRef = {value: 10};
let yRef = xRef;
xRef.value = 34;
// when we console: x = 34, y = 34



// function passing variable type number
let number = 10;

function increment(number) {
    number++;
    console.log(`${number} inside function`)
}

increment(number);
console.log(`${number} outside function`)


// function passing variable type number
let numberObj = {value: 10};

function incrementObj(num) {
    // numberObj.value++;
    console.log(`${num.value} inside function`)
}

incrementObj(numberObj.value);
// console.log(`${numberObj.value} outside function`)