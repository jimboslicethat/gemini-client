import { expect } from 'chai'
import * as sinon from 'sinon'
import * as crypto from 'crypto'

import * as subject from '../src/crypto'

describe('crypto', () => {
  let sandbox: sinon.SinonSandbox
  const payload = {
    orderInformation: 'Id like to buy all your bit coinz plz'
  }

  beforeEach(() => {
    sandbox = sinon.createSandbox()
    sandbox.spy(crypto, 'createHmac')
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('#base64Encode', () => {
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

  describe('#generateHash', () => {
    const payloadString = subject.base64Encode(payload)
    const apiKey = 'wearetryingtoreachyouaboutyourcarsextendedwarrenty'

    it('creates a SHA384 hash from payload and API key', () => {
      const actual = subject.generateHash(payloadString, apiKey)

      expect(crypto.createHmac).to.have.been.calledWith('sha256', apiKey)
      sinon.assert.match(actual, sinon.match.string)
    })
  })
})
