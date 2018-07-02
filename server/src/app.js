const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const sequelize = require('./models')
const config = require('.config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    message: `Hi There ${req.body.email}! You already registered! Have fun!`
  })
})

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server was started on port ${config.port}`)
  })
