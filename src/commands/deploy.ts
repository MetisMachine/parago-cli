//
//  deploy.ts
//  parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/19/19
//  Copyright 2019 Skafos, LLC.
//

import * as ChildProcess from 'child_process'
import Command    from '../base'

export default class Deploy extends Command {
  static description = "Deploy model using defined command in config."

  static examples = [
    `$ pgo deploy`
  ]

  static flags = {
    ...Command.flags
  }
  
  async run() {
    let _parago:any = this.parago as any

    if(!_parago) {
      console.error(`No parago.yml file present in ${process.cwd()}`)
      this.exit(-1)
    }

    let cmd = _parago.commands.deploy
    
    if(cmd.length > 0) {
      if(cmd.startsWith('$')) {
        cmd = cmd.replace('$', '')
      }
      let res = cmd.split(" ")
      let commandName = res[0]
      let cmdArgs = res.slice(1)

      // shelljs can't be used to run interactive commands 
      // https://github.com/shelljs/shelljs/wiki/FAQ#running-interactive-programs-with-exec
      ChildProcess.execFileSync(commandName, cmdArgs, {stdio: 'inherit'});

    } else {
      console.error("No config file or no deploy command defined")

      this.exit(-1)
    }

  }
}
