const path = require('path');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const app = express();
const mongoclient = require('mongodb').MongoClient;
const url = 'mongodb+srv://leeyunji00711:<password>@cluster0.qw80v51.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
let mydb;



mongoclient.connect(url)
    .then(client => {
        mydb = client.db('myboard');
        mydb.collection('post').find().toArray().then(result => {
            console.log(result);
        // console.log('몽고DB 접속 성공');
        })
        app.listen(8080, function() {
            console.log("포트 8080으로 서버 대기 중 ... ")
        });
})
.catch(err => {
    console.log(err);
});


app.get('/list', function(req,res){
    mydb.collection('post').find().toArray().then(result => {
        console.log(result);
    })
})

// '/enter' 요청에 대한 처리 루틴
app.get('/enter', function(req,res){
    res.sendFile(_dirname + 'enter.html');
});


app.post('save', function(req, res){
    console(req);
    console.log("저장완료");
});



// MySQL + Node.js 접속 코드

// var mysql = require("mysql");
// var conn = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"1234",
//     database : "myboard",
// });

// conn.connect();