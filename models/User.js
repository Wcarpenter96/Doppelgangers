const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String,
    url: String,
    matches: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Match'
        }
    ]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;