//
//  run.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/17/19
//  Copyright 2019 Skafos, LLC.
//

import Command    from '../base'
import * as ChildProcess from 'child_process'

export default class Run extends Command {
  static description = "Run user defined tasks in the config file";

  static strict = false
  
  static examples = [
    `$ pgo run <task>`
  ]

  static flags = {
    ...Command.flags
  }

  async run() {
    let _parago = this.parago as any

    if(this.argv.length < 1) { return }

    let tasks = this.argv
    .filter((arg) => { return Object.keys(_parago.tasks).includes(arg)})
    .map((task) => {
      return _parago.tasks[task]
    });

    if(tasks.length < 1) {
      console.log("Undefined task(s): ", this.argv.join(" "))

      return
    }

    tasks.forEach((task) => {
      var cmd = task

      if(cmd.startsWith('$')) {
        cmd = cmd.replace('$', '')
      }

      let res = cmd.split(" ")
      let commandName = res[0]
      let cmdArgs = res.slice(1)

      ChildProcess.execFileSync(commandName, cmdArgs, {stdio: 'inherit'});

    });
 }
}
