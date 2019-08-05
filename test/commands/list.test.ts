//
//  list.test.ts
//  parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 08/01/19
//  Copyright 2019 Skafos, LLC.
//

import {
  expect, 
  test
} from '@oclif/test'


describe('List available generators', () => {
  test
    .stdout()
    .command(['list'])
    .it("runs list", (context) => {
      expect(0).is.greaterThan(-1)
    })
})
