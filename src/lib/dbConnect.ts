import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Global variable to hold the connection status in serverless environments
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Connect to MongoDB.
 */
async function dbConnect() {
  if (cached.conn) {
    // If already connected, return the cached connection.
    return cached.conn;
  }

  if (!cached.promise) {
    // If no existing connection, create a new promise and connect to MongoDB.
    cached.promise = mongoose.connect(MONGODB_URI).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
