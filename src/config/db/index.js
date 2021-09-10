const mongoose=require('mongoose');

async function connect(){
    try{
        mongoose.connect('mongodb://localhost:27017/HocNodeJS_WebCuaDuc');
        console.log("Connect successfully!");
    } catch(error){
        console.log("Connect failure!!!");
    }
    
}

module.exports={connect};

