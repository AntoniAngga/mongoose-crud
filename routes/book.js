const express = require('express');
const router = express.Router();
const cBook = require('../contoller/cBook');

/* GET home page. */
router.get('/',cBook.findAllBook);

router.get('/:_id', cBook.findByID);

router.post('/', cBook.CreateBook);

router.put('/:_id', cBook.updateBook);

router.delete('/:_id', cBook.deleteBook);

module.exports = router;
