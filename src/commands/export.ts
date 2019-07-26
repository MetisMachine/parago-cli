//
//  export.ts
//  parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/18/19
//  Copyright 2019 Skafos, LLC.
//

import Command    from '../base'
import * as ChildProcess from 'child_process'

export default class Train extends Command {
  static description = "Export model using defined command in config"

  static examples = [
    `$ pgo export`
  ]

  static flags = {
    ...Command.flags
  }

  async run() {
    let _parago:any = this.parago as any

    var cmd = _parago.commands.export || ''

    if(cmd.length > 0) {
      if(cmd.startsWith('$')) {
        cmd = cmd.replace('$', '')
      }

      let res = cmd.split(" ")
      let commandName = res[0]
      let cmdArgs = res.slice(1)

      ChildProcess.execFileSync(commandName, cmdArgs, {stdio: 'inherit'});

    }
  }
}
