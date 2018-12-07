const account = {
    name: 'Mike Williams',
    expenses: [],
    income: [],
    addExpense: function(description, amount){
        const obj = {description: description, amount:amount}
        this.expenses.push(obj)
    },
    addIncome: function(description, amount) {
        const obj = {description: description, amount:amount}
        this.income.push(obj)
    },
    getAccountSummary: function() {
        let expTotal = 0.00
        let incomeTotal = 0.00
        this.income.forEach(function (item) {
            incomeTotal = incomeTotal + item.amount
        })

        this.expenses.forEach(function(item, index) {
            expTotal = expTotal + item.amount 
        })

        const onhand = incomeTotal - expTotal

        return `${account.name} has a balance of \$${onhand.toFixed(2)}.  
                \$${incomeTotal.toFixed(2)} in income. 
                \$${expTotal.toFixed(2)} in expenses.`
    }    
}

//Expense -> description (string)
//        -> amount 

//2 methods to create.  
// -- add expense (description, amount) 
//    -- add new expense object to array
// -- get account summary
//  -- total up all expenses
//      -- text to write ("name" has "total" in expenses.)

account.addIncome('Job', 2000.50)
account.addExpense('Mortgage', 681.54)
account.addExpense('coffee', 3.38)
account.addExpense('food', 125.65)
console.log(account)
console.log(account.getAccountSummary())

//part 2: take income into account
//1.  add income into account, as an array
//   --> addIncome method -> description, amount
//2. tweak getAccountSUmmary to include incomes.
//   --> 'name' has a balance of 'onhand'. "income" in income.  'expenses" in expenses.