const express = require("express");

const mongoose = require("mongoose");
const router = express.Router();

const Salary = require("../models/salary");
const Month = require("../models/month");

router.post("/add", function (req, res) {
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
  });

  salary
    .save()
    .then((result) => {
      console.log("111", result);
    })
    .catch((err) => console.log("...", err));

  res.status(201).json({
    message: "Insert data successfully",
  });
});

router.get("/list", function (req, res) {
  Salary.find()
    .exec()
    .then((doc) => {
      console.log("all data", doc);
      res.status(200).json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get("/find", function (req, res) {
  //   console.log("find", req.body);
  //   const month = new Month({
  //     month: req.body.month,
  //     year: req.body.year,
  //   });

  Salary.find()
    .exec()
    .then((doc) => {
      console.log("all data", doc);
      res.status(200).json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
