const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    Name: String,
    Description: String,
    Avt:String,
    Style:String,
    Cost: Number,
    slug:String
  });

  module.exports=mongoose.model('Product', Product);