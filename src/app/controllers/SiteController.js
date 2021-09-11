const Product=require('../models/Product');
const {multiMongosToObjects}=require('../../util/mongoose');

class SiteController{
    index(req,res,next){
        Product.find({})
        .then(products=>
            res.render('home',{products:multiMongosToObjects(products)})
        )
        
    }

    info(req,res){
        res.render('info');
    }
}

module.exports=new SiteController;