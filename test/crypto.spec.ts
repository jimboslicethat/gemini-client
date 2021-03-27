import { expect } from 'chai'
import * as sinon from 'sinon'

import * as subject from '../src/crypto'

describe('crypto', () => {
  let sandbox: sinon.SinonSandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('#base64Encode', () => {
    const payload = {
      orderInformation: 'Id like to buy all your bit coinz plz'
    }

    it('returns a string', () => {
      const actual = subject.base64Encode(payload)
      sinon.assert.match(actual, sinon.match.string)
    })

    it('properly base64 encodes the javascript object', () => {
      const regex = new RegExp(/[A-Za-z0-9+/=]/)
      const actual = subject.base64Encode(payload)

      expect(regex.test(actual)).to.be.true
    })
  })
})
