const express = require("express");
const router = express.Router();
const logRouter = require("../routes/v1/index");

router.use("/v1", logRouter);

module.exports = router;
