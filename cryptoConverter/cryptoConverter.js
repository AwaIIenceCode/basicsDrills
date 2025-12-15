const prompt = require("prompt-sync")();

const userDeposit = Number(prompt("Enter your USDT deposit -> "));
const exchangeRate = Number(prompt("Enter your currency rate -> "));
let exchangeFee = Number(prompt("Enter your commission exchange in \"%!\"-> "));

if(!exchangeFee || isNaN(exchangeFee)) 
{
    console.log("Invalid input. Default value set to 0.1%")
    exchangeFee = 0.001; 
}

else 
{
    exchangeFee = exchangeFee / 100;

}

const incomeTax = prompt("Do I need to calculate income tax? Write \"yes\" or \"no.\" ");

if(incomeTax?.trim().toLowerCase() === "yes")
{
    const valueIncomeTax = prompt("Enter value your income tax depending on the country -> ");

    if(isNaN(valueIncomeTax))
    {
        console.log("Invalid input. Default value set to 12%");
        valueIncomeTax = 0.12;
    }
}

else if(incomeTax?.trim().toLowerCase() === "no")
{
    console.log("Сalculations will be made without taking tax into account");
}

else 
{
    console.log("Invalid input, try again...");
}

let userCoinBalance = (userDeposit - (userDeposit * exchangeFee)) / exchangeRate; //920

console.log(userCoinBalance);