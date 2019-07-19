//
//  vars.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/16/19
//  Copyright 2019 Skafos, LLC.
//

const EnvVars = {
  get: (name:string) => {
    return process.env[name]
  },

  set: (name:string, value:any) => {
    process.env[name] = value
  }
}

export default EnvVars
