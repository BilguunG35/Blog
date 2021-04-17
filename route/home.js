const express = require('express');
const router = express.Router();
const conn = require('../connection/connection');


router.get('/', function (request, response) {
    conn.query('SELECT * FROM content', function (error, result, fields) {
        if (!error) {
            response.render('index', { contents: result });
        } else {
            console.log(error);
        }
    })
});


module.exports = router;