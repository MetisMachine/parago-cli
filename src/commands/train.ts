//
//  train.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/01/19
//  Copyright 2019 Skafos, LLC.
//

import Command from '../base';

export default class Train extends Command {
  static description = "Run model and train it with provided data source";

  static examples = [
    `$ pgo train`
  ]

  async run() {
    console.log("TRAIN")    
  }
}
