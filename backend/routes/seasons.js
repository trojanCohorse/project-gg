const router = require('express').Router();
let Season = require('../models/season.model');

// whateverurlhere/seasons/i/episode

router.route('/:id').get((req, res) => {
  // const id = req.params.id;
  
  // find all seasons
  // filter array to only the season that matches the id

  Season.find({ season: req.params.id })
    .then(seasons => res.json(seasons))
    .catch(err => res.status(400).json('Error: ' + err));
})





// const router = require('express').Router();
// let Exercise = require('../models/exercise.model');

// router.route('/').get((req, res) => {
//   Exercise.find()
//     .then(exercises => res.json(exercises))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/add').post((req, res) => {
  const { season, episodes } = req.body
  const newSeasonEpisode = new Season({ season , episodes })

  newSeasonEpisode.save()
    .then(() => res.json('SeasonEpisode added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})        

module.exports = router;