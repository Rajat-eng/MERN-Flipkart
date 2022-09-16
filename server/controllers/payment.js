require('dotenv').config()
const { v4: uuidv4 } = require('uuid');
const paytmCheckSum=require('../paytm/PaytmChecksum');
const formidable=require('formidable');
const https=require('https');


let paytmMerchantKey=process.env.PAYTM_MERCHANT_KEY
let paytmParams={};

paytmParams['MID']=process.env.PAYTM_MID;
paytmParams['WEBSITE']=process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID']=process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID']=process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID']=uuidv4();
paytmParams['CUST_ID']=process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT']='100';
paytmParams['CALLBACK_URL']='callback';
paytmParams['EMAIL']='mayrajat48@gmail.com';
paytmParams['MOBILE_NO']='9650486815';



module.exports.addPayment=async function(req,res){
    try{
        let paytmCheckSumResult=await paytmCheckSum.generateSignature(paytmParams,paytmMerchantKey);
        let params={
            ...paytmParams,'CHECKSUMHASH':paytmCheckSumResult
        }
        res.status(200).json(params)
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

module.exports.sendResponse=function(req,res){
    const form=new formidable.IncomingForm();
    let paytmCheckSumResult=req.body.CHECKSUMHASH;
    delete req.body.CHECKSUMHASH;

    let isVerifySignature=paytmCheckSum.verifySignature(req.body,paytmMerchantKey,paytmCheckSumResult);

    if(isVerifySignature){
        
        let paytmParams={}
        paytmParams['MID']=req.body.MID
        paytmParams['ORDERID']=req.body.ORDERID

        paytmCheckSum.generateSignature(paytmParams,paytmMerchantKey).then(function(checksum){
            paytmParams['CHECKSUMHASH']=checksum
            let post_data=JSON.stringify(paytmParams);
            
            let options={
                hostname:'securegw-stage.paytm.in',
                port:443,
                path:'/order/status',
                headers:{
                    'Content-type':'application/json',
                    'Content-length':post_data.length
                }
            }

            let key=""
            let post_req=https.request(options,function(post_res){
            
                post_res.on('data',function(chunk){
                    key+=chunk
                    console.log(key)
                })
                post_res.on('end',function(){
                    let result=JSON.parse(key)
                    console.log(result)
                    res.redirect('')
                }) 
            })

            post_req.write(post_data);
            post_req.end();
        })
    }else{
        console.log('checksum mismatched');
    }
}