const prompt = require("prompt-sync")();

let deposit, tips, numberOfPeople;

deposit = Number(prompt("Enter your usdt deposit -> "));
if (isNaN(deposit) ||  deposit <= 0 ) { console.log("Deposit must be positive number!"); process.exit(); }

tips = Number(prompt("Enter your tips for barmen (0 - 100%) -> "));
if (isNaN (tips) || tips < 0 || tips > 100) { tips = 10; }

numberOfPeople = Number(prompt("Enter count your friend -> "));
if (isNaN(numberOfPeople) || numberOfPeople <= 0) { console.log("Count of people must be a positive!"); process.exit(); }

let sumTips = deposit * (tips / 100);

let sumWithTips = deposit + sumTips;

let sumInPerson = sumWithTips / numberOfPeople;

console.log(`\nYour deposit -> ${deposit}`);
console.log(`Your tips -> (${tips}%): ${sumTips} USDT`);
console.log(`All sum -> ${sumWithTips} USDT`);

if (deposit >= 1000) 
    { 
        let sumWithDiscount = deposit - (deposit * 0.05); 
        console.log(`In person with discount -> ${(sumWithDiscount + (tips / 100)) / numberOfPeople} USDT`);
    }

else
    {
        console.log(`In person without discount -> ${sumInPerson} USDT`)
    }