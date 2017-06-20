const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    memberid : [{
        type : Schema.Types.ObjectId,
        ref  : "customers"
    }],
    days     : Number,
    out_date : Date,
    due_date : Date,
    in_date  : Date,
    fine     : Number,
    booklist : [{
        type : Schema.Types.ObjectId,
        ref  : "books"
    }]
});

let Transaction = mongoose.model('transaction', transactionSchema);

module.exports = Transaction;