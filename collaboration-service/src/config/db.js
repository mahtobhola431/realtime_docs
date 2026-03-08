const mongoose = require("mongoose")

const connectDB = async () => {

  try {

    await mongoose.connect(
      "mongodb+srv://bholamahto255_db_user:bhola1234@cluster0.2ze0gye.mongodb.net/realtime-docs"
    )

    console.log("MongoDB connected")

  } catch (error) {

    console.error("DB connection error:", error)
    process.exit(1)

  }

}

module.exports = connectDB