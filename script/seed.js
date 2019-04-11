'use strict'

const db = require('../server/db')
const {User, Jobbo} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const jobbo = await Promise.all([
    Jobbo.create({
      company: 'etsy',
      dateApplied: '2019-02-11',
      method: 'recruiter contacted me',
      behavioralScreen: null,
      technicalScreen: null,
      codingChallenge: '2019-03-11', // fix
      onsite: null,
      offer: null
    }),
    Jobbo.create({
      company: 'adobe',
      dateApplied: '2019-02-13',
      method: 'linkedin - easy apply',
      behavioralScreen: null,
      technicalScreen: null,
      codingChallenge: null,
      onsite: null,
      offer: null
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${jobbo.length} jobbos`)
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
