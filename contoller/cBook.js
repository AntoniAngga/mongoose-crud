const Book = require('../model/Books');

let CreateBook = function (req,res) {
    //create a new Book
    let data = req.body;
    let newBook = Book({
        isbn : data.isbn,
        title : data.title,
        author : data.author,
        category : data.category,
        stock : data.stock
    });
    //Save Data nya
    newBook.save(function (err) {
        if(err){
            res.status(501).send(`something wrong with your connection`);
        } else {
            res.send("1 Document Inserted");
        }

    });
};

let findAllBook = function (req,res) {
  Book.find({}, function(err,data) {
    if(err){
        res.status(501).send(`something wrong with your connection`);
    } else {
        res.send(data);
    }
  })
};

let findByID = function (req,res) {
    Book.findById(req.params._id, function (err, book) {
        if(err){
            res.status(501).send(`something wrong with your connection`);
        } else {
            res.send(book);
        }
    })
};

let updateBook = function (req,res) {
    Book.findById(req.params._id, function (err,book) {
        if(err){
            res.status(501).send(`something wrong with your connection`);
        } else {
            let data = req.body;
            book.title = data.title;
            book.author = data.author;
            book.category = data.category;
            book.stock = data.stock;

            book.save(function (err) {
                if (err){
                    res.status(502).send(`something wrong with your add`+err);
                } else {
                    res.send(`Updated 1 Document`);
                }
            });
        }
    })
};

let deleteBook = function (req,res) {
    Book.findById(req.params._id, function (err,book) {
        if (err){
            res.status(501).send(`something wrong with your connection`);
        } else {
            book.remove(function (err) {
                if(err){
                    res.status(501).send(`Something Wrong with your Delete`+err);
                } else {
                    res.send(`1 Document deleted`);
                }
            })
        }
    });
};

module.exports = {
    CreateBook,
    findAllBook,
    findByID,
    updateBook,
    deleteBook
};