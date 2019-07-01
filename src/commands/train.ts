/*
 *  create.ts
 *  skafos
 * 
 *  Created by Wess Cope (wess@skafos.ai) on 07/01/19
 *  Copyright 2019 Skafos,llc.
 */

import {Command, flags} from '@oclif/command';

export default class Create extends Command {
  static description = "Run model and train it with provided data source";

  static examples = [
    `$ skafos train --data=/path/to/example`
  ]

  static flags = {
    help: flags.help({char: 'h'})
  }

  static args = [{
    name: 'data'
  }]

  async run() {
    
  }
}
