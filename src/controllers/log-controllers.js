const { createLog, getLogs, getTotalData } = require("../service/log-service");

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
    const data = {
      skipNumber: req.query.skip,
      limitNumber: req.query.limit,
    };
    const response = await getLogs(data);
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

const getLength = async (req, res) => {
  try {
    const response = await getTotalData();
    return res.status(201).json({
      data: response,
      success: true,
      message: "total length fetched",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to fetched the length of data",
      error: error,
    });
  }
};

module.exports = {
  create,
  get,
  getLength,
};
