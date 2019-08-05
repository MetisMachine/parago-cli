//
//  setup.test.ts
//  parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 08/01/19
//  Copyright 2019 Skafos, LLC.
//

import * as path  from 'path'
import * as os    from 'os'
import * as fs    from 'fs-extra'

import {
  expect, 
  test
} from '@oclif/test'

const home = os.homedir()
const root = path.join(home, '.parago')
const repo = path.join(root, 'generators')

describe('Creates .parago and generators directory in user home.', () => {
  test
    .stdout()
    .command(['setup', '--force'])
    .it("runs setup --force", (context) => {
      expect(fs.existsSync(root)).equals(true)
      expect(fs.existsSync(repo)).equals(true)
    })
})
