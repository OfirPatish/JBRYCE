import mongoose from "mongoose";
import config from "../Utils/DatabaseConfig";

const connect = async (): Promise<void> => {
  try {
    const db = await mongoose.connect(config.connectionString);
    console.log(`Connected to MongoDB: ${db.connection.db.databaseName}`);
  } catch (error) {
    console.log(error);
  }
};

export default { connect };
