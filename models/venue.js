const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var venueSchema = new Schema({
    Name: { type: String, required: true },
    location: { type: String, required: true },
    Size: { type: Number, required: true },
    price: {type: Number, required: true}
    

});



module.exports = mongoose.model('venue', venueSchema);