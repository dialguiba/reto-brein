const express = require('express')
const estimacionesRouter = require('./routes/estimaciones')
const realesRouter = require('./routes/reales')

const app = express()
const port = 3001

app.use('/estimaciones', estimacionesRouter)
app.use('/reales', realesRouter)

app.listen(port, () => {
  console.log(`Aplicación funcionando en el puerto ${port}`)
})
