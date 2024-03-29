import mongoose from "mongoose";
const connection = {};

async function connectDB() {
  if (connection.isConnected) {
    console.log("Already connected to the DB");
    return;
  }

  if (mongoose.connection.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;

    if (connection.isConnected === 1) {
      console.log("Use previous connection to the database");
      return;
    }

    await mongoose.disconnect();
  }

  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("New connection to the DB");
  connection.isConnected = db.connections[0].readyState;
}

async function disconnectDB() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      connection.isConnected = false;
    } else {
      console.log("not disconnecting from the DB");
    }
  }
}

const db = { connectDB, disconnectDB };
export default db;
