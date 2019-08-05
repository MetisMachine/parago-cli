//
//  help.test.ts
//  parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 08/01/19
//  Copyright 2019 Skafos, LLC.
//


import {
  expect, 
  test
} from '@oclif/test'


describe('help', () => {
  test
    .stdout()
    .command(['help'])
    .it("runs help", (context) => {
      let split = context.stdout.split('\n')

      expect(split).to
        .include('VERSION')
        .include('USAGE')
        .include('COMMANDS')
    })
})
