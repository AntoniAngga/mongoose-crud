const express = require('express');
const router = express.Router();
const cTransaction = require('../contoller/cTransaction');

/* GET Transaction Page. */
router.get('/',cTransaction.findAllTransaction);

router.get('/:_id', cTransaction.findByIDTransaction);

router.post('/', cTransaction.addTransaction);

router.put('/:_id', cTransaction.updateTransaction);

router.delete('/:_id', cTransaction.deleteTransaction);

module.exports = router;
