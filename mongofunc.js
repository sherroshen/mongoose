const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://192.168.1.101:27017';

// Database Name
const dbName = 'smoke';

/*
//Connect DB
// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log(`\r`);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    console.log(db);
    client.close();
});
*/
/*
//Insert DB
// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    db.collection("posts", function (err, collection) {
        var list = [
            {title:"smoker test insert1", tag:"game"},
            {title:"like Nodejs programme", tag:"it"},
            {title:"like use MongoDB", tag:"it"}
        ];
        collection.insert(list, function (err, result) {
            assert.equal(null, err);
            client.close();
        });
    });
});
*/
//Read DB
// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    db.collection("posts", function (err, collection) {
        collection.find({tag:"game"}).toArray(function (err, docs) {
            assert.equal(null, err);
            console.log(docs);
            client.close();
        });
    });
});