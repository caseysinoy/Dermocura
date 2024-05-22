
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors());

const db = mysql.createConnection({
    // Host ip address to the phpmyadmin (MySQL) server and connect to DERMOCURA with the user as root. 
    // As long as you have root as the user you can access the database with any root IP address from any computer
    // Just dont share it with anyone.
    host: '51.79.159.127',
    port: 3306,
    user: 'root',
    password: '',
    database: 'DERMOCURA',
})

app.get("/users", (req,res) => {
    const sql = "SELECT * FROM `Admin`"
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

// This is how you get data values from database
// app.get("/profiles", (req,res) => {
//     const sql = "SELECT * FROM `profile`"
//     db.query(sql, (err, data)=>{
//         if(err) return res.json(err);
//         return res.json(data);
//     });
// });

// app.get("/history", (req,res) => {
//     const sql = "SELECT * FROM `userhistory`"
//     db.query(sql, (err, data)=>{
//         if(err) return res.json(err);
//         return res.json(data);
//     });
// });

// this is how you post incoming data values from frontend to the database
// app.post("/userpost", (req, res) =>{

//     const reqBody = {
//         name: req.body.name,
//         email: req.body.email,
//         phone: req.body.phone,
//         description: req.body.description,
//     };

//     const query = `INSERT INTO profile (name, email, phone, description) VALUE ( ?,?,?,?)`;

//     db.query(query,[reqBody.name, reqBody.email, reqBody.phone, reqBody.description])

//     res.send("Data has been send successfully");


// });

// app.post("/schedule", (req, res) =>{

//     const reqBody = {
//         day: req.body.day,
//         hours: req.body.hours
//     };

//     const query = `INSERT INTO scheddate (day, hour) VALUE ( ?,?)`;

//     db.query(query,[reqBody.day, reqBody.hours])

//     res.send("Data schedule has been send successfully into schedule");

// });

app.listen(8080, () => {
    console.log(`Server connect Succeess! dalton`);
});