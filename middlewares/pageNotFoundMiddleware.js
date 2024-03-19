module.exports = (req, res) => {
  res.status(404).json({ msg: "Page Not Found" })
}
