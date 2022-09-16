const mongoose=require('mongoose');


const productSchema=new mongoose.Schema({
    id:{
        type:String,
        require:true,
        unique:true
    },
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    quantity:Number,
    description:String,
    discount:String,
    tagline:String
},{
    timestamps:true
})

const Product=mongoose.model('Product',productSchema);
module.exports=Product;