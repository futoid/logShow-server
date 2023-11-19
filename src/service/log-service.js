const Log = require("../models/log");

const createLog = async (data) => {
  try {
    for (let i = 1; i <= 1000; i++) {
      await Log.create(data);
    }
    return "1000 data added";
  } catch (error) {
    console.log("Error in log service layer", error);
  }
};

const getLogs = async (data) => {
  try {
    const response = await Log.find();
    return response;
  } catch (error) {
    console.log("Error in log service layer", error);
  }
};

module.exports = {
  createLog,
  getLogs,
};
