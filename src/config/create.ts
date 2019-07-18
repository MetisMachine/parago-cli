//
//  create.ts
//  parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/18/19
//  Copyright 2019 Skafos, LLC.
//
import * as path  from 'path';
import * as os    from 'os';
import {flags}    from '@oclif/command';
import cli        from 'cli-ux';
import Command    from '../base';
import Config     from '../config';
import * as Env   from '../env';

const ConfigCreate = async (cfg:object = Config.configTemplate, projectPath:string = process.cwd(), ask:boolean = false) => {
  var config = cfg

  let basename    = path.basename(process.cwd())
  let username    = os.userInfo().username
  let descript    = 'A project generated by Parago'
  let vers        = '0.0.1'
  let lic         = 'MIT'
  let name        = ask == false ? basename  : await cli.prompt(`Project name`, {default: basename})
  let description = ask == false ? descript  : await cli.prompt('Project description', {default: descript})
  let version     = ask == false ? vers      : await cli.prompt('Version', {default: vers})
  let author      = ask == false ? username  : await cli.prompt(`Author`, {default: username})
  let license     = ask == false ? lic       : await cli.prompt('License', {default: lic})

  var language:string = config.system.language
  
  if(ask == true) {
    let lang  = await cli.prompt('Language', {default: 'python'})
    let langv = await cli.prompt('Language version', {default: '>= 3.3'})

    language = `${lang} ${langv}`
  }

  
  config['name']        = name
  config['description'] = description
  config['version']     = version
  config['author']      = author 
  config['license']     = license

  config['system']  = {
    ...config.system,
    language: language
  }

  cli.action.start("Creating config file...")
  Config.write(config, projectPath)
  cli.action.stop()
}

export default ConfigCreate
