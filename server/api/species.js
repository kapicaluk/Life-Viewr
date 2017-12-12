const router = require('express').Router();
const { Species } = require('../db/models');

router.get('/', (req, res, next) => {
  Species.findAll()
    .then(species => res.json(species))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  Species.findById(req.params.id)
    .then(singleSpecies => res.json(singleSpecies))
    .catch(next);
});

//add species 
router.post('/', (req, res, next) => {
  Species.create(req.body)
    .then(newSpecies => {
      res.json(newSpecies);
    })
    .catch(next);
});

//update product
router.put('/species/:id', (req, res, next) => {
  const id = req.params.id;
  Species.findById(id)
    .then(foundSpecies => {
      foundSpecies.update(req.body);
    })
    .then(updatedSpecies => {
      res.json(updatedSpecies);
    })
    .catch(next);
});

module.exports = router;
