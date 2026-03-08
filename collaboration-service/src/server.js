const express = require("express")
const cors = require("cors")

const connectDB = require("./config/db")
const documentRoutes = require("./routes/document.routes")

const app = express()

app.use(cors())
app.use(express.json())

connectDB()

app.use("/documents", documentRoutes)

app.listen(5001, () => {

  console.log("Collaboration service running on port 5001")

})