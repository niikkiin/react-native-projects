const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const pointSchema = new mongoose.Schema({
  timestamp: Number,
  coords: {
    latitude: Number,
    longitude: Number,
    altitude: Number,
    accuracy: Number,
    heading: Number,
    speed: Number,
  },
});

const TrackSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      default: "",
    },
    locations: [pointSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = User = mongoose.model("Track", TrackSchema);
