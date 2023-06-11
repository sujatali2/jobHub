const mongoose = require("mongoose");

const connectDatabase = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

module.exports = connectDatabase;