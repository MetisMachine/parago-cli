//
//  create.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/01/19
//  Copyright 2019 Skafos,llc.
//

import * as path  from 'path';
import * as os    from 'os';
import {flags}    from '@oclif/command';
import cli        from 'cli-ux';
import Command    from './base';
import Config     from '../config';
import * as Env   from '../env';

export default class Create extends Command {
  static description = "Create a new Skafos project";

  static examples = [
    `$ pgo create myproject`
  ]

  static flags = {
    ...Command.flags,
    help: flags.help({char: 'h'}),
    yes:  flags.boolean({char: 'y'})
  }

  static args = [{
    name: 'project'
  }]

  async run() {
    const {flags} = this.parse(Create);
    var config    = Config.configTemplate;
    
    let basename    = path.basename(process.cwd());
    let username    = os.userInfo().username;
    let descript    = 'A project generated by Parago';
    let vers        = '0.0.1';
    let lic         = 'MIT';
    let name        = flags.yes ? basename  : await cli.prompt(`Project name`, {default: basename});
    let description = flags.yes ? descript  : await cli.prompt('Project description', {default: descript});
    let version     = flags.yes ? vers      : await cli.prompt('Version', {default: vers});
    let author      = flags.yes ? username  : await cli.prompt(`Author`, {default: username});
    let license     = flags.yes ? lic       : await cli.prompt('License', {default: lic});
    
    let lang            = 'python';
    let langv           = '>= 3.3';
    let language        = flags.yes ? lang  : await cli.prompt('Language', {default: lang});
    let languageVersion = flags.yes ? langv : await cli.prompt('Language version', {default: langv});

    config['name']        = name;
    config['description'] = description;
    config['version']     = version;
    config['author']      = author; 
    config['license']     = license;

    config['system']  = {
      language:  `${language} ${languageVersion}`
    };
  
    console.log("Creating config file...");
    Config.write(Config.configTemplate);    

    if(lang.toLowerCase() == 'python') {
      const py = new Env.Python()
    
      if (!py.check(languageVersion)) {
        console.error("Python version must be: " + languageVersion + ', but found: ' + py.version)
        process.exit(-1);
      }

      py.setup();
    }
  }
}
