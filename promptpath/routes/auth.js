const express = require('express');
const router = express.Router();
const session = require('express-session');

const users = {}; // Temporary in-memory user storage

router.use(session({
    secret: process.env.SESSION_SECRET || 'secret',
    resave: false,
    saveUninitialized: true
}));

router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

router.get('/register', (req, res) => {
    res.render('register', { title: 'Register' });
});

router.post('/register', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Missing email or password' });
    if (users[email]) return res.status(400).json({ error: 'User exists' });
    users[email] = { password };
    res.redirect('/auth/login');
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Missing email or password' });
    if (users[email] && users[email].password === password) {
        req.session.user = email;
        return res.redirect('/');
    }
    res.status(401).json({ error: 'Invalid credentials' });
});

module.exports = router;
