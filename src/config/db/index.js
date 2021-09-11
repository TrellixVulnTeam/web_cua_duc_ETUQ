const mongoose=require('mongoose');

async function connect(){
    try{
        mongoose.connect('mongodb://localhost:27017/HocNodeJS_WebCuaDuc');
        console.log("Connect to Mongo SUCCESSFULLY!");
    } catch(error){
        console.log("Connect to Mongo FAILURE!!!");
    }
    
}

module.exports={connect};

