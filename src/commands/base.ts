//
//  base.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/10/19
//  Copyright 2019 Skafos,llc.
//

import Command, {flags} from '@oclif/command'
import Config           from '../config';

export default abstract class extends Command {
  parago:object = Config.properties;

  static flags = {
    help:     flags.help({char: 'h'}),
    logging:  flags.string({options: ['error', 'warn', 'info', 'debug']})
  }

  log(msg:string, level:string = 'error') {
    switch(this.flags.debug) {
      case 'error':
        console.error(msg);
      default:
        console.log(msg);
    }
  }

  async init() {
    const {flags} = this.parse(this.constructor);
    this.flags    = flags;
  }
}
