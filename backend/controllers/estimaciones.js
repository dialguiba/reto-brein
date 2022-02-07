const onzasProyectadas = {
  machineLearning: [1.5, 2.0, 2.6, 0.9, 1.5, 0.8, 1.2],
  tradicional: [0.5, 0.6, 0.8, 0.3, 0.8, 0.7, 0.6],
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

const dashboard = {
  fechaActualizacion: "2022-01-28",
  onzasProyectadas
}

const get = (req, res) => {
  res.send(dashboard)
}

module.exports = {
  get
}
