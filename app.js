//imports
const express = require("express")
const morgan = require("morgan")
const errorHandler = require("./middlewares/errorMiddleware")
const pageNotFoundMiddleware = require("./middlewares/pageNotFoundMiddleware")
require("dotenv").config({})

//db
const connectDB = require("./db/connect")

//routes
const personRoutes = require("./routes/person")

const app = express()

app.use(morgan("dev"))
//middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api/v1/person", personRoutes)

//page not found
app.use(pageNotFoundMiddleware)

//error handler
app.use(errorHandler)

const Port = 8080

const startApp = async () => {
  try {
    await connectDB(process.env.MONGODB_URI)
    app.listen(Port, () => {
      console.log(`server running on port ${Port}`)
    })
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

startApp()
