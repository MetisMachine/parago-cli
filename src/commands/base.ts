//
//  base.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/10/19
//  Copyright 2019 Skafos,llc.
//

import Command, {flags} from '@oclif/command'
import Config           from '../config';
import EnvVars          from '../env/vars';

export default abstract class extends Command {
  parago:object = Config.read()
  envVars:object = EnvVars

  static flags = {
    help:     flags.help({char: 'h'}),
    logging:  flags.string({options: ['error', 'warn', 'info', 'debug']})
  }

  log(msg:string, level:string = 'error') {
    switch(this.flags.debug) {
      case 'error':
        console.error(msg)
      default:
        console.log(msg)
    }
  }

  processEnv() {
    const paragoVars = this.parago.env || {}

    for(let key in paragoVars) {
      let val = paragoVars[key]

      console.log(`Adding ${key} with value of ${val}`)

      this.envVars.set(key.toUpperCase(), val)
    }  
  }

  async init() {
    this.processEnv();

    const {flags} = this.parse(this.constructor)
    this.flags    = flags
  }
}
