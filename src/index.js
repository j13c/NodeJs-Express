const colors = require('colors');
const express = require('express');
const app = express();
app.use( express.json() );

app.get('/', (req,res)=>{
    res.send('Hellow World');
});

function logger(req,res,next){
    
    console.log(` ${req.method}  ${req.path}`);
}

app.get('/user', (req,res)=>{
    res.json({
        id:1,
        name:"jean",
        lastname:"trujillo",
        age:27
    });
});

app.post('/user/:id', (req,res)=>{
    console.log( req.body );
    console.log( req.params );
    res.send('Successfully user');
});

app.listen(3000, ()=>{
    console.log('Server on http://localhost:3000/'.green);
});