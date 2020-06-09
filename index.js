const express = require('express')
const app = express()
const mongoose = require('mongoose')

const bodyParser = require('body-parser')

const salary = require('./api/routes/salary')

mongoose.connect(
  'mongodb+srv://salaryTracker:salaryTracker@mydb-pfqge.mongodb.net/salaryData?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
)

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS',
  )
  next()
})

app.use(bodyParser.json())
app.use(salary)

const port = process.env.PORT || 3000

app.listen(port, () => console.log('Listening on port 3000'))

module.exports = app
