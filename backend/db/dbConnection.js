import mongoose from "mongoose";

const dbConnection = async() => {
   try {
      const connect = await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB connected ${connect.connection.host}`);
   } catch(err) {
      console.log(`Error connect to database ${err.message} `);
      process.exit(1);
   }
}

export default dbConnection;