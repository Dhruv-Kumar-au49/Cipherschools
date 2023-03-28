let mongoose = require('mongoose');
let {Schema} = require('mongoose');

let userSchema = new Schema({

name:{
    type:String,
    required: true,
    maxLength:25,
},

email:{
    type:String,
    required: true,
},

password:{
    type:String,
    required: true,
}

})

let userModel = mongoose.model('Cipherschools',userSchema)
module.exports ={
    userModel
}


