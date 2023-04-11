// app.js

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = process.env.PORT || 3000;

// Use body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

// Use express-session middleware to manage user sessions
app.use(session({
  secret: 'secret-key', // replace with your own secret key
  resave: false,
  saveUninitialized: true
}));

// Dummy users for demo purposes only
const users = [
  { id: '1', email: 'user1@example.com', password: '$2b$10$U3J6fIZ7lNcIgWWbrRiLjuGmIy/XVmkI9QnU6vYq6JNwE88Zs6sPu' }, // password is "password1"
  { id: '2', email: 'user2@example.com', password: '$2b$10$U3J6fIZ7lNcIgWWbrRiLjuGmIy/XVmkI9QnU6vYq6JNwE88Zs6sPu' }, // password is "password2"
  { id: '3', email: 'user3@example.com', password: '$2b$10$U3J6fIZ7lNcIgWWbrRiLjuGmIy/XVmkI9QnU6vYq6JNwE88Zs6sPu' }  // password is "password3"
];

// API endpoint for user login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Find user with matching email
  const user = users.find(user => user.email === email);

  if (!user) {
    // User with email not found
    res.status(401).json({ success: false, message: 'Invalid email or password' });
  } else {
    // Compare password with hashed password in database
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        // Handle error
        res.status(500).json({ success: false, message: 'Internal server error' });
      } else if (!result) {
        // Passwords don't match
        res.status(401).json({ success: false, message: 'Invalid email or password' });
      } else {
        // Passwords match, create user session and redirect to home page
        req.session.userId = user.id;
        res.json({ success: true, message: 'Login successful' });
      }
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
