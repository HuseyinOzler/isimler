const mongoose = require('mongoose');

module.exports = () =>{
    mongoose.connect('mongodb://hsyn:osm147.1@ds147033.mlab.com:47033/99isim', {
        useNewUrlParser: true
    });

     mongoose.connection.on('open', () => {
        console.log('MongoDb Connected');
    });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDb Baglantı Hatası !!!', err);
    });

};


