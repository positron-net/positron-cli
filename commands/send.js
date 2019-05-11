const { agora, log, sender } = require('../modules/Charge')
const fs = require('fs')

module.exports = (options) => {

  log.info('Gettings users info...')
  agora.getIp(options.token).then(infos => {
    log.info('Sending file...')
    fs.readFile(options.path, (err, data) => {
      if (err) {
        log.error(err)
        process.exit()
      }

      sender(data, infos.address, infos.port)
    })
  })
}