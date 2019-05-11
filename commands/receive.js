const { agora, receiver, log } = require('../modules/Charge/index.js')
const db = require('../modules/db.js') 

module.exports = (options) => {
  const token = db.get('auth.token').value()
  
  options.port = Number(options.port)

  log.info('Connecting to the network...')
  agora.connect(token, options.port).then(res => {
    log.info(`Connected ! Listening on ${res.port}...`)
    receiver('0.0.0.0', res.port).event.on('message', data => {
      log.info('File Received !')
      console.log(Buffer.from(data.message.data).toString())
      log.info('Done !')
    })
  })
}