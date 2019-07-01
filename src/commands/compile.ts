/*
 *  compile.ts
 *  skafos
 * 
 *  Created by Wess Cope (wess@skafos.ai) on 07/01/19
 *  Copyright 2019 Skafos,llc.
 */

import {Command, flags} from '@oclif/command';

export default class Compile extends Command {
  static description = "Build current project for specific target";

  static examples = [
    `$ skafos compile --target=ios`
  ]

  static flags = {
    help: flags.help({char: 'h'})
  }

  static args = [{
    name: 'target'
  }]

  async run() {
    
  }
}
