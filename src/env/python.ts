//
//  python.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/16/19
//  Copyright 2019 Skafos, LLC.
//

import * as fs    from 'fs-extra'
import * as path  from 'path'
import * as shell from 'shelljs'
import cli        from 'cli-ux';

import Environment from './environment'

export class Python extends Environment {
  version:number

  check(expectedVersion:string = ">= 3"):boolean {
    shell.config.silent = true;

    const [name, sysVer]        = shell.exec("python --version").toString().toLowerCase().split(' ')
    const [range, expectedVer]  = expectedVersion.split(' ')
    const expected              = parseInt(expectedVer)
    const sys                   = parseInt(sysVer)

    this.version = sys;
   
    switch(range) {
      case ">": {
        return (expected > sys)
      }

      case "<": {
        return (expected < sys)
      }

      case "<=": {
        return (expected <= sys)
      }

      case ">=": {
        return (expected >= sys)
      }

      case "==": {
        return (expected == sys)
      }
    }
  }

  async setup(directory:string = process.cwd()) {
    console.log("Your environment has been setup for Python.")
  }
}
