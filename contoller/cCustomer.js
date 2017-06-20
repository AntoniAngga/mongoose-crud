const Customer = require('../model/Customers');

let CreateCustomer = function (req,res) {
    //create a new Customer
    let data = req.body;
    let newCustomer = Customer({
        name : data.name,
        memberid: data.memberid,
        address: data.address,
        zipcode: data.zipcode,
        phone: data.phone
    });
    //Save Data nya
    newCustomer.save(function (err) {
        if(err){
            res.status(501).send(`something wrong with your connection`);
        } else {
            res.send("1 Document Inserted");
        }

    });
};

let findAllCustomer = function (req,res) {
    Customer.find({}, function(err,data) {
        if(err){
            res.status(501).send(`something wrong with your connection`);
        } else {
            res.send(data);
        }
    })
};

let findByID = function (req,res) {
    Customer.findById(req.params._id, function (err, customer) {
        if(err){
            res.status(501).send(`something wrong with your connection`);
        } else {
            res.send(customer);
        }
    })
};

let updateCustomer = function (req,res) {
    Customer.findById(req.params._id, function (err,customer) {
        if(err){
            res.status(501).send(`something wrong with your connection`);
        } else {
            let data = req.body;
            customer.name = data.name;
            customer.memberid = data.memberid;
            customer.address = data.address;
            customer.zipcode = data.zipcode;
            customer.phone = data.phone;

            customer.save(function (err) {
                if (err){
                    res.status(502).send(`something wrong with your add`+err);
                } else {
                    res.send(`Updated 1 Document`);
                }
            });
        }
    })
};

let deleteCustomer = function (req,res) {
    Customer.findById(req.params._id, function (err,customer) {
        if (err){
            res.status(501).send(`something wrong with your connection`);
        } else {
            customer.remove(function (err) {
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
    CreateCustomer,
    findAllCustomer,
    findByID,
    updateCustomer,
    deleteCustomer
};