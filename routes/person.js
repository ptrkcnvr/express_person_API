const router = require("express").Router()

const {
  getAllPerson,
  createPerson,
  getSinglePerson,
  updatePerson,
  deletePerson,
} = require("../controllers/person")

router.route("/").get(getAllPerson).post(createPerson)

router
  .route("/:id")
  .get(getSinglePerson)
  .patch(updatePerson)
  .delete(deletePerson)

module.exports = router
