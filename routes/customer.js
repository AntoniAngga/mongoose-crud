const express = require('express');
const router = express.Router();
const cCustomer = require('../contoller/cCustomer');

/* GET home page. */
router.get('/',cCustomer.findAllCustomer);

router.get('/:_id', cCustomer.findByID);

router.post('/', cCustomer.CreateCustomer);

router.put('/:_id', cCustomer.updateCustomer);

router.delete('/:_id', cCustomer.deleteCustomer);

module.exports = router;
