//
//  writer.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/10/19
//  Copyright 2019 Skafos, LLC.
//

import * as fs    from 'fs';
import * as path  from 'path';
import {safeDump} from 'js-yaml';

const WriteYaml = (obj:object, to:string) => {
  let data:string = safeDump(obj);
  
  fs.writeFileSync(to, data)
}

export default WriteYaml;
