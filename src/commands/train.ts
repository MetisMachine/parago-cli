//
//  train.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/01/19
//  Copyright 2019 Skafos,llc.
//

import {flags} from '@oclif/command';
import Command from './base';

export default class Train extends Command {
  static description = "Run model and train it with provided data source";

  static examples = [
    `$ pgo train --data=/path/to/example`
  ]

  static flags = {
    ...Command.flags,
    help: flags.help({char: 'h'})
  }

  static args = [{
    name: 'data'
  }]

  async run() {
    
  }
}
