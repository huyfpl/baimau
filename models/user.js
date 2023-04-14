var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
    },
    manv:{
        type: String,
       
    },
    anhdaidien: {
        type: String,
       
    },
    fileanhdaidien:{
       type: String,

    },
    diemtrungbinh: {
        type: Number,
      

    }
}, {
    collection: 'user'
}
);
const User = mongoose.model('user', UserSchema);
module.exports = User;
