const MongoClient = require('mongodb').MongoClient;

var dbPush = (data_obj) => {
    MongoClient.connect('mongodb://admin:PeterParker2@ds135852.mlab.com:35852/project-db', (err, client) => {
        if(err){
            return console.log('unable to connect to mongodb server');
        }

        console.log('connected to db server');
        const db = client.db('project-db');
        db.collection('forms').insertOne(data_obj, (err, result) => {
            if(err){
                return console.log('unable to insert', err);
            }
            console.log(JSON.stringify(result.ops, undefined, 2));
        });
        client.close();
    });
};

module.exports.dbPush = dbPush;