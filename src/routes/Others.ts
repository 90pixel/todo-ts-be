import express from 'express';

const router = express.Router();

router.get('/stats', (req, res) => {
  res.send('system is active');
});

export default router;
