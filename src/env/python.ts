//
//  python.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/16/19
//  Copyright 2019 Skafos,llc.
//

import * as fs    from 'fs-extra'
import * as path  from 'path'
import * as shell from 'shelljs'
import cli        from 'cli-ux';

import Environment from './environment'

export class Python extends Environment {

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
    let virtualenv = shell.which('virtualenv')

    shell.config.silent = false;

    console.log("Checking for python's virtualenv");
    if(virtualenv == null) {
      let response = await cli.prompt('virtualenv is not available, install it now? [y/n]', {default: 'y'}).toLowerCase()
      
      if(['y', 'yes'].includes(response)) {
        system.exec("pip install virtualenv")

        self.setup(directory)
      }
      
      return
    }

    console.log("preparing to create virtual environemt for python")

    let venv  = virtualenv.toString()
    let dir   = directory == process.cwd() ? path.join(directory, '.venv') : directory

    if(!fs.existsSync(dir)) {
      let cmd = "virtualenv " + dir + " --no-site-packages"
    
      console.log(`Creating virtualenv at ${dir}`)
      shell.exec(cmd)

      console.log('\nSetup complete, to activate your python virtual environment type:')
    } else {
      console.log('\nActivate your python virtual environment type:')
    }
    
    console.log(`source ${dir}/bin/activate\n\n`)
  }

}
