const express = require("express");
const router = express.Router();
const operationsController = require("../controllers/operationsController");

router.get("/:accountNumber", operationsController.getAllOperations);
router.post("/", operationsController.addOperation);

module.exports = router;
