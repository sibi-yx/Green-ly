const express =require('express');
const mysql =require('mysql2');
const cors = require('cors');
const bodyparser =require('body-parser');
const app=express();
app.use(cors());
app.use(bodyparser.json());
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'ecommerce'
});
app.post('/signup',(req,res)=>{
    const{name,email,password}=req.body;
    const sql='INSERT INTO signup(name,email,password) VALUES (?,?,?)';
    db.query(sql,[name,email,password],(err,result)=>{
        if(err) return res.status(400).send({error:'signup failed'});
        res.send({message:'user registered succesfully'});
    });
});
app.listen(3000,()=>{
    console.log('server running on port 3000')
})
db.connect((err)=>{
    if(err)throw err;
    console.log('mysql connected');
});