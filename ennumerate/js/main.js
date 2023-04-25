function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.draw('draw');
    }
}

const circle = new Circle(10);

// for (let key in circle) {
//     console.log(key, circle[key])
// }

for (let key in circle) {
    if (typeof circle[key] !== 'function') {
        console.log(key, circle[key])
    }
}

// Another approach with built in method will return all keys in object

const keys = console.log(Object.keys(circle));

console.log(keys)

// Search if property in object

if ("radius" in circle) {
    console.log("circle has radius")
}