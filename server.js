// var mongoClient = require('mongodb').MongoClient;
// var assert = require('assert');

// var url = 'mongodb://localhost:8000/test';
// MongoClient.connect(url, function(err,db){
//     assert.equal(null,err);
//     console.log("connect corecly to server");
//     db.close();
// });
var func = (x,y) =>{
    return x + y;
}
console.log(func(3,4));