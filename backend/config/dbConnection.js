const mongoose  = require('mongoose');
const connectDb = async ()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
        console.log("Database connected",
            connect.connection.host,
            connect.connection.name
        );
    }
    catch(err){
        console.log("Database connection Error");
        console.log(err) // send the error out
        process.exit(1) // end the process
    }
};

module.exports = connectDb;