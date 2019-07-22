//
//  export.ts
//  parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/18/19
//  Copyright 2019 Skafos, LLC.
//

import * as shell from 'shelljs'
import Command    from '../base'

export default class Train extends Command {
  static description = "Export model using defined command in config"

  static examples = [
    `$ pgo export`
  ]

  async run() {
    let _parago:any = this.parago as any

    var cmd = _parago.commands.export || ''

    if(cmd.length > 0) {
      if(cmd.startsWith('$')) {
        shell.config.silent = true
        
        cmd = cmd.replace('$', '')
      }

      shell.exec(cmd)
      
      shell.config.silent = false
    }
  }
}
