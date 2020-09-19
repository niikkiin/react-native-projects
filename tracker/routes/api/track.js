const express = require("express");
const router = express.Router();

// config
const config = require("config");

// validation
const { check, validationResult } = require("express-validator");

// auth middleware
const auth = require('../../middleware/requireAuth');

// token for users
const jwt = require("jsonwebtoken");

// models
const User = require("../../models/User");
const Track = require("../../models/Track");

// @route     POST api/users
// @desc      Login user
// @access    Public
router.get(
  "/",
  auth,
  async (req, res) => {
    const tracks = await Track.find({ userId: req.user._id });

    res.send(tracks);
  }
);

// @route     POST api/users
// @desc      Login user
// @access    Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("locations", "Location is required").not().isEmpty(),
  ],
  auth,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, locations } = req.body;
    try {
      const track = new Track({ name, locations, userId: req.user._id });
      await track.save();
  
      res.send(track);
    } catch (err) {
      res.status(422).send({ msg: err.message });
    }
  }
);


module.exports = router;
