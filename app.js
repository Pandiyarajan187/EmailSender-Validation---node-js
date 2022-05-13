// =============Sending Email===============// 

// const express = require('express');
// const nodemailer = require('nodemailer');

// var app = express()
// var transpoter = nodemailer.createTransport({
//      host: 'smtp.gmail.com',
//      port: 587,
//      secure: false, 
//      service: "gmail",
//      auth:{
//           user: 'peter@auctionsoftware.com',
//           pass: ''
//      }
// })

// var mailOption = {
//      from: 'peter@auctionsoftware.com',
//      to: 'pandiyarajan.auctionsoftware@gmail.com',
//      subject: 'Email Sent using node js',
//      html: '<h1>Welcome</h1><p>This is Easy</p>'
// }

// transpoter.sendMail(mailOption ,function(err, info){
//      if(err){
//           console.log(err)
//      }else{
//           console.log("Email sent : " + info.response)
//      }
// })

// app.listen(3000 , () => console.log("Listening the Port..."))


// // =============Email validation Via Postman===============// 




// const express = require('express');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const app = express();

// app.use(bodyParser.urlencoded({extended : true}))
// app.use(bodyParser.json())

// const { createPool } = require('mysql');
// const pool = createPool({
//      host: "Localhost",
//      user: "root",
//      password: "",
//      database: "test",
//      connectionLimit: 10
// });

// pool.query(`select * from emailvalidation`,(err, res,fields) => {
//      if (err)
//      return console.log(err)
// });

// app.post('/', (req,res) => {
//      try{
//       var username = req.body.username;
//       var emailid = req.body.emailid; 
//       var pwd = req.body.pwd;
//       pool.query("SELECT emailid FROM emailvalidation WHERE emailid = '"+ emailid +"' " , function(err ,result,field){
//            if(result.length === 0){
//              let sql = `INSERT INTO emailvalidation ( username , emailid ,pwd) values ( ? , ? , ?)`;
//              pool.query(sql , [username ,emailid , pwd] , (err ,result)=>{
//                   if(err) throw err;
//                   res.write("Your Email is Inserted Successfully")
//                   res.end();
//              })
//           }else{
//                   console.log("Email is Alerady Exist");
//                   res.write('Email is Alerady Exist');
//                   res.end();
//              }
//       });  
//      }catch (err) {
//         console.log("Not Inserted");
//         res.write("Not Inserted");
//         res.end();
//      }
// });


// app.listen(8080, () => {console.log("Listening on Port.....")});


const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const { createPool } = require('mysql');
const pool = createPool({
     host: "Localhost",
     user: "root",
     password: "",
     database: "form",
     connectionLimit: 20
});

pool.query(`select * from userdata`,(err, res,fields) => {
     if (err)
     return console.log(err)
});

app.post('/', (req, res) => {
     try {
          var add_task = req.body.add_task;
          var add_date = req.body.add_date; 
          pool.query("SELECT add_date FROM userdata WHERE add_date = '"+ add_date +"' " , function(err ,result,field){
           if(result.length == 0){
             let sql = `INSERT INTO userdata ( add_task , add_date ) values ( ? , ? )`;
             pool.query(sql , [add_task ,add_date ] , (err ,result)=>{
                  if(err) throw err;
                  res.write("Your Task is added Successfully")
                  res.end();
             })
          }else{
                  console.log("Date is Alerady Exist");
                  res.write('Date is Alerady Exist');
                  res.end();
             }
      }); 
     } catch (error) {
        console.log("Not Inserted");
        res.write("Not Inserted");
        res.end();
     }
})



app.listen(5000, () => console.log("Listening on Port..."));