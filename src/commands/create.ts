/*
 *  create.ts
 *  skafos
 * 
 *  Created by Wess Cope (wess@skafos.ai) on 07/01/19
 *  Copyright 2019 Skafos,llc.
 */

import {Command, flags} from '@oclif/command';

export default class Create extends Command {
  static description = "Create a new Skafos project";

  static examples = [
    `$ skafos create myproject`
  ]

  static flags = {
    help: flags.help({char: 'h'})
  }

  static args = [{
    name: 'project'
  }]

  async run() {
    
  }
}
