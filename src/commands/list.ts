//
//  list.ts
//  parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/18/19
//  Copyright 2019 Skafos, LLC.
//

import axios               from 'axios'
import {safeLoad, DumpOptions}  from 'js-yaml'
import cli                      from 'cli-ux'
import Command                  from '../base'

const readmeUrl = "https://raw.githubusercontent.com/skafos/generators/master/README.md"

export default class List extends Command {
  static description = "Shows a list of available generators."

  static examples = [
    `$ pgo list`
  ]

  static flags = {
    ...Command.flags
  }

  async run() {
    cli.action.start('Pulling generators list')
    await cli.wait(1000)

    axios.get(readmeUrl)
    .then((res) => {
      cli.action.stop()

      let {generators} = safeLoad(res.data.toString('utf8'))
      
      let list = generators.map((curr) => {
        let key:string = Object.keys(curr)[0] as string
        let val:string = Object.values(curr)[0] as string

        return {name: key, description: val}
      })

      const options = {
        printLine: this.log,
      }
      
      console.log("\n")
      cli.table(list, {
        name: {
          minWidth: 32
        },
        description: {
          get: row => row['description']
        }
      })

      console.log("\n")
    })
  }
}
