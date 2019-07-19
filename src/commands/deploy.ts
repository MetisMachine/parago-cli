//
//  deploy.ts
//  parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/19/19
//  Copyright 2019 Skafos, LLC.
//

import * as shell from 'shelljs'
import Command    from '../base'

export default class Deploy extends Command {
  static description = "Deploy model using defined command in config."

  static examples = [
    `$ pgo deploy`
  ]

  async run() {
    if(!this.parago) {
      console.error(`No parago.yml file present in ${process.cwd()}`)
      this.exit(-1)
    }

    let cmd = this.parago.commands.deploy
    
    if(cmd.length > 0) {
      if(cmd.startsWith('$')) {
        shell.config.silent = true
        
        cmd = cmd.replace('$', '')
      }

      shell.exec(cmd)
      
      shell.config.silent = false
    } else {
      console.error("No config file or no deploy command defined")

      this.exit(-1)
    }

  }
}
