const mongoose = require('mongoose');

const ArtSchema = new mongoose.Schema({
  artName: {
    type: String,
    required: true,
  },
  artDescription: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Art = mongoose.model('art', ArtSchema);
