const mongoose = require("mongoose");

const monthScheme = mongoose.Schema({
  month: String,
  year: String,
});

module.exports = mongoose.model("Month", monthScheme);
