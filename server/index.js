import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const url = process.env.DB_URL
const dbName = "etfSelector"

export default async () => {
  try {
    await mongoose.connect(url+dbName)
    console.log('DB connection established')
  } catch (err) {
    console.error('DB connection failed', err)
  }
};
