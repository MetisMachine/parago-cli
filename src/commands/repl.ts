/*
 *  repl.ts
 *  skafos
 * 
 *  Created by Wess Cope (wess@skafos.ai) on 07/01/19
 *  Copyright 2019 Skafos,llc.
 */

import {Command, flags} from '@oclif/command';

export default class Repl extends Command {
  static description = "Interactive shell for current project";

  static examples = [
    `$ skafos repl`
  ]

  static flags = {
    help: flags.help({char: 'h'})
  }

  async run() {
    
  }
}
