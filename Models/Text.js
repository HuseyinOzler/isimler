const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TextSchema=new Schema({
    titleNumber:{
        type: Number,
    },
    titleOne:{
        type:String,
    },
     titleTwo: {
         type: String,
     },
     aciklama:{
        type:String,
     }
});

module.exports = mongoose.model('text', TextSchema)