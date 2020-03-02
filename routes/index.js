const express = require('express'),
  router = express.Router(),
  surveyModel = require('../models/surveymodel') ;

/* GET home page. */
router.get('/', async (req, res) => {
  surveyData = await surveyModel.getAll();
  statusData = await surveyModel.getStatus();

  res.render('template', {
    locals: {
      title: 'Welcome',
      surveyData: surveyData,
      statusData: statusData
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

// router.post('/', function(req, res) => {
//   console.log('the request is: ', req.body);
// })

module.exports = router;
