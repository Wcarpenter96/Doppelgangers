const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MatchSchema = new Schema({
    user:
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    celeb:
    {
        type: Schema.Types.ObjectId,
        ref: 'Celeb'
    },
    confidence: { type: Number, min: 2, max: 8 },
});

const Match = mongoose.model('Match', MatchSchema);

module.exports = Match;