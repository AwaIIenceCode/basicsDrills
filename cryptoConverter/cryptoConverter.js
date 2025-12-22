const prompt = require("prompt-sync")();

let usdtBalance = 0;     // стартовый баланс в USDT 
let cryptoBalance = 0;       // сколько BTC на руках
let buyRate = 0;             // цена покупки (для расчёта прибыли)
let costBasis = 0;           // сколько USDT реально потрачено на текущую крипту
let taxRate = 0;             // налог на прибыль (глобальный, один раз вводится)

console.log("=== Crypto Trader Console ===\n");
console.log(`Starting USDT balance: ${usdtBalance.toFixed(2)}`);

while (true) {
  const input = prompt("\n1 - Buy BTC\n2 - Sell BTC\n3 - Show balance\n4 - Set tax rate\n5 - Exit\nEnter command: ");
  const command = Number(input);

  if (isNaN(command)) {
    console.log("Invalid command!");
    continue;
  }

  switch (command) {
    case 1: // BUY
      {
        console.log("\n=== Buy Mode ===");
        const deposit = Number(prompt("Enter USDT amount to spend: "));
        if (isNaN(deposit) || deposit <= 0) {
          console.log("Invalid or insufficient amount!");
          break;
        }

        buyRate = Number(prompt("Enter current BTC rate: "));
        if (isNaN(buyRate) || buyRate <= 0) {
          console.log("Invalid rate!");
          break;
        }

        let feePercent = Number(prompt("Enter fee % (Enter for 0.1%): ").trim());
        if (isNaN(feePercent) || feePercent < 0) feePercent = 0.1;
        const feeRate = feePercent / 100;

        const feeAmount = deposit * feeRate;
        const amountAfterFee = deposit - feeAmount;
        const boughtCrypto = amountAfterFee / buyRate;

        // обновляем состояние
        usdtBalance -= deposit;
        cryptoBalance += boughtCrypto;
        costBasis += amountAfterFee;  // сколько реально потрачено на крипту

        console.log(`Bought ${boughtCrypto.toFixed(8)} BTC`);
        console.log(`Fee: ${feeAmount.toFixed(2)} USDT`);
      }
      break;

    case 2: // SELL
      {
        if (cryptoBalance === 0) {
          console.log("No crypto to sell!");
          break;
        }

        console.log("\n=== Sell Mode ===");
        const sellCrypto = Number(prompt(`How much BTC to sell (max ${cryptoBalance.toFixed(8)}): `));
        if (isNaN(sellCrypto) || sellCrypto <= 0 || sellCrypto > cryptoBalance) {
          console.log("Invalid amount!");
          break;
        }

        const sellRate = Number(prompt("Enter current sell rate: "));
        if (isNaN(sellRate) || sellRate <= 0) {
          console.log("Invalid rate!");
          break;
        }

        let feePercent = Number(prompt("Enter sell fee % (Enter for 0.1%): ").trim());
        if (isNaN(feePercent) || feePercent < 0) feePercent = 0.1;
        const feeRate = feePercent / 100;

        const gross = sellCrypto * sellRate;
        const feeAmount = gross * feeRate;
        const netProceeds = gross - feeAmount;

        // прибыль от этой продажи
        const proportion = sellCrypto / cryptoBalance;
        const soldCostBasis = costBasis * proportion;
        const profit = netProceeds - soldCostBasis;

        const taxAmount = profit > 0 ? profit * taxRate : 0;
        const finalUsdt = netProceeds - taxAmount;

        // обновляем балансы
        usdtBalance += finalUsdt;
        cryptoBalance -= sellCrypto;
        costBasis -= soldCostBasis;

        console.log(`Sold ${sellCrypto.toFixed(8)} BTC`);
        console.log(`Gross: ${gross.toFixed(2)} USDT`);
        console.log(`Fee: ${feeAmount.toFixed(2)} USDT`);
        console.log(`Profit: ${profit.toFixed(2)} USDT`);
        if (taxRate > 0 && profit > 0) {
          console.log(`Tax (${(taxRate * 100).toFixed(1)}%): ${taxAmount.toFixed(2)} USDT`);
        }
        console.log(`Received: ${finalUsdt.toFixed(2)} USDT`);
      }
      break;

    case 3: // BALANCE
      {
        console.log("\n=== Current Balance ===");
        console.log(`USDT:      ${usdtBalance.toFixed(2)}`);
        console.log(`BTC:       ${cryptoBalance.toFixed(8)}`);
        if (cryptoBalance > 0) {
          const currentValue = cryptoBalance * buyRate;
          const totalProfit = currentValue - costBasis;
          console.log(`Current value: ${currentValue.toFixed(2)} USDT`);
          console.log(`Unrealized P/L: ${totalProfit.toFixed(2)} USDT`);
        }
      }
      break;

    case 4: // SET TAX
      {
        const taxInput = prompt("Enter profit tax rate % (Enter for 0%): ").trim();
        taxRate = taxInput === "" ? 0 : Number(taxInput) / 100;
        if (isNaN(taxRate) || taxRate < 0) taxRate = 0;
        console.log(`Tax rate set to ${(taxRate * 100).toFixed(1)}%`);
      }
      break;

    case 5: // EXIT
      console.log("Goodbye!");
      process.exit(0);

    default:
      console.log("Unknown command!");
  }
}