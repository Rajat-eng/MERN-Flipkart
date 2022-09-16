const mongoose=require('mongoose');


const userSchema=new mongoose.Schema({
   firstname:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20
   },
   lastname:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20
   },
   username:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
   },
   email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        index:true,
   },
   password:{
        type:String,
        required:true,
   },
   phone:{
        type:Number,
        required:true,
        unique:true
   }
},{
    timestamps:true
})

const User=mongoose.model('User',userSchema);
module.exports=User;