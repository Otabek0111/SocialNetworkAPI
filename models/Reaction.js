const { Schema, Types } = require('mongoose'); // import Schema and model from mongoose

// create the user model
const ReactionSchema = new Schema({
    
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: 'Reaction is required',
            maxlength: 280
        },
        username: {
            type: String,
            required: 'Username is required'
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    });

module.exports = ReactionSchema; 