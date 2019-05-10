const db = require('../modules/db.js')
const { auth, log } = require('../../Charge')

module.exports = (options) => {
  log.info('Generating token...')
  if (options.id) {
    auth.regenerate(options.id, options.user, options.pass).then(token => {
      db
      .set('auth.token', token)
      .set('auth.id', options.id)
      .write()
    })
  } else {
    auth.generate(options.user, options.pass).then(result => {
      db
      .set('auth.token', result.token)
      .set('auth.id', result.id)
      .write()
    })
  }
  log.info('Token successfully generated')
}