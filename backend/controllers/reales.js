const onzasMedidas = {
  sensores: [1, 1.1, 2.5, 0.8, 0.9, 0.8, 0.8],
  fechas: [
    "2022-01-23",
    "2022-01-24",
    "2022-01-25",
    "2022-01-26",
    "2022-01-27",
    "2022-01-28",
    "2022-01-29"
  ]
}

const get = (req, res) => {
  res.status(500).send("No implementado")
}

module.exports = {
  get
}