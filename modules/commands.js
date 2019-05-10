const commands = require('./commands.json')

module.exports = (cmd, args) => {
  return new Promise(resolve => {
    let finalArgs = {}

    for (a in commands) {
      if (commands[a].name === cmd) {
        for (b in args) {
          for (c in commands[a].args) {
            let argName = args[b].split('=')[0]
            const argContent = args[b].split('=')[1]
            if (argName === commands[a].args[c].name) {
              argName = argName.replace('--', '')
              finalArgs = Object.assign(finalArgs, JSON.parse(`{ "${argName}": "${argContent}" }`))
            }
          }
        }
        break
      }
    }

    if (finalArgs === undefined || cmd === undefined) {
      resolve({
        command: 'help',
        options: finalArgs
      })
    } else {
      resolve({
        command: cmd,
        options: finalArgs
      })
    }
  })
}