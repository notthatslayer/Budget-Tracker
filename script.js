let expenses = [];
let currentSavings = 0;

function addExpense() {
    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);

    if (expenseName === '' || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert('Please enter a valid expense name and amount!');
        return;
    }

    expenses.push({ name: expenseName, amount: expenseAmount });

    document.getElementById('expense-name').value = '';
    document.getElementById('expense-amount').value = '';

    updateExpenseList();
    updateTotal();
    updateRemainingBalance();
}

function updateExpenseList() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';

    expenses.forEach(expense => {
        const li = document.createElement('li');
        li.innerHTML = `${expense.name}: $${expense.amount.toFixed(2)}`;
        expenseList.appendChild(li);
    });
}

function updateTotal() {
    const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
    document.getElementById('total-amount').innerText = totalAmount.toFixed(2);
}

function updateSavings() {
    const savingsAmount = parseFloat(document.getElementById('savings-amount').value);

    if (isNaN(savingsAmount) || savingsAmount < 0) {
        alert('Please enter a valid savings amount!');
        return;
    }

    currentSavings = savingsAmount;
    document.getElementById('savings-amount').value = '';
    updateRemainingBalance();
}

function updateRemainingBalance() {
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    const remainingBalance = currentSavings - totalExpenses;
    document.getElementById('remaining-balance').innerText = remainingBalance.toFixed(2);
}
