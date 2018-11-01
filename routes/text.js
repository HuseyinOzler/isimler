var express = require('express');
var router = express.Router();

//model
const Baslik = require('../Models/Text');

router.post('/', (req, res, next) => {
  const baslik = new Baslik(req.body);
  const promise = baslik.save();
  promise.then((data)=>{
    res.json({data});
  }).catch((err)=>{
    res.json(err)
  })
});

router.get('/list', (req, res, next) => {
  const promise = Baslik.find({ });
  promise.then((bsk)=>{
    res.json({bsk});
  }).catch((err)=>{
    res.json(err);
  })
});

router.get('/:id', (req, res) => {
  const promise = Baslik.findById(req.params.id);
  promise.then((data)=>{
    res.json(data);
  }).catch((err)=>{
    res.json(err)
  })
});
























module.exports = router;
