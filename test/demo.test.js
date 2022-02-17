import { strict as assert } from 'assert'

import Demo from './Demo.js'

describe('Demo class test', () => {
  it('should add item with add() method', () => {
    const item = 1;
    const demo = new Demo()
    
    demo.add(item)

    assert.strictEqual(demo.getList()[0], item)
  })
})