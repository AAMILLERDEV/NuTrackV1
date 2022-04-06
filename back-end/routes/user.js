const express = require('express');
const router = express.Router();
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const {timeout, interval, filter, startWith, takeUntil} = require("rxjs");
const {register} = require("karma-coverage/lib/report-creator");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Windows1",
  database: "nutrack"
});

router.post('/register', async function (req, res, next) {
  try {
    let {
      firstName,
      lastName,
      username,
      email,
      password
    } = req.body;
    res.setTimeout(100);

    const hashed_password = md5(password.toString())
    const checkUsername = `Select username, email FROM users WHERE username = ? OR email = ?`;
    con.query(checkUsername, [username, email], (err, result, fields) => {
      if(result == 0){
        const sql = `Insert Into users (firstName, lastName, username, email, password, isAdmin) VALUES ( ?, ?, ?, ?, ?, ? )`
        con.query(sql, [firstName, lastName, username, email, hashed_password, 1],
          (err, result, fields) =>{
            if(err){
              res.send({ status: 0, data: err});
            }else{
              let token = jwt.sign({ data: result }, 'secret')
              res.send({ status: 1, data: result, token : token });
            }
        })
      }
      else {
        res.send({status: 5, data: err});
      }
    });
  } catch (error) {
    res.send({ status: 0, error: error });
  }
});
router.post('/login', async function (req, res, next) {
  try {
    let { username, password } = req.body;
    const hashed_password = md5(password.toString());
    const sql = `SELECT * FROM users WHERE username = ? AND password = ?`;
    con.query(sql, [username, hashed_password],
      function(err, result, fields){
        if(err){
          res.send({ status: 0, data: err });
        }else{
          let token = jwt.sign({ data: result }, 'secret')
          res.send({ status: 1, data: result, token: token });
        }

      })
  } catch (error) {
    res.send({ status: 0, error: error });
  }
});
module.exports = router;

