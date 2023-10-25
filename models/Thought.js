const { Scema, model } = require('mongoose'); // import Schema and model from mongoose
const ReactionSchema = require('./Reaction'); // import ReactionSchema from Reaction.js

// create the thought model
const ThoughtSchema = new Schema({

    thoughtText: {
        type: String,
        required: 'Thought is required',
        minlength: 1,
        maxlength: 280
    },  
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: 'Username is required'
    },
    reactions: [ReactionSchema]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);
// get total count of comments and replies on retrieval
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// create the User model using the UserSchema
const Thought = model('Thought', ThoughtSchema);

// export the User model
module.exports = Thought;

