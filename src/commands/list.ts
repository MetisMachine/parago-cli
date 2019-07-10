//
//  list.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/01/19
//  Copyright 2019 skafos.ai,llc.
//


import {flags} from '@oclif/command';
import Command from './base';

export default class List extends Command {
  static description = "List available generators";

  static examples = [
    `$ pgo list`
  ]

  static flags = {
    ...Command.flags,
    help: flags.help({char: 'h'})
  }

  static args = [{
  }]

  async run() {
    console.log("parago: ", this.parago);
  }
}
