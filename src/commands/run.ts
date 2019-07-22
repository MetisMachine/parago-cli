//
//  run.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/17/19
//  Copyright 2019 Skafos, LLC.
//

import Command    from '../base'
import * as shell from 'shelljs'

export default class Run extends Command {
  static description = "Run user defined tasks in the config file";

  static strict = false
  
  static examples = [
    `$ pgo run <task>`
  ]

  async run() {
    let _parago = this.parago as any
    let {argv}  = this.parse(Run)
    

    if(argv.length < 1) { return }

    let tasks = argv
    .filter((arg) => { return Object.keys(_parago.tasks).includes(arg)})
    .map((task) => {
      return _parago.tasks[task]
    });

    if(tasks.length < 1) {
      console.log("Undefined task(s): ", argv.join(" "))

      return
    }

    tasks.forEach((task) => {
      var cmd = task

      shell.config.silent = false

      if(cmd.startsWith('$')) {
        shell.config.silent = true
        
        cmd = cmd.replace('$', '')
      }

      shell.exec(cmd)
    });
 }
}
