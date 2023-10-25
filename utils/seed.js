const connection = require('config/connection');
const { User, Thought , Reaction } = require('models');
const mongoose = require('mongoose');

const users = [
    {   
        _id: mongoose.Types.ObjectId(),
        username: 'testUser1',
        email: 'test@email.com',
        tought: []
    },
        
]

console.log('Seeding Database');

connection.once('open', async () => {
    try {
        await Thought.deleteMany({});
        await User.deleteMany({});
        await Reaction.deleteMany({});

        await User.create(users);
        await Thought.create(thoughts);

        console.info('Seeding complete! 🌱');
        console.log('All done!');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
});




