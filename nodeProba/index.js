const express= require('express')
const mysql = require('mysql')

const db= mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'nodemysql'
    }
)
db.connect(err=>{
    if(err)
    throw err
    console.log("MySQL Connected");
}
)
const app= express()

app.get('/createdb',(req,res)=> {
    let sql='CREATE DATABASE nodemysql'
    db.query(sql,err=> {
        if(err)
        throw err
        res.send("Database created");
    })
    
})
app.get('/createemployee',(req,res)=>{
    let sql= 'CREATE TABLE employee(id int AUTO_INCREMENT,name VARCHAR(255), designation VARCHAR(255), PRIMARY KEY(id))'
    db.query(sql,err=> {
        if(err)
        throw err
        res.send("Table created");
    })
})
app.get('/employee1',(req,res)=>{
    let post = {name: 'Michael', designation: 'Chief'}
    let sql = 'INSERT INTO employee SET ? '
   let query = db.query(sql,post, err=> {
        if(err)
        {
        throw err
        }
        res.send("JOKAAAA RESTART MASTER PROGRAMERKA");
    })
})

app.listen('3000', ()=> {
    console.log("Server started on port 3000");
})