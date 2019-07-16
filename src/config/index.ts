/*
 *  config.ts
 *  skafos
 * 
 *  Created by Wess Cope (wess@skafos.ai) on 07/10/19
 *  Copyright 2019 Skafos,llc.
 */

import * as fs    from 'fs-extra'
import * as path  from 'path';
import ReadYaml   from './reader';
import WriteYaml  from './writer';

const template =  {
  name:         '',
  description:  '',
  version:  '',
  author:   '',
  license:  '',
  system: { 
    language: ''
  },
  env: { 
    example: 'value'
  },
  commands: { 
    data: {
      load:   '',
      clean:  ''
    },
    train:  '',
    export: ''
  },
  tasks: { 
    example: 'echo "your script command here"'
  }
}

class Config {
  static configFile         = 'parago.yml';
  static configTemplate     = template;

  static write(config:object) {
    let dir = path.join(process.cwd(), Config.configFile);

    if(fs.existsSync(dir)) {
      return;
    }

    WriteYaml(config, dir);
  }

  static read() {
    let dir = path.join(process.cwd(), Config.configFile);

    if(!fs.existsSync(dir)) {
      return;
    }

    return ReadYaml(path.join(process.cwd(), Config.configFile));
  }
}


export default Config;
