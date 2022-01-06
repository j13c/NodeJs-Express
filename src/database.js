//mongodb+srv://jtrujillo_acl:428658123@cluster0.r6x6z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const mongoose = require('mongoose');
const uri = 'mongodb+srv://jtrujillo_acl:428658123@cluster0.r6x6z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(uri,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then( ()=>{ console.log(`connect with database mongodb`) })
.catch( (err) => console.log(err) );