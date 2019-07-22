//
//  data.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/17/19
//  Copyright 2019 Skafos, LLC.
//

import Command    from '../base'
import * as shell from 'shelljs'
import Config from '../config';

export default class Data extends Command {
  static description = "Data management using provided commands in config file";

  static examples = [
    `$ pgo data clean`,
    `$ pgo data load`,
  ]

  static args = [
    {
      name: 'action',
      description: 'Cleans data using command in config file',
    },
    {
      name: 'load',
      description: 'Loads data using command in config file'
    }
  ]

  runLoad() {
    let _parago:any = this.parago as any

    if(!_parago.commands.data.load || _parago.commands.data.load.length < 1) { 
      console.log("Invalid data load command provided in config")

      this.exit(-1)
    }

    return _parago.commands.data.load
  }

  runClean() {
    let _parago:any = this.parago as any

    if(!_parago.commands.data.clean || _parago.commands.data.clean.length < 1) { 
      console.log("Invalid data clean command provided in config")

      this.exit(-1)
    }

    return _parago.commands.data.clean
  }


  async run() {
    const {argv} = this.parse(Data)

    argv.map((arg) => {
      switch(arg.toLowerCase()) {
        case 'load': {
          return this.runLoad()
        }
        case 'clean': {
          return this.runClean()
        }
        default: {
          console.error("Invalid data command")
          this.exit(-1)
        }
      }
    })
    .forEach((current) => {
      var cmd:string = current as string

      shell.config.silent = false

      if(cmd.startsWith('$')) {
        shell.config.silent = true

        cmd = cmd.replace('$', '')
      }

      shell.exec(cmd)  
    })

  }
}
