const { connect, connection } = require('mongoose');

const connectionString =
    process.env.MONGODB_URI || 'mongodb://localhost:27017/userDB';

connect(connectionString);

connection.on('connected', () => {
    console.log('Mongoose connected successfully.');
}); 

module.exports = connection;