const mongoose = require("mongoose");

const salaryScheme = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  amount: Number,
  amountTds: Number,
  transactionDetail: String,
  amountPurpose: String,
  amountType: String,
  amountCurrency: String,
  date: Date,
});

module.exports = mongoose.model("Salary", salaryScheme);
