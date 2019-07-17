//
//  data.ts
//  Parago
// 
//  Created by Wess Cope (wess@frenzylabs.com) on 07/17/19
//  Copyright 2019 FrenzyLabs,llc.
//

import Command    from '../base'
import * as shell from 'shelljs'

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

  runLoad():string {
    if(!this.parago.commands.data.load || this.parago.commands.data.load.length < 1) { 
      console.log("Invalid data load command provided in config")

      this.exit(-1)
    }

    return this.parago.commands.data.load
  }

  runClean():string {
    if(!this.parago.commands.data.clean || this.parago.commands.data.clean.length < 1) { 
      console.log("Invalid data clean command provided in config")

      this.exit(-1)
    }

    return this.parago.commands.data.clean
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
