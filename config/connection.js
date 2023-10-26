const mongoose = require('mongoose');

// const Mongoose = require('mongoose');

// const connectionString =
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/userDB')

// connect(connectionString);

// connection.on('connected', () => {
//     console.log('Mongoose connected successfully.');
// }); 

module.exports = mongoose.connection;