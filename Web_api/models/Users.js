var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;


const UserSchema = new Schema ({
    UserName:String,
    Email:String,
    hash:String
})

module.exports = mongoose.model('User', UserSchema);