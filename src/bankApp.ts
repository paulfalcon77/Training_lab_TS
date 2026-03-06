
import {BankAccount} from "./BankAccount";

const bankAccount = new BankAccount("Pavel", 500);

const res = bankAccount.deposit(100)
console.log(res)