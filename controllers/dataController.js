const DashData = require('../models/dataModel');
const asyncHandler = require('express-async-handler');




const getDashData = asyncHandler(async (req, res) => {
  const info = await DashData.find()
  res.json(info);
});

module.exports = {getDashData};

