import { transactions } from './transaction.js'
import { recipt, total }from './report.js'

console.log("All Transactions")
console.log(transactions)
console.log('___________________________________')

console.log('total debit')
console.log(total(transactions,'debit'))

console.log(recipt(transactions))