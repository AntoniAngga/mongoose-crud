const Transaction = require('../model/Transaction');

let findAllTransaction = function (req,res) {
  Transaction.find()
      .populate({ path : 'memberid' , select : 'name'})
      .populate({ path : 'booklist' , select : 'title'})
      .exec(function (err, data) {
          if (err){
              res.status(501).send(`Something Wrong with your select ${err}`);
          } else {
              res.send(data);
          }
      })
};

let addTransaction = function (req,res) {
    let data = req.body;
    let date = new Date();
    let newTransaction = Transaction({
        memberid : data.memberid,
        days: data.days,
        out_date: new Date(),
        due_date: date.setDate(date.getDate() + parseInt(data.days)),
        booklist: data.booklist
    });
    //Save Data nya
    newTransaction.save(function (err) {
        if(err){
            res.status(501).send(`something wrong with your connection`);
        } else {
            res.send("1 Document Inserted");
        }

    });
};

let findByIDTransaction = function (req,res) {
    Transaction.findById(req.params._id, function (err,data) {
        if (err){
            res.status(501).send(`Someting Wrong with your connection ${err}`);
        } else {
            res.send(data);
        }
    })
};

let updateTransaction = function (req,res) {
    Transaction.findById(req.params._id, function(err, transaction) {
        if (err) {
            res.send(err);
        }
        let temp = transaction.in_date = new Date()
        if (temp.getDate() - transaction.due_date.getDate() !== 0) {
            let calculateDate = ((transaction.in_date.getDate() - transaction.due_date.getDate())*1000);
            var denda;
            if( calculateDate < 0){
                denda = 0;
            } else {
                denda = calculateDate;
            }
        }
        var query_set = {memberid : transaction.memberid, days : transaction.days, out_date : transaction.out_date,
            due_date : transaction.due_date};
        var query_new = {memberid : transaction.memberid,
            days : transaction.days,
            out_date : transaction.out_date,
            due_date : transaction.due_date,
            in_date : new Date(),
            fine : denda
        };
        Transaction.update(query_set, query_new, function(err, newResult) {
            if (err) {
                res.send(err);
            } else {
                res.send(newResult)
            }
        })
    })
};

let deleteTransaction = function (req,res) {
  Transaction.findById(req.params._id, function (err, trasancation) {
      if (err){
          res.status(501).send(`Something Wrong with your connection ${err}`);
      } else {
          trasancation.remove(function (err) {
              if (err){
                  res.status(501).send(`Something Wrong with your connection ${err}`);
              } else {
                  res.send(`1 Document Deleted`);
              }
          })
      }
  })
};

module.exports = {
    findAllTransaction,
    addTransaction,
    findByIDTransaction,
    updateTransaction,
    deleteTransaction
};