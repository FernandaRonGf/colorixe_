mongosee = require('mongoose');
const Schema = mongoose.Schema;

const PalleteSchema = new Schema({
    title: String,
    colors:{ color:[Number]}

});

const Pallette = mongoose.model('pallete', PalleteSchema);

module.exports = Pallete;