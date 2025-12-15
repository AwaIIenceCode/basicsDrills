const prompt = require("prompt-sync")();
const fmt = (n) => Number(n.toFixed(2)); 

const depositInput = prompt("Enter your USDT deposit: ");
const deposit = Number(depositInput);

if (isNaN(deposit) || deposit <= 0) 
{
  console.log("Error: Deposit must be a positive number!");
  process.exit(1);
}

const tipsInput = prompt("Enter tips percentage (0-100, press Enter for 10%): ").trim();
const tips = tipsInput === "" ? 10 : Number(tipsInput);

if (isNaN(tips) || tips < 0 || tips > 100) 
{
  console.log("Invalid tips, using default 10%");
  tips = 10;
}

const peopleInput = prompt("Enter number of people: ");
let people = Number(peopleInput);

if (isNaN(people) || people < 1) 
{
  console.log("Error: Number of people must be at least 1!");
  process.exit(1);
}
people = Math.floor(people);

const tipsAmount = deposit * (tips / 100);
let total = deposit + tipsAmount;
let discount = 0;

if (deposit >= 1000) 
{
  discount = deposit * 0.05;
  total = deposit - discount + tipsAmount;  
}

const perPerson = total / people;

console.log("\n=== Crypto Bar Bill ===");
console.log(`Deposit:        ${fmt(deposit)} USDT`);
console.log(`Tips (          ${tips}%):{fmt(tipsAmount)} USDT`);
if (discount > 0) 
{
  console.log(`Discount (5%):       -${fmt(discount)} USDT`);
}

console.log(`Total:          ${fmt(total)} USDT`);
console.log(`Per person:     ${fmt(perPerson)} USDT`);