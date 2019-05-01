//READLINE MODULE
const readLine = require('readline');
//create an instance of the readLine interface; takes object as param
//process is a glboal object you don´t have to require

const scanner = readLine.createInterface({input: process.stdin, output: process.stdout});
//gen 2 random nums
let num1 = Math.floor(Math.random() * 10 +1);
let num2 = Math.floor(Math.random() * 10 +1);
let answer = num1 + num2;

//readLine interface has a method of question; param(string, func)
scanner.question(`What is ${num1} + ${num2}? \n`, (userInput) => {if(userInput.trim() == answer){
    scanner.close();
}else{
    scanner.setPrompt('Incorrect response. Try again!\n');
    scanner.prompt();
    scanner.on('line', (userInput) => {
        if(userInput.trim() == answer){
            scanner.close();
        }else{
            scanner.setPrompt(`Your answer of ${userInput} is incorrect. Try again \n`);
            scanner.prompt();
        }
    })
}});

//close readLine interface when we are done -->scanner.close()
scanner.on('close', () => {
    console.log('Correct answer!');
});