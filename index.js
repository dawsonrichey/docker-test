import express from 'express';
import mongodb from 'mongodb';
import config from './data';

const app = express();
const PORT = process.env.PORT || 4000;
const client = mongodb.MongoClient;

client.connect(config.DB, { useNewUrlParser: true }, (err, db) => { 
    if(err) {
        console.log('database is not connected')
    }
    else {
        console.log('connected!!')
    }
});

app.get('/', (req, res) => {
    res.json("Dawson and Sourav are AWESOME!!!");
});

app.listen(PORT, () => {
    console.log('Your server is running on PORT:',PORT);
});