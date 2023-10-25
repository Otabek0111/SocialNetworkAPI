const { Scema, model } = require('mongoose'); // import Schema and model from mongoose
const ReactionSchema = require('./Reaction'); // import ReactionSchema from Reaction.js

// create the user model
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'Username is required',
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: 'Email is required',
        match: [/.+@.+\..+/]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [this]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);
// get total count of friends on retrieval
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});
// create the User model using the UserSchema
const User = model('User', UserSchema);

module.exports = User; 