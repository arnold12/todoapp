const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const route = express.Router();

route.post('/', async (req, res)=>{
  const{firstName, lastName} = req.body;
  let user = {
    firstName,
    lastName
  };
  let userModel = new User(user);
  await userModel.save();
  res.json(userModel);
});

route.get('/', async (req, res) => {
  let userRes = await User.find({});
  res.json(userRes);
});

route.put('/', async (req, res) => {
  let userRes = await User.updateMany({firstName: req.body.firstName}, {firstName: req.body.updatedFirstName});
  res.json(userRes);
});

module.exports = route;