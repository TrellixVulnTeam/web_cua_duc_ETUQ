const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Product = new Schema({
    name: String,
    description: String,
    avt:String,
    style:String,
    cost: Number,
    youtubeID:String,
    slug:{type:String,slug:"name",unique:true}
  },
  {
    timestamps:true
  });

module.exports=mongoose.model('Product', Product);