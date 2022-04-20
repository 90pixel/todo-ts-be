import express from 'express';

import others from './Others';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('ok!');
});

// other root routes (etc. /stats)
router.use(others);

export default router;
