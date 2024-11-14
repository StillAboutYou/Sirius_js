// Доп задание 1
function rateLimit(fn, limit) {
    let callCount = 0;
    let firstCallTime = null;
    return function(...args) {
        const now = Date.now();

        if (firstCallTime === null || now - firstCallTime >= 1000) {
            callCount = 0;
            firstCallTime = now;
        }
        if (callCount < limit) {
            callCount++;
            return fn(...args); 
        } else {
            console.log("Лимит, нужно ждать");
        }
    };
}


const limitedFunction = rateLimit(function(message) {
    console.log(message);
}, 2);


limitedFunction("1");
limitedFunction("2");
limitedFunction("3");
setTimeout(() => limitedFunction("4"), 1000);

// Доп задание 2
function tokenize(str, delimiters) {
    let tokens = [];
    let currentToken = '';
    for (let char of str) {
        if (delimiters.includes(char)) {
            if (currentToken) {
                tokens.push(currentToken);
                currentToken = '';
            }
        } else {
            currentToken += char;
        }
    }
    if (currentToken) {
        tokens.push(currentToken);
    }
    return tokens;
}

const str = "Hello, world! How are you?";
const signs = [' ', ',', '!', '?'];
let answer = tokenize(str, signs);
console.log(answer);