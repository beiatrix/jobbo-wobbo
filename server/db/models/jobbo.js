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
      'online apply',
      'linkedin - easy apply',
      'angel list',
      'recruiting event [fullstack]',
      'recruiting event [womenhack]',
      'internal reference',
      'coding challenge',
      'triplebyte'
    ),
    allowNull: false
  },
  behavioralScreen: {
    type: Sequelize.DATE,
    defaultValue: null
  },
  technicalScreen: {
    type: Sequelize.DATE,
    defaultValue: null
  },
  codingChallenge: {
    type: Sequelize.DATE,
    defaultValue: null
  },
  onsite: {
    type: Sequelize.DATE,
    defaultValue: null
  },
  offer: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Jobbo
