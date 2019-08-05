//
//  setup.ts
//  parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/18/19
//  Copyright 2019 Skafos, LLC.
//

import * as fs    from 'fs-extra'
import * as path  from 'path'
import * as os    from 'os'
import * as shell from 'shelljs'
import cli        from 'cli-ux'
import Command    from '../base'
import {flags}    from '@oclif/command';


const generatorListRepo = "https://github.com/skafos/generators.git"

export default class Setup extends Command {
  static description = "Sets up Parago."

  static examples = [
    `$ pgo setup`
  ]

  static flags = {
    ...Command.flags,
    force: flags.boolean({
      char:         'f', 
      description:  'If already setup, remove previous and setup as new'
    })
  }

  async run() {
    let home = os.homedir()
    let root = path.join(home, '.parago')
    let repo = path.join(root, 'generators')

    if(fs.pathExistsSync(root)) {
      if(this.flags.force == true) {
        fs.removeSync(root)
      } else {
        console.log("Parago has already been setup, use -f/--force to overwrite current")

        this.exit(0)
      }
    }

    cli.action.start("Setting up parago")
    fs.ensureDirSync(root)

    shell.config.silent = true
    shell.exec(`git clone ${generatorListRepo} ${repo}`)
    shell.config.silent = false

    cli.action.stop()
  }
}
