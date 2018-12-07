let myAccount = {
    name: 'Mike',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount
   // console.log(account)
}

let addIncome = function(account, amount) {
    account.income = account.income + amount
}

let resetAccount = function(account) {
    account.income = 0
    account.expenses = 0
}

let getAccountSummary = function(account) {
    let onhand = account.income - account.expenses
    return `Account for ${account.name} has \$${onhand}. \$${account.income} in income. \$${account.expenses} in expenses.`
}

//challenge:
//add income
//reset account
//get account summary
//example of summary:  "account for name has income.  amt in expense."
//add income
//add expense
//add expense
//getAccountSUmmary
//reset account
//get summary
/* addExpense(myAccount, 2.50)

console.log(myAccount) */

console.log('Expense Account Challenge:\r\n')
console.log(myAccount)
addIncome(myAccount,2000)
addExpense(myAccount,250)
addExpense(myAccount,420)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(myAccount)