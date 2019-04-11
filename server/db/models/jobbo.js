const Sequelize = require('sequelize')
const db = require('../db')

const Jobbo = db.define('jobbo', {
  company: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dateApplied: {
    type: Sequelize.DATE,
    allowNull: false
  },
  method: {
    type: Sequelize.ENUM(
      'recruiter contacted me',
      'linkedin - easy apply',
      'hiring day [fullstack]',
      'online apply',
      'angel list',
      'hiring day [womenhack]',
      'internal reference',
      'coding challenge',
      'triplebyte'
    ),
    allowNull: false
  },
  // REMOVE ALL THE BELOW AND JOIN ON MILESTONE???
  behavioralScreen: {
    type: Sequelize.BOOLEAN
  },
  technicalScreen: {
    type: Sequelize.BOOLEAN
  },
  codingChallenge: {
    type: Sequelize.BOOLEAN
  },
  onsite: {
    type: Sequelize.BOOLEAN
  },
  offer: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = Jobbo
