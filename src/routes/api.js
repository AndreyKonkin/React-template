import { Router } from 'express';
// import { Entry } from '../db/models';
// import { deleteProtect } from '../middlewares';

const router = Router();

// router.route('/entries')
//   .get(async (req, res) => {
//     // const entries = await Entry.findAll({ order: [['id', 'DESC']] });
//     // res.json(entries);
//   })
//   .post(deleteProtect, async (req, res) => {
//     // await Entry.create(req.body);
//     // res.sendStatus(200);
//   });

// router.route('/entries/:id')
//   .get(async (req, res) => {
//     // const entry = await Entry.findOne({ where: { id: req.params.id } });
//     // res.json(entry);
//   })
//   .put(updateProtect, async (req, res) => {
//     // await Entry.update(req.body, { where: { id: req.params.id } });
//     // res.sendStatus(200);
//   })
//   .delete(deleteProtect, async (req, res) => {
//     // await Entry.destroy({ where: { id: req.params.id } });
//     // res.sendStatus(200);
//   });

export default router;
