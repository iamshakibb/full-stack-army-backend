import express from 'express'

const publicRoute = express.Router();

publicRoute.route('/').all((req, res) => {
  const url = req.protocol + '://' + req.get('host') + req.originalUrl

  res.render('index', {
    url
  })
})

export default publicRoute