const router = require('express').Router()
const {Jobbo} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const jobbos = await Jobbo.findAll()
    res.json(jobbos)
  } catch (err) {
    next(err)
  }
})
