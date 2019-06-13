"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
  googleID: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports('member', MemberSchema, 'members');
