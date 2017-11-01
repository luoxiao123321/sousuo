var express = require('express');
var router = express.Router();
var mysql=require('mysql')
var pool=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'sousuo'
})
/* GET home page. */
router.post('/list',function(req,res,next){
	var a=req.body.name;
	res.header('Access-Control-Allow-Origin','*')
	pool.query('SELECT * FROM sou WHERE name LIKE "%'+a+'%" OR title LIKE "%'+a+'%"',function(err,rows){
		res.send(rows)
	})
})
module.exports = router;
