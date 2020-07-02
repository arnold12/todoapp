const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const logger = require('../utility/helper/common-functions');
const route = express.Router();

route.post('/', async (req, res)=>{
  const{firstName, lastName} = req.body;
  let user = {
    firstName,
    lastName
  };
  let userModel = new User(user);
  await userModel.save();
  logger.info('User Create : ', userModel);
  res.json(userModel);
});

route.get('/', async (req, res) => {
  let userRes = await User.find({});
  logger.info('User fetch : ', userRes);
  res.json(userRes);
});

route.put('/', async (req, res) => {
  let userRes = await User.updateMany({firstName: req.body.firstName}, {firstName: req.body.updatedFirstName});
  logger.info('User update : ', userRes);
  res.json(userRes);
});

module.exports = route;