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

if (deposit >= 1000) 
    {
        sumInPerson * 0.05;
    }

console.log(`\nYour deposit -> ${deposit}`);
console.log(`Your tips -> (${tips}%): ${sumTips} USDT`);
console.log(`All sum -> ${sumWithTips} USDT`);
console.log(`In person -> ${sumInPerson}`);