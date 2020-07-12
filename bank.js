const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type === 'credit') {
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }
}

function getHigherTransactionByType(type) {
    let higherTransaction
    let higherValue = 0

    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }

    return higherTransaction
}

function getAverageTransactionValue() {
    let sum = 0

    for(let transaction of user.transactions) {
        sum = sum + transaction.value
    }

    return sum / user.transactions.length
}

function getTransactionsCount() {
    let count = {
        credit: 0,
        debit: 0
    }
    for (let transaction of user.transactions) {
        if (transaction.type === 'credit')
            count.credit++
        else
            count.debit++
    }

    return count
}


createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(`${user.name}'s balance is U$${user.balance.toFixed(2)}`)

const higherCredit = getHigherTransactionByType('credit').value
console.log(`The higher credit transaction was U$${higherCredit.toFixed(2)}`)

const higherDebit = getHigherTransactionByType('debit').value
console.log(`The higher debit transaction was U$${higherDebit.toFixed(2)}`)

console.log(`The average transaction value is U$${getAverageTransactionValue().toFixed(2)}`)

console.log(`There were ${getTransactionsCount().credit} credit transactions and ${getTransactionsCount().debit} debit transactions.`)

