const {multiMongosToObjects}=require('../../util/mongoose');
const {mongoToObject}=require('../../util/mongoose');
const Product=require('../models/Product');

class ProductController{

    //[GET] /search
    show(req,res,error){
       
       Product.findOne({slug:req.params.slug})
       .then(product =>
            res.render('products/show',{product:mongoToObject(product)})
       )
       .catch(error); 
    }

    index(req,res){
        Product.find({})
        .then(products=>
            res.render('products',{products:multiMongosToObjects(products)})
        )
        
    }
}

module.exports=new ProductController;
