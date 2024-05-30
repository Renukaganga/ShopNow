import mongoose from 'mongoose'

async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!)
  } catch (error: any) { // Specify type 'any' or 'Error'
    console.error('MongoDB connection error:', error.message)
    throw new Error('MongoDB connection failed!')
  }
}

export default dbConnect
