const Person = require("../models/Person")
const asyncWrapper = require("../middlewares/asyncWrapper")
const PersonAPIError = require("../errors/error")

const getAllPerson = asyncWrapper(async (req, res) => {
  const people = await Person.find({})

  return res.status(200).json({ people })
})

const createPerson = asyncWrapper(async (req, res) => {
  const person = await Person.create(req.body)

  return res.status(201).json(person)
})

const getSinglePerson = asyncWrapper(async (req, res, next) => {
  const { id: personId } = req.params

  const person = await Person.findById(personId)

  if (!person) {
    return next(
      new PersonAPIError(`person with id: ${personId} not found`, 404)
    )
  }

  return res.status(200).json(person)
})

const updatePerson = asyncWrapper(async (req, res, next) => {
  const { id: personId } = req.params

  const person = await Person.findByIdAndUpdate(personId, req.body, {
    new: true,
    runValidators: true,
  })

  if (!person) {
    return next(
      new PersonAPIError(`person with id ${personId} doesn't exist`, 404)
    )
  }
  return res.status(200).json(person)
})

const deletePerson = asyncWrapper(async (req, res, next) => {
  const { id: personId } = req.params

  const person = await Person.findByIdAndDelete(personId)

  if (!person) {
    return next(
      new PersonAPIError(`person with Id : ${personId} not found`, 404)
    )
  }

  return res.status(200).send()
})

module.exports = {
  getAllPerson,
  createPerson,
  getSinglePerson,
  updatePerson,
  deletePerson,
}
