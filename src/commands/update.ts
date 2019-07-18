//
//  update.ts
//  parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/18/19
//  Copyright 2019 Skafos, LLC.
//

import * as os    from 'os'
import * as path  from 'path'
import * as shell from 'shelljs'
import cli        from 'cli-ux'
import Command    from '../base'

export default class Update extends Command {
  static description = "Update parago"

  static examples = [
    `$ pgo update`
  ]

  async run() {
    cli.action.start('Updating')

    shell.config.silent = true

    let cmd = `cd ${this.paths.generators} && git pull origin master`
    shell.exec(cmd)

    shell.config.silent = false

    cli.action.stop()   
  }
}
