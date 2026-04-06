class BankAccount {
  #balance = 0; // private field (ES2022) — cannot access outside

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) this.#balance -= amount;
    else console.log("Insufficient funds!");
  }

  getBalance() {
    return this.#balance; // controlled access ✅
  }
}

let account = new BankAccount();
account.deposit(1000);
account.withdraw(500);
console.log(account.getBalance()); // 500 ✅
// console.log(account.#balance);     // ❌ SyntaxError — private!