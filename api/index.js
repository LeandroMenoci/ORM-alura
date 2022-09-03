const express = require('express')
const bodyParser = require('body-parser')
const port = 3000

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200).send('Hello World')
})

app.listen(port, () => {
  console.log('Servidor no ar ')
})

module.exports = app