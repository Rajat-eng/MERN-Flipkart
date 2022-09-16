const express=require('express');
const cors=require('cors');
const app=express();
const port=process.env.PORT||8000;
const db=require('./config/mongoose');
const DefaultData=require('./default.js');


app.use(cors());


app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:true}));
app.use(express.text());
app.use('/',require('./routes'));

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
}
app.listen(port,function(err){
    if(err){
        console.log(`Error: ${err}`);
        return;
    }
    console.log(`server is running on port:${port}`);
});

//DefaultData();