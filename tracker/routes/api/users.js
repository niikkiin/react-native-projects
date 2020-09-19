const express = require("express");
const router = express.Router();

// config
const config = require("config");

// validation
const { check, validationResult } = require("express-validator");

// encrypt password
const bcrypt = require("bcryptjs");

// token for users
const jwt = require("jsonwebtoken");

// models
const User = require("../../models/User");

// @route     GET api/users
// @desc      Register user
// @access    Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").not().isEmpty(),
    check(
      "password",
      "Please enter a password with 6 or more characters."
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exist." }] });
      }

      user = new User({
        name,
        email,
        password,
      });

      // encrypt password
      // const salt = await bcrypt.genSalt(10);

      // user.password = await bcrypt.hash(password, salt);

      // save user
      await user.save();

      // return jsonwebtoken
      const payload = {
        userId: user._id,
      };

      // const token = jwt.sign({ userId: user._id }, config.get("jwtSecret"), {
      //   expiresIn: 360000,
      // });

      // res.send({ token });

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route     POST api/users
// @desc      Login user
// @access    Public
router.post(
  "/login",
  [
    check("email", "Please include a valid email").not().isEmpty(),
    check(
      "password",
      "Please enter a password with 6 or more characters."
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(422)
          .json({ errors: [{ msg: "Invalid password or email." }] });
      }

      try {
        await user.comparePassword(password);
        const token = jwt.sign({ userId: user._id }, config.get("jwtSecret"));

        res.send({ token });
      } catch (err) {
        return res.status(422).send({ msg: "Invalid password or email." });
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
