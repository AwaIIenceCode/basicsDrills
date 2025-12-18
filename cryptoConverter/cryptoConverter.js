// console.log("=== Crypto Converter (Buy Mode) ===\n");

// const userDeposit = Number(prompt("Enter your USDT deposit -> "));
// const exchangeRate = Number(prompt("Enter your currency rate -> "));
// let exchangeFee = Number(prompt("Enter your commission exchange in \"%!\"-> "));

// if (userDeposit <= 0 || exchangeRate <= 0) 
// {
//   console.log("Cannot be 0 or negative!");
//   process.exit(1);
// }

// if (exchangeFee < 0 || isNaN(exchangeFee)) 
// {
//   console.log("Invalid input. Default value set to 0.1%");
//   exchangeFee = 0.001;
// }

// if (exchangeFee > 1) { exchangeFee = exchangeFee / 100; }

// let valueIncomeTax = 0;
// const incomeTaxAnswer = prompt("Do I need to calculate income tax? Write \"yes\" or \"no.\" ");

// if (incomeTaxAnswer?.trim().toLowerCase() === "yes") 
// {
//   const input = prompt("Enter value your income tax depending on the country -> ");
//   valueIncomeTax = Number(input);

//   if (isNaN(valueIncomeTax) || valueIncomeTax < 0) {
//     console.log("Invalid input. Default value set to 12%");
//     valueIncomeTax = 0.12;
//   }
// } 

// else if (incomeTaxAnswer?.trim().toLowerCase() === "no") 
// {
//   console.log("Calculations will be made without taking tax into account");
// } 

// else 
// {
//   console.log("Invalid input, proceeding without tax");
// }

// const feeAmount = userDeposit * exchangeFee;
// const amountAfterFee = userDeposit - feeAmount;
// const userCoinBalance = amountAfterFee / exchangeRate;

// const fmtUsdt = (n) => n.toFixed(2);
// const fmtCrypto = (n) => parseFloat(n.toFixed(8));  

// console.log("\n=== Exchange Result ===");
// console.log(`Amount in USDT:     ${fmtUsdt(userDeposit)}`);
// console.log(`Exchange rate:      ${fmtUsdt(exchangeRate)}`);
// console.log(`Fee (${(exchangeFee * 100).toFixed(3)}%):  ${fmtUsdt(feeAmount)} USDT`);
// console.log(`You receive:        ${fmtCrypto(userCoinBalance)} crypto`);
// console.log(`Net value in USDT:  ${fmtUsdt(amountAfterFee)}`);




const prompt = require("prompt-sync")();

console.log("=== Crypto Converter (Buy Mode) ===\n");
const userCommand = Number(prompt("Write \"1\" if you want to buy cryptocurrency\nWrite \"2\"if you want to sell cryptocurrency\nWrite \"3\" for exit the program -> "));

let userDeposit = 0; //депозит юзера
let exchangeRate = 0; //курс крипты
let exchangeFee = 0; //комиссия биржы
let valueIncomeTax = 0; //налог на прибыль

while(true)
{
    switch(userCommand)
    {
        case 1:
            {

                break;
            }

        case 2:
            {

                break;
            }
        case 3:
            {
                console.log("Exit the program...");
                process.exit(1);
            }    

    }
}