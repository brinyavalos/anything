const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('prompt', { title: 'Prompt Optimization' });
});

router.post('/optimize', async (req, res) => {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt required' });
    const enhancedPrompt = `Enhanced: ${prompt}`; // Placeholder logic
    res.render('prompt', { title: 'Prompt Optimization', original: prompt, optimized: enhancedPrompt });
});

module.exports = router;