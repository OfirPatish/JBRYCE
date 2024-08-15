const Operation = require("../models/Operation");

exports.getAllOperations = async (req, res) => {
  try {
    const operations = await Operation.find({ accountNumber: req.params.accountNumber });
    res.json(operations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addOperation = async (req, res) => {
  try {
    const operation = new Operation(req.body);
    const savedOperation = await operation.save();
    res.status(201).json({ message: "Action added successfully", objectId: savedOperation._id });
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({ error: err.message });
    }
    res.status(500).json({ error: err.message });
  }
};
