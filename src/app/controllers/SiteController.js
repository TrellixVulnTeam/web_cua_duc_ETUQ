const Product=require('../models/Product');
const {multiMongosToObjects}=require('../../util/mongoose');

class SiteController{
    index(req,res,next){
        res.render('home');    
    }

    info(req,res){
        res.render('info');
    }
}

module.exports=new SiteController;