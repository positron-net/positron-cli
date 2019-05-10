const fs = require('fs')

// import lowdb
const lowdb = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const configFile = `${CONF_DIR}/db.json`

if (fs.existsSync(configFile) === false) {
  fs.mkdir(CONF_DIR, err => {
    if (err) throw err
    fs.writeFileSync(configFile, '')
  })
}

const adapter = new FileSync(configFile)
const db = lowdb(adapter)

db.defaults({ auth: {}, files: [] }).write()

module.exports = db