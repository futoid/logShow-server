const { Schema, model } = require("mongoose");

const logSchema = new Schema({
  level: String,
  message: String,
  resourceId: String,
  timestamp: String,
  traceId: String,
  spanId: String,
  commit: String,
  metadata: {
    parentResourceId: String,
  },
});

const Log = model("Log", logSchema);

module.exports = Log;
