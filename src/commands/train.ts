//
//  train.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/01/19
//  Copyright 2019 Skafos, LLC.
//

import * as shell from 'shelljs'
import Command    from '../base'

export default class Train extends Command {
  static description = "Train model using defined command in config"

  static examples = [
    `$ pgo train`
  ]

  async run() {
    let _parago:any = this.parago as any

    if(!_parago) {
      console.error(`No parago.yml file present in ${process.cwd()}`)
      this.exit(-1)
    }

    let cmd = _parago.commands.train
    
    if(cmd.length > 0) {
      if(cmd.startsWith('$')) {
        shell.config.silent = true
        
        cmd = cmd.replace('$', '')
      }

      shell.exec(cmd)
      
      shell.config.silent = false
    } else {
      console.error("No config file or no train command defined")

      this.exit(-1)
    }

  }

}
