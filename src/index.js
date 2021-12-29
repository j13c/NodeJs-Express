const colors = require('colors');
const express = require('express');
const app = express();


app.get('/', (req,res)=>{
    res.send('Hellow World');
});

app.listen(3000, ()=>{
    console.log('Server on http://localhost:3000/'.green);
});