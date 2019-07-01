/*
 *  deploy.ts
 *  skafos
 * 
 *  Created by Wess Cope (wess@skafos.ai) on 07/01/19
 *  Copyright 2019 Skafos,llc.
 */

import {Command, flags} from '@oclif/command';

export default class Deploy extends Command {
  static description = "Deploy project models to provider";

  static examples = [
    `$ skafos deploy --platform=azure`
  ]

  static flags = {
    help: flags.help({char: 'h'})
  }

  static args = [{
    name: 'platform'
  }]

  async run() {
    
  }
}
