const products=require('./constants/data.js');
const Product=require('./models/product_schema.js');

const DefaultData=async()=>{
    try{
        await Product.insertMany(products);
        console.log('products added');
    }catch(error){
        console.log(error);
    }
}

module.exports=DefaultData;