//
//  app.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/17/19
//  Copyright 2019 Skafos, LLC.
//

import * as path    from 'path'
import * as Express from 'express'
import {flags}      from '@oclif/command'
import cli          from 'cli-ux'

import Command from '../base'


export default class App extends Command {
  static description = "Starts up web frontend.";

  static examples = [
    `$ pgo app start`
  ]

  static flags = {
    ...Command.flags,
    port: flags.string({
      char:         'p',
      description:  'what port App server should run on',
      required:     false,
      default:      '7272'
    })
  }

  async run() {
    const{flags, argv}  = this.parse(App)
    const {port}        = flags
    const portNumber    = parseInt(port) || 7272
    const staticPath    = path.resolve(
      path.relative(process.cwd(), __dirname),
      '..',
      '../static'
    )


    const app = Express()
    app.use(Express.static(staticPath))
    

    app.get('/', (req, res) => {
      res.send('Hello World!')
    })


    app.listen(portNumber, () => {
      console.log(`Parago app listening on ${portNumber}`)
    })

    cli.open(`http://localhost:${portNumber}`)
  }
}

