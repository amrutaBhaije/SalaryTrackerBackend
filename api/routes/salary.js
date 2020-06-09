const express = require('express')

const mongoose = require('mongoose')
const router = express.Router()

const Salary = require('../models/salary')
const Month = require('../models/month')

router.post('/add', function (req, res) {
  const salary = new Salary({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    amount: req.body.amount,
    amountTds: req.body.amountTds,
    transactionDetail: req.body.transactionDetail,
    amountPurpose: req.body.amountPurpose,
    amountType: req.body.amountType,
    amountCurrency: req.body.amountCurrency,
    date: req.body.date,
  })

  salary
    .save()
    .then((result) => {
      res.status(201).json({
        message: 'Insert data successfully',
      })
    })
    .catch((err) =>
      res.status(500).json({
        error: err,
      }),
    )
})

router.get('/list', function (req, res) {
  Salary.find()
    .exec()
    .then((doc) => {
      res.status(200).json(doc)
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      })
    })
})

router.post('/find', function (req, res) {
  var month = req.body.month
  var year = req.body.year

  Salary.aggregate([
    {
      $project: {
        doc: '$$ROOT',
        year: { $year: '$date' },
        month: { $month: '$date' },
      },
    },
    { $match: { month: month, year: year } },
  ]).then((doc) => {
    res.status(200).json(doc)
  })
})

module.exports = router
