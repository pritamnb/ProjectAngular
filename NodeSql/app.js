const express = require('express');
const mysql = require('mysql');

const app = express();


// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'project'
});


//conect to server 
'use strict';

var Hapi = require('hapi');

var server = new Hapi.Server({
    host:'localhost',
    port:3000
});



 var io = require('socket.io')(server.listener);
 io.on('connection', function (socket) {
     console.log("client connected.....");

    
 });


// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE demo';
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send('Database created');
    })
})

// // Insert
// app.get('/addpost1', (req,res) => {
//     let post = {title: 'Post ',body:'This is post no 1'};
//     let sql = 'Insert into posts SET ?';
//     let query = db.query(sql, post, (err,result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('entry added');
    
//     });
// });

// // creat table

// app.get('/createposttable', (req, res) => {
//     let sql = 'CREATE TABLE posts(id int PRIMARY KEY AUTO_INCREMENT,title varchar(255),body varchar(255))';
//     db.query(sql, (err, result) => {
//         if (err) {
//             throw err;
//         }
//         console.log(result);
//         res.send('POST table created');
//     })
// })





// Connect db
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Mysql connected'); 
});


app.listen('3000', () => {
    console.log('Connected and started on port 3000');
});