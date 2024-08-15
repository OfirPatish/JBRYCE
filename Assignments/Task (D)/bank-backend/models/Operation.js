const mongoose = require("mongoose");

const operationSchema = new mongoose.Schema({
  accountNumber: { type: String, required: true },
  type: { type: String, enum: ["withdrawal", "deposit", "loan"], required: true },
  amount: { type: Number, required: true, min: 0 },
  date: { type: Date, required: true },
  interest: { type: Number, min: 0 },
  amountOfPayments: { type: Number, min: 0 },
  dateOfLoan: { type: Date },
});

// Middleware to check for duplicate operations
operationSchema.pre("save", async function (next) {
  const operation = this;
  const duplicate = await mongoose.models.Operation.findOne({
    accountNumber: operation.accountNumber,
    type: operation.type,
    amount: operation.amount,
    date: operation.date,
  });

  if (duplicate) {
    const error = new Error("Duplicate operation detected");
    return next(error);
  }

  next();
});

module.exports = mongoose.model("Operation", operationSchema);
