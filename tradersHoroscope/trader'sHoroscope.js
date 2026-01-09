const prompt = require("prompt-sync")();

const userName = prompt("Enter your name -> ");

if (userName.trim() === "") 
{
  console.log("You must enter a valid name");
  return;
}

const userDeposit = Number(prompt("Enter your USDT balance -> "));

if (isNaN(userDeposit)) 
{
  console.log("Balance must be a valid number");
  return;
}

if (userDeposit <= 0)
{
  console.log("You are in the red zone. Please add funds.");
  return;
}

const userChoice = prompt("Enter the day of week -> ").trim().toLowerCase();

if (userChoice === "") 
{
  console.log("Please enter a valid day of week");
  return;
}

let horoscopeMessage = "";

switch (userChoice) 
{
  case "monday":
    horoscopeMessage = "Monday — sit tight, don't move";
    break;

  case "tuesday":
    horoscopeMessage = "Tuesday — you can risk 5-10% of your portfolio";
    break;

  case "wednesday":
    horoscopeMessage = "Midweek — record if in profit";
    break;

  case "thursday":
    horoscopeMessage = "Thursday — ETH is in favor today, they say";
    break;

  case "friday":
    horoscopeMessage = "Friday — almost the weekend, relax";
    break;

  case "saturday":
    horoscopeMessage = "Saturday — the market is asleep, farm staking and drink coffee";
    break;

  case "sunday":
    horoscopeMessage = "Sunday — prepare for Monday, add BTC";
    break;

  default:
    horoscopeMessage = "There is no such day";
    break;
}

console.log("\n=== Crypto Horoscope Result ===");
console.log(`Name:     ${userName.trim() || "Anonymous"}`);
console.log(`Balance:  ${userDeposit.toFixed(2)} USDT`);
console.log("Horoscope for today:");
console.log("--------------------------------");
console.log(horoscopeMessage);
console.log("--------------------------------");