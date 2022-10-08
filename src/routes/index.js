import { Router } from 'express';
// import { User } from '../../db/models';

const router = Router();

router.get('/', async (req, res) => {
  // const users = await User.findAll({ order: [['id', 'DESC']] });
  res.render('Layout', { });
});

export default router;
