
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'dermacure'
})

app.get("/users", (req,res) => {
    const sql = "SELECT * FROM `users`"
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.get("/profiles", (req,res) => {
    const sql = "SELECT * FROM `profile`"
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.get("/history", (req,res) => {
    const sql = "SELECT * FROM `userhistory`"
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.post("/userpost", (req, res) =>{

    const reqBody = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        description: req.body.description,
    };

    const query = `INSERT INTO profile (name, email, phone, description) VALUE ( ?,?,?,?)`;

    db.query(query,[reqBody.name, reqBody.email, reqBody.phone, reqBody.description])

    res.send("Data has been send successfully");


});

app.post("/schedule", (req, res) =>{

    const reqBody = {
        day: req.body.day,
        hours: req.body.hours
    };

    const query = `INSERT INTO scheddate (day, hour) VALUE ( ?,?)`;

    db.query(query,[reqBody.day, reqBody.hours])

    res.send("Data schedule has been send successfully into schedule");

});

app.listen(8081, () => {
    console.log(`Server connect Success! dalton`);
});