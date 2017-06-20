const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/libraryMongoose');

const bookSchema = new Schema({
    isbn : {type : String, required : true, unique : true},
    title : {type : String, required : true},
    author : String,
    category : String,
    stock : {type : Number}
}, {
    timestamps : true
});

let Book = mongoose.model('books',bookSchema);


module.exports = Book;