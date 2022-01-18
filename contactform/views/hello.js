const express = require('express')
var mysql = require('mysql')
const bosyParser = require('body-parser')
const app = express()
const port = 3000
app.use(express.static('../library'))

app.use(bosyParser.urlencoded({extended: false}))
app.set('view engine','pug')

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname})
});
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'contact-form'
})
  
connection.connect(function(err){
  if (err) throw err;
  console.log('connected..');
})

app.post('/', function (req, res) {
   console.log(req.body);
   var sql = "insert into forms values('"+req.body.fname+"', '"+req.body.lname+"', '"+req.body.number+"', '"+req.body.email+"', '"+req.body.message+"')"
   connection.query(sql, function (err) {
    if (err) throw err;
    res.statusCode = 302;
    res.setHeader("Location", "https://0715swathi.github.io/contactpage/");
    res.end();
  })
})
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))