const PersonAPIError = require("../errors/error")

const errorHandler = (err, req, res, next) => {
  //check if error is custom

  console.log(err)
  if (err instanceof PersonAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }

  //default internal server error
  return res.status(500).json({ mgs: "INTERNAL SERVER ERROR" })
}

module.exports = errorHandler
