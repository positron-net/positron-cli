const pf = require('platform-folders')
const chalk = require('chalk')

// Import commands module
const commands = require('./modules/commands.js')
const { log } = require('./modules/Charge')

global.CONF_DIR = `${pf.getConfigHome()}/PositronNetwork`
const args = process.argv.splice(2)

console.log('\033c')

console.log(chalk.yellow.bold(`
/$$$$$$$                     /$$   /$$                                  
| $$__  $$                   |__/  | $$                                  
| $$  \\ $$ /$$$$$$   /$$$$$$$ /$$ /$$$$$$    /$$$$$$   /$$$$$$  /$$$$$$$ 
| $$$$$$$//$$__  $$ /$$_____/| $$|_  $$_/   /$$__  $$ /$$__  $$| $$__  $$
| $$____/| $$  \\ $$|  $$$$$$ | $$  | $$    | $$  \\__/| $$  \\ $$| $$  \\ $$
| $$     | $$  | $$ \\____  $$| $$  | $$ /$$| $$      | $$  | $$| $$  | $$
| $$     |  $$$$$$/ /$$$$$$$/| $$  |  $$$$/| $$      |  $$$$$$/| $$  | $$
|__/      \\______/ |_______/ |__/   \\___/  |__/       \\______/ |__/  |__/ 

`))

commands(args[0], args.splice(1))
.then(res => {
  require(`./commands/${res.command}.js`)(res.options)
})
.catch(res => {
  log.error(res)
})