const Product = require('../models/product_schema');


module.exports.getProducts=async function(req,res){
    try{
        let products=await Product.find({});
        return res.status(200).json({
            products
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:"Error in retrieving product"
        })
    }
}

module.exports.getProductDetails=async function(req,res){
    try{
        let product=await Product.findOne({'id':req.params.id});
        if(product){
            return res.status(200).json({
                product
            })
        }
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:"Error in product Details retrieval"
        })
    }
}
