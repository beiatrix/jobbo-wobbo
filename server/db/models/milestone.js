const Sequelize = require('sequelize')
const db = require('../db')

const Milestone = db.define({
  // date: {
  //   type: Sequelize.DATE,
  //   defaultValue: Sequelize.NOW
  // }
  milestone: {
    type: Sequelize.STRING
    // type: Sequelize.ENUM(
    //   'behavioral phone screen',
    //   'technical phone screen',
    //   'coding challenge',
    //   'on-site interview',
    //   'offer'
    // )
  }
})

module.exports = Milestone
