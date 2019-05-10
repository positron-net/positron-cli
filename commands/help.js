const chalk = require('chalk')
const commands = require('../modules/commands.json')

module.exports = () => {
  for (a in commands) {
    console.log(`${chalk.yellow.bold('  > ' + commands[a].name)} ${commands[a].description}`)
    for (b in commands[a].args) {
      const required = commands[a].args[b].required ? chalk.italic('[required]') : ''
      console.log(`     > ${chalk.bold(commands[a].args[b].name)} ${commands[a].args[b].description} ${required}`)
    }
    console.log('\n')
  }
}