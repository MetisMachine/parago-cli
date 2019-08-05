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
import {Input}          from '@oclif/parser'
import Config           from './config'
import EnvVars          from './env/vars'

export default abstract class extends Command {
  static strict = false

  paths = {
    root:       path.join(os.homedir(), '.parago'),
    generators: path.join(os.homedir(), '.parago', 'generators')
  }

  parago          = Config.read() || Config.configTemplate
  envVars:EnvVars = new EnvVars()

  static flags = {
    ...Command.flags,
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

  flags:  { [name: string]: any }
  args:   { [name: string]: string }
  argv:   string[]

  processAdhocEnv(args:string = "") {
    if(args.length < 1) { return; }

    let adhocVars = args.split(',').map((index) => {
      let [key, val] = index.split('=')
      return {key: key, val: val}
    })
    .reduce((accum, curr) => {
      accum[curr.key] = curr.val
      return accum
    }, {})

    for(let key in adhocVars) {
      this.envVars.set(key, adhocVars[key])
    }
  }

  processEnv() {

    this.parago = this.parago || Config.read() || Config.configTemplate

    let paragoConfig:any = this.parago as any

    if(!paragoConfig) { return }
    
    const paragoVars = paragoConfig.env || {}

    if(Object.keys(paragoVars).length > 0) {
      console.log("Setting environment variables from config...");

      for(let key in paragoVars) {
        this.envVars.set(key, paragoVars[key])
      }  
    }
  }

  async init() {
    this.parago   = this.parago || Config.read() || Config.configTemplate
    const {args, argv, flags} = this.parse(<Input<any>>this.constructor)

    this.processEnv();

    if(flags.env && flags.env.length > 0) {
      this.processAdhocEnv(flags.env)
    }

    this.flags  = flags
    this.args   = args
    this.argv   = argv
  }
}
