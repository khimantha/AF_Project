const serviceHelper = require('./service.helper')

function registerUser(userData, callback) {

    serviceHelper.addDocument(userData,function(err,res){
        if(err){
            callback(err,null);
        }else{
            callback(null,res);
        }
    })




}



module.exports = {
    registerUser: registerUser
}