//
//  create.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/01/19
//  Copyright 2019 Skafos, LLC.
//

import * as fs      from 'fs-extra'
import * as path    from 'path'
import {flags}      from '@oclif/command'
import Command      from '../base'
import ConfigCreate from '../config/create'
import ReadYaml     from '../config/reader'
import { cli }      from 'cli-ux';

export default class Create extends Command {
  static description = "Create a new Parago project";

  static examples = [
    `$ pgo create myproject`
  ]

  static flags = {
    ...Command.flags,
    yes:  flags.boolean({
      char: 'y', 
      description: 'Answers all prompts with defaults.',
      default: false
    }),
    generator: flags.string({
      char:         'g',
      description:  'Generator to use to create project.',
      required:     true
    })
  }

  static args = [{
    ...Command.args,
    name: 'project'
  }]

  async run() {
    const {flags, args} = this.parse(Create);

    let generators = 
      fs.readdirSync(this.paths.generators, {withFileTypes: true})
        .filter(dirent => dirent.isDirectory() && dirent.name != '.git')
        .map(dirent => dirent.name)

    if(generators.includes(flags.generator) == false) {
      this.error(`Unknown generator: ${flags.generator}.`)
      
      this.exit(-1)
    }

    cli.action.start(`Creating project using generator: ${flags.generator}`)

    let cwd     = process.cwd()
    let curDir  = path.basename(cwd)
    let genPath = path.join(this.paths.generators, flags.generator)

    if(args.project) {
      let projectPath = path.join(cwd, args.project)
      
      fs.ensureDirSync(projectPath)
      fs.copySync(genPath, projectPath)

      cli.action.stop()

      let yaml = ReadYaml(path.join(projectPath, 'parago.yml'))

      await ConfigCreate(
        yaml, 
        projectPath,
        !flags.yes
      )
    } else {
      let name = curDir

      fs.copySync(genPath, cwd)

      cli.action.stop()
      
      await ConfigCreate(
        ReadYaml(path.join(cwd, 'parago.yml')), 
        cwd,
        !flags.yes
      )
    }

    
    

  }
}
