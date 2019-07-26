//
//  train.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/01/19
//  Copyright 2019 Skafos, LLC.
//

import Command    from '../base'
import * as ChildProcess from 'child_process'

export default class Train extends Command {
  static description = "Train model using defined command in config"

  static examples = [
    `$ pgo train`
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

    let cmd = _parago.commands.train
    
    if(cmd.length > 0) {
      if(cmd.startsWith('$')) {
        cmd = cmd.replace('$', '')
      }

      let res = cmd.split(" ")
      let commandName = res[0]
      let cmdArgs = res.slice(1)

      ChildProcess.execFileSync(commandName, cmdArgs, {stdio: 'inherit'});
    } else {
      console.error("No config file or no train command defined")

      this.exit(-1)
    }

  }

}
