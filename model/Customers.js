const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name : {type : String, required : true},
    memberid : {type : String, required:true, unique : true},
    address : String,
    zipcode : String,
    phone : String
}, {
    timeStamp : true
});

let Customers = mongoose.model('customers',customerSchema);


module.exports = Customers;