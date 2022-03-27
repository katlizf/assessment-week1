console.log("Welcome to the password validator tool")

const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.question("Please enter your password: ", function(response) {
    let symbols = [ `!`, `@`, `#`, `$`, `&`, `*`, `(`, `)`];
    let numbers = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, '10'];
    let containsNumber = false;
    let responseArray = response.split(``);
    let containsSymbol = false;
    let space = [` `];
    let containsNoSpaces = false;

    for (let i = 0; i < responseArray.length; i++) {
        for (let j = 0; j < numbers.length; j++)
        if (responseArray[i] === numbers[j]) {
            containsNumber = true;
        }   
    }
    
    for (let i = 0; i < responseArray.length; i++) {
        for (let j = 0; j < symbols.length; j++) {
            if (responseArray[i] === symbols[j]) {
                containsSymbol = true;
            }
        }
    }

    for (let i = 0; i < responseArray.length; i++) {
         for(let j = 0; j < space.length; j ++) {
            if (responseArray[i] !== space[j]) {
                containsNoSpaces === true;
            }
        }
    }    

    if (response.length < 10) {
        console.log("Your password needs to be at least 10 characters long.")
        } else if (containsNumber === false) {
        console.log("The password must contain at least one number.")   
        } else if (containsSymbol === false) {
        console.log("Your password needs to include a special character.")
        } else if (containsNoSpaces === false) {
            console.log("Your password cannot contain spaces.")
        } else {
        console.log("Your password meets requirements.")
        }
    
    reader.close()
})

