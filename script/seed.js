'use strict'

const db = require('../server/db')
const {User, Jobbo} = require('../server/db/models')

const jobbos = [
  {
    company: 'Etsy',
    dateApplied: '2019-02-11',
    method: 'recruiter contacted me',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: '2019-03-11', // fix
    onsite: null,
    offer: false
  },
  {
    company: 'Adobe',
    dateApplied: '2019-02-13',
    method: 'linkedin - easy apply',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'The Atlantic',
    dateApplied: '2019-02-14',
    method: 'hiring day [fullstack]',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Annalect',
    dateApplied: '2019-02-14',
    method: 'hiring day [fullstack]',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: '2019-02-27',
    offer: true
  },
  {
    company: 'Cedrus',
    dateApplied: '2019-02-14',
    method: 'hiring day [fullstack]',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'JP Morgan',
    dateApplied: '2019-02-14',
    method: 'hiring day [fullstack]',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Nomura',
    dateApplied: '2019-02-14',
    method: 'hiring day [fullstack]',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Knotel',
    dateApplied: '2019-02-14',
    method: 'hiring day [fullstack]',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Simon',
    dateApplied: '2019-02-14',
    method: 'hiring day [fullstack]',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Fabric',
    dateApplied: '2019-02-14',
    method: 'recruiter contacted me',
    behavioralScreen: '2019-02-28',
    technicalScreen: null,
    codingChallenge: '2019-03-04',
    onsite: null,
    offer: false
  },
  {
    company: 'Cedar',
    dateApplied: '2019-02-19',
    method: 'recruiter contacted me',
    behavioralScreen: '2019-02-26',
    technicalScreen: '2019-03-14',
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Gartner',
    dateApplied: '2019-02-19',
    method: 'recruiter contacted me',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Capgemini',
    dateApplied: '2019-02-14',
    method: 'recruiter contacted me',
    behavioralScreen: null,
    technicalScreen: '2019-03-04',
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Cognitive Group',
    dateApplied: '2019-02-20',
    method: 'recruiter contacted me',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'SeatGeek',
    dateApplied: '2019-02-20',
    method: 'angel list',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Wagmo',
    dateApplied: '2019-02-22',
    method: 'angel list',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'TodayTix',
    dateApplied: '2019-02-22',
    method: 'angel list',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Google',
    dateApplied: '2019-02-26',
    method: 'recruiter contacted me',
    behavioralScreen: '2019-02-27',
    technicalScreen: null,
    codingChallenge: null,
    onsite: '2019-04-24',
    offer: false
  },
  {
    company: 'Synergy Interactive',
    dateApplied: '2019-02-28',
    method: 'linkedin - easy apply',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Rose Digital',
    dateApplied: '2019-02-28',
    method: 'angel list',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Hive',
    dateApplied: '2019-02-28',
    method: 'angel list',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Quip',
    dateApplied: '2019-02-28',
    method: 'online apply',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Underdog.io',
    dateApplied: '2019-02-28',
    method: 'online apply',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'RADAR',
    dateApplied: '2019-02-28',
    method: 'linkedin - easy apply',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Lyft',
    dateApplied: '2019-02-28',
    method: 'online apply',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Boxed',
    dateApplied: '2019-02-28',
    method: 'online apply',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Amazon',
    dateApplied: '2019-02-28',
    method: 'online apply',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Quantitative Systems',
    dateApplied: '2019-02-28',
    method: 'linkedin - easy apply',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Vimeo',
    dateApplied: '2019-02-28',
    method: 'online apply',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Andaimo Partners',
    dateApplied: '2019-02-28',
    method: 'linkedin - easy apply',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'CB Insights',
    dateApplied: '2019-02-28',
    method: 'linkedin - easy apply',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Roc Search',
    dateApplied: '2019-02-28',
    method: 'linkedin - easy apply',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Synergis',
    dateApplied: '2019-02-28',
    method: 'linkedin - easy apply',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Tumblr',
    dateApplied: '2019-02-28',
    method: 'online apply',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Nike',
    dateApplied: '2019-03-01',
    method: 'recruiter contacted me',
    behavioralScreen: '2019-03-01',
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'HackerRank',
    dateApplied: '2019-03-05',
    method: 'coding challenge',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: '2019-03-16',
    onsite: null,
    offer: false
  },
  {
    company: 'Haven Life',
    dateApplied: '2019-03-07',
    method: 'hiring day [womenhack]',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'New York Times',
    dateApplied: '2019-03-07',
    method: 'hiring day [womenhack]',
    behavioralScreen: '2019-03-14',
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Peloton',
    dateApplied: '2019-03-07',
    method: 'hiring day [womenhack]',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Squarespace',
    dateApplied: '2019-03-07',
    method: 'hiring day [womenhack]',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Om Wellness',
    dateApplied: '2019-03-07',
    method: 'internal reference',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Amazon',
    dateApplied: '2019-03-08',
    method: 'recruiter contacted me',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'TripleByte',
    dateApplied: '2019-03-16',
    method: 'coding challenge',
    behavioralScreen: null,
    technicalScreen: '2019-03-18',
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Ascend.io',
    dateApplied: '2019-03-16',
    method: 'coding challenge',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: '2019-03-16',
    onsite: null,
    offer: false
  },
  {
    company: 'FlowCommand',
    dateApplied: '2019-03-18',
    method: 'linkedin - easy apply',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Hyfn',
    dateApplied: '2019-03-18',
    method: 'linkedin - easy apply',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Dorian',
    dateApplied: '2019-03-19',
    method: 'angel list',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Madison Logic',
    dateApplied: '2019-03-20',
    method: 'linkedin - easy apply',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Digital Movers, LLC',
    dateApplied: '2019-03-20',
    method: 'linkedin - easy apply',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Innovid',
    dateApplied: '2019-03-20',
    method: 'internal reference',
    behavioralScreen: '2019-04-03',
    technicalScreen: null,
    codingChallenge: null,
    onsite: '2019-04-15',
    offer: false
  },
  {
    company: 'Ritani',
    dateApplied: '2019-03-21',
    method: 'recruiter contacted me',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Telepath',
    dateApplied: '2019-03-25',
    method: 'triplebyte',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Tinfoil Security, Inc.',
    dateApplied: '2019-03-25',
    method: 'triplebyte',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Unit21',
    dateApplied: '2019-03-25',
    method: 'triplebyte',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Approsper, Inc.',
    dateApplied: '2019-03-25',
    method: 'triplebyte',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Aquabyte',
    dateApplied: '2019-03-25',
    method: 'triplebyte',
    behavioralScreen: '2019-03-27',
    technicalScreen: null,
    codingChallenge: null,
    onsite: '2019-04-08',
    offer: true
  },
  {
    company: 'Pilot.com',
    dateApplied: '2019-03-25',
    method: 'triplebyte',
    behavioralScreen: '2019-03-27',
    technicalScreen: null,
    codingChallenge: null,
    onsite: '2019-04-10',
    offer: true
  },
  {
    company: 'Ruggable',
    dateApplied: '2019-03-25',
    method: 'triplebyte',
    behavioralScreen: '2019-03-27',
    technicalScreen: null,
    codingChallenge: null,
    onsite: '2019-04-19',
    offer: true
  },
  {
    company: 'Nylas',
    dateApplied: '2019-03-25',
    method: 'triplebyte',
    behavioralScreen: '2019-03-28',
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Ladder',
    dateApplied: '2019-03-25',
    method: 'triplebyte',
    behavioralScreen: '2019-03-28',
    technicalScreen: null,
    codingChallenge: null,
    onsite: '2019-04-09',
    offer: false
  },
  {
    company: 'SoLo Funds',
    dateApplied: '2019-03-25',
    method: 'triplebyte',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Pathlight',
    dateApplied: '2019-03-27',
    method: 'triplebyte',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Pinterest',
    dateApplied: '2019-03-28',
    method: 'online apply',
    behavioralScreen: null,
    technicalScreen: '2019-04-14',
    codingChallenge: '2019-04-03',
    onsite: null,
    offer: false
  },
  {
    company: 'Open Phone',
    dateApplied: '2019-03-28',
    method: 'triplebyte',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'Girlboss',
    dateApplied: '2019-03-28',
    method: 'triplebyte',
    behavioralScreen: '2019-04-01',
    technicalScreen: null,
    codingChallenge: null,
    onsite: '2019-04-18',
    offer: false
  },
  {
    company: 'Bloomberg',
    dateApplied: '2019-04-01',
    method: 'recruiter contacted me',
    behavioralScreen: '2019-04-04',
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  },
  {
    company: 'American Express',
    dateApplied: '2019-04-04',
    method: 'recruiter contacted me',
    behavioralScreen: null,
    technicalScreen: null,
    codingChallenge: null,
    onsite: null,
    offer: false
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  await Promise.all(jobbos.map(jobbo => Jobbo.create(jobbo)))

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${jobbos.length} jobbos`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
