
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'dermacure'
})

app.get("/", (req,res) => {
    res.json({message:"welcome to my app, Dalton."});
});

app.get("/users", (req,res) => {
    const sql = "SELECT * FROM `users`"
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
})

app.listen(8081, () => {
    console.log(`Server connect Success! dalton`);
});