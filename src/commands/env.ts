//
//  env.ts
//  Parago
// 
//  Created by Wess Cope (wess@frenzylabs.com) on 07/16/19
//  Copyright 2019 FrenzyLabs,llc.
//

import {flags}  from '@oclif/command'
import Command  from './base'

export default class Env extends Command {
  static description = 'describe the command here'

  static flags = {
    help:   flags.help({char: 'h'}),
    name:   flags.string({char: 'n', description: 'name to print'}),
    force:  flags.boolean({char: 'f'}),
  }

  static args = [
    // {name: 'file'}
  ]

  async run() {
    const {args, flags} = this.parse(Env)

  }
}
