const searchRouter=require('./search');
const siteRouter=require('./site');
const productRouter=require('./product');


function route(app){
    
    app.use('/search',searchRouter);
    app.use('/products',productRouter);
    app.use('/',siteRouter);
   
}

module.exports=route;
