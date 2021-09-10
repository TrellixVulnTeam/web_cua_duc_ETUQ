 module.exports={
    multiMongosToObjects:function(MongoArray){
        return MongoArray.map(item => item.toObject());
    },

    mongoToObject:function(Mongo){
        return Mongo?Mongo.toObject():Mongo;
    }

 }
 