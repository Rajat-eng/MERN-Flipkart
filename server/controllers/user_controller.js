const User=require('../models/user_schema');


module.exports.signUp=async function(req,res){
    try{

        let userexist= await User.findOne({phone:req.body.phone});
        if(userexist){
            return res.status(401).json({
                message:"User already exists",
                success:false
            })
        }
        let user=req.body;
        let newUser=await User.create(user);
        console.log(newUser)

        return res.status(200).json({
            newUser:user,
            message:"User created in database",
            success:true
        })
            
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:err.message,
            success:false
        })
    }
}

module.exports.login=async function(req,res){
    try{
        let {username,password}=req.body;
        let user= await User.findOne({phone:username });

        console.log(user)
        if(user){

            if(password===user.password){
                return res.status(200).json({
                    user:user,
                    message:"login successfull",
                    success:true
                })
            }else{

                return res.status(401).json({
                    message:"Invalid credentials",
                    success:false
                })
            }
            
        }else{
            return res.status(404).json({
                message:"Invalid credentials | User not registered",
                success:false
            })
        }
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:err.message,
            success:false
        })
    }
}