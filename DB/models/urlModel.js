import { Schema, model } from 'mongoose';

// Declare the Schema of the Mongo model
var urlSchema = new Schema({
    url:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    shortCode:{
        type:String,
        required:true,
        unique:true,
    }
});

//Export the model
export default model('URL', urlSchema);