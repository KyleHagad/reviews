"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OpinionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'draft',
  },
  allowComment: {
    type: Boolean,
    default: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'member'
  },
  date:{
    type: Date,
    default: Date.now,
  },
  comments: [{
    commentBody: {
      type: String,
      required: true,
    },
    commentDate: {
      type: Date,
      default: Date.now,
    },
    commentAuthor: {
      type: Schema.Types.ObjectId,
      ref: 'member',
    }
  }]
});

module.exports('opinion', OpinionSchema, 'opinions');
