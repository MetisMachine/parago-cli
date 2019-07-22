//
//  vars.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/16/19
//  Copyright 2019 Skafos, LLC.
//

export default class EnvVars {
  _all:object = {

  }

  get(name:string) {
    return process.env[name]
  }

  set(name:string, value:any) {
    this._all[name] = value

    process.env[name] = value
  }
}
