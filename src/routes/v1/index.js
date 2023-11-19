const express = require("express");
const router = express.Router();
const { create, get } = require("../../controllers/log-controllers");

router.post("/log/add", create);

router.get("/logs", get);

module.exports = router;
