const express = require("express");
const connectDB = require('./config/db');

// middleware
// auth middleware
const auth = require('./middleware/requireAuth');

const app = express();

// connect to DB
connectDB();

// init json middleware
app.use(express.json({ extended: false }));

app.get("/", auth, (req, res) => res.send(`API Running.\n Your email: ${req.user.email}`));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/tracks', require('./routes/api/track'));
// app.use('/api/profile', require('./routes/api/profiles'));
// app.use('/api/items', require('./routes/api/items'));
// app.use('/api/categories', require('./routes/api/category'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
