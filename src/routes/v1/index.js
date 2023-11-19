const express = require("express");
const router = express.Router();
const { create, get, getLength } = require("../../controllers/log-controllers");

router.post("/log/add", create);
router.get("/log/length", getLength);
router.get("/logs", get);

module.exports = router;
