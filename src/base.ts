//
//  base.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/10/19
//  Copyright 2019 Skafos, LLC.
//

import * as os          from 'os'
import * as path        from 'path'
import Command, {flags} from '@oclif/command'
import Config           from './config'
import EnvVars          from './env/vars'

export default abstract class extends Command {
  paths = {
    root:       path.join(os.homedir(), '.parago'),
    generators: path.join(os.homedir(), '.parago', 'generators')
  }

  parago:object   = Config.read()
  envVars:object  = EnvVars

  static strict = false 

  static flags = {
    help: flags.help({
      char: 'h', 
      description: 'Shows this help message'
    }),
    env: flags.string({
      description:  'Sets environment variables, overriding project config file)',
      required:     false
    })
  }

  static args = []

  log(msg:string, level:string = 'error') {
    switch(this.flags.debug) {
      case 'error':
        console.error(msg)
      default:
        console.log(msg)
    }
  }

  processAdhocEnv(args:string = "") {
    if(args.length < 1) { return; }

    let adhocVars = args.split(',').map((index) => {
      let [key, val] = index.split('=')

      return {key: key, val: val}
    })
    .reduce((accum, curr) => {
      accum[curr.key] = curr.val

      return accum
    })

    for(let key in adhocVars) {
      this.envVars.set(key, adhocVars[key])
    }
  }

  processEnv() {

    const paragoConfig  = this.parago || {}
    const paragoVars    = paragoConfig.env || {}

    if(paragoVars.length > 0) {
      console.log("Setting environment variables from config...");
      
      for(let key in paragoVars) {
        this.envVars.set(key, paragoVars[key])
      }  
    }
  }

  async init() {
    const {flags} = this.parse(this.constructor)

    this.processEnv();
    if(flags.env && flags.env.length > 0) {
      this.processAdhocEnv(flags.env)
    }
    
    this.flags = flags
  }

}
