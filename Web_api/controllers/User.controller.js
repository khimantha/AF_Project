const waterfall = require('async-waterfall');
const bcrypt = require('bcrypt');

const User = require('../models/Users');
const userService = require('../services/User.service')
const saltRounds = 10;


register = function(req,res){
    async.waterfall([
        function(callback){
            bcrypt.hash(req.body.password,saltRounds, function(err,res){
               if(err){
                    console.log("Error Hashing");
                    callback(err,null);
               }else{
                   callback(null,hash);
               }
           })
            
        },
        function(hash,callback){
            let user = new User;

            user.UserName = req.body.userName;
            user.hash = hash,
            user.email = req.body.email
        
            userService.registerUser(User,user,function(err,userdat){
                if(err){
                    callback(err,null);

                }
                else{
                    callback(null, userdat)
                }
            });
            
        }
    ],
    function(err,result){
        if(err){
            res.json("Error creating User")
        }
        else{
            res.json(result);
        }
    })



}

module.exports ={
    register:register,
}