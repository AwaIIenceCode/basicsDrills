# CryptoBarTipCalculator

A simple Node.js console app to practice JavaScript fundamentals: variables, data types, type coercion, operators, basic conditionals, user input/output, and simple calculations.  
Themed as a tip calculator for a crypto bar — handles bill in USDT, tips for the bartender, splitting between friends, and a 5% discount on large bills.

# 📖 About

CryptoBarTipCalculator is a learning project designed to solidify core JavaScript concepts.  
You input the bill amount, tip percentage (default 10%), and number of people. The app validates input, calculates tips, applies a 5% discount on the bill if ≥ 1000 USDT (tips always calculated from original amount), and shows a clean formatted receipt.

# 🚀 Features

- Interactive input for bill amount, tip percentage, and number of people  
- Input validation: positive numbers only, tips 0–100%, integer people count  
- Default 10% tip when user presses Enter or inputs invalid value  
- 5% discount applied only to the bill (deposit) when ≥ 1000 USDT  
- Tips always calculated from the original bill amount  
- Clean formatted output with rounding to 2 decimal places  
- Crypto-bar theme: everything in USDT with bartender tips vibe  

# 🛠️ How It Works

The script uses `prompt-sync` for user input, converts strings to numbers with `Number()`, and validates using `isNaN()`.  
Tips are calculated from the original deposit. If the deposit is ≥ 1000 USDT, a 5% discount is applied only to the bill.  
Final total = (discounted or original deposit) + tips amount.  
Output uses template literals and `toFixed(2)` for clean formatting.

# 💻 Installation & Run

1. Create or clone the folder `js-basics-drills`  
2. Open the folder in VS Code  
3. In the terminal run:  
   ```bash
   npm init -y
   npm install prompt-sync
4. Save the code as index.js
5. Run the app:Bashnode index.js

Enjoy calculating tips in the crypto bar while mastering JavaScript basics!
