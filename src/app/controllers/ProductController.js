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

    create(req,res){
        res.render('products/create');
    }

    store(req,res){
        const request=req.body;
        request.avt=`https://i.ytimg.com/vi_webp/${request.youtubeID}/sddefault.webp`
        
        const newProduct=new Product(request);
        newProduct.save()
            .then(() => res.redirect('/products'));
       
    }

    edit(req,res,error){
        Product.findById(req.params.id)
            .then(product =>
            
            res.render('products/edit',{product:mongoToObject(product)})
            
        )
        .catch(error);
    }

    // [PUT]/products/:id
    update(req, res, error) {
        req.body.avt = `https://i.ytimg.com/vi_webp/${req.body.youtubeID}/sddefault.webp`
        Product.updateOne({_id:req.params.id},req.body)
        .then(()=>res.redirect('/products'))
        .catch();
    }
}

module.exports=new ProductController;
