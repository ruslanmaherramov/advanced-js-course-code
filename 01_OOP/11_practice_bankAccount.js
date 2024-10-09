// BankAccount class
//  - Properties
//      - balance (defaults to 0 if not provided)
//      - accountHolder
//      - accountNumber
// - Methods
//   - deposit(amt) - increases balance by amt
//   - withdraw(amt) - descreases balance by amt.

class BankAccount {
  constructor(accountHolder, accountNumber, balance = 0) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amt) {
    if (amt < 0) {
      return console.log('Negative amount');
    }
    this.balance += amt;
    console.log(`Deposit ${amt}. New balance is ${this.balance}`);
  }

  withdraw(amt) {
    if (amt > this.balance) {
      return console.log('Insufficient funds');
    }
    this.balance -= amt;
    console.log(`Withdraw ${amt}. New balance is ${this.balance}`);
  }
}
