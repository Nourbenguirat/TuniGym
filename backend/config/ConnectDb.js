const mongoose = require('mongoose');
const ConnectDb = async () => {
    try {
        await mongoose.connect(process.env.DATA_BASE_CONFIG);
        console.log('you are connected to your database TYUNIGYM');

    } catch (error) {
        console.log(error);
        console.log('you have a problem  while you connect to your database');
    }
}
module.exports = ConnectDb;