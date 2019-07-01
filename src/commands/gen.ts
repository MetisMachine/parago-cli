/*
 *  gen.ts
 *  skafos
 * 
 *  Created by Wess Cope (wess@skafos.ai) on 07/01/19
 *  Copyright 2019 Skafos,llc.
 */

import {Command, flags} from '@oclif/command'

export default class Gen extends Command {
  static description = 'Interface to working with generators';

  static flags = {
    help: flags.help({char: 'h'}),
    list: flags.boolean({
      char: 'l',
      description: 'List of a available generators.'
    }),
    search: flags.string({
      char: 's',
      description: 'Search generators.'
    })
  }

  async run() {
  }
}
