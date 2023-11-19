const { createLog, getLogs } = require("../service/log-service");

const create = async (req, res) => {
  try {
    const data = req.body;
    const response = await createLog(data);
    return res.status(201).json({
      data: response,
      success: true,
      message: "log added",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to add log",
      error: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await getLogs();
    return res.status(201).json({
      data: response,
      success: true,
      message: "logs fetched",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to fetch log",
      error: error,
    });
  }
};

module.exports = {
  create,
  get,
};
