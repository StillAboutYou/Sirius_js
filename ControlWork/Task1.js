class Person {
    constructor(name, age, city, zip) {
        this.name = name;
        this.details = {
            age: age,
            address: {
                city: city,
                zip: zip
            }
        };
    }
}


function deepPropertyCount(obj) {
    let count = 0;
    function countProperties(o) {
        if (o !== null && typeof o === 'object') {
            for (let key in o) {
                if (o.hasOwnProperty(key)) {
                    count++;
                    countProperties(o[key]);
                }
            }
        }
    }
    countProperties(obj);
    return count; 
}


const person1 = new Person('Alice', 25, 'New York', 10001);
let answerCount = deepPropertyCount(person1);
let mainAnswer = JSON.parse(JSON.stringify(person1));
console.log(answerCount);
console.log(mainAnswer);
