const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CelebSchema = new Schema({
    name: String,
    url: String, 
    token: String
});

const Celeb = mongoose.model('Celeb', CelebSchema);

module.exports = Celeb;
