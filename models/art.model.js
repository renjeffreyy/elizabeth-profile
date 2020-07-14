const mongoose = require('mongoose');

const ArtSchema = new mongoose.Schema({
  artName: {
    type: String,
    required: true,
  },
  artDescription: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Art = mongoose.model('art', ArtSchema);
