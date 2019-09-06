var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://lakylekidd:Hermes%401986@cluster0-aysvk.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // Connection successful
    var vehicleDataSchema = new mongoose.Schema({
        time: Number,
        energy: Number,
        gps: [],
        odo: Number,
        speed: Number,
        soc: Number
    });
});