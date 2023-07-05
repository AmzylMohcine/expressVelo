const router = require('express').Router();
const {getDatas, addDatas, updateData, deleteDatas, getOne} = require('../controllers/basicController');

router.get('/greetings/:name', (req, res) => {
    res.send(`Bonjour ${req.params.name}`);
})

// router.get('/datas', (req, res) => {
//     res.send(getDatas);
// })
router.get('/datas', getDatas);
router.get('/datas/:id', getOne);
router.post('/datas/add', addDatas);
router.put('/datas/update/:id', updateData);
router.delete('/datas/delete/:id', deleteDatas);

module.exports = router;