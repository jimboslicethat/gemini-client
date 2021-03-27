import axios from 'axios'
import { expect } from 'chai'
import * as sinon from 'sinon'

import * as subject from '../src/api'
import * as crypto from '../src/crypto'
import { ExternalOrderPayload } from '../src/types'

describe('api', () => {
  let sandbox: sinon.SinonSandbox
  const payload = ('youqualifyforafreestayatmarriothotels' as unknown) as ExternalOrderPayload
  const apiKey = 'wevebeentryingtoreachyouaboutyourcarsextendedwarrenty'
  const encodedPayload = `totes-encoded-${payload}=`
  const hashedSignature = 'garbledy-gook'

  beforeEach(() => {
    sandbox = sinon.createSandbox()
    sandbox.stub(axios, 'post')
    sandbox.stub(crypto, 'base64Encode').withArgs(payload).returns(encodedPayload)
    sandbox.stub(crypto, 'generateHash').withArgs(encodedPayload, apiKey).returns(hashedSignature)
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('#postNewOrderRequest', () => {
    it('calls axios.post with correct headers', () => {
      const expectedConfig = {
        baseURL: 'https://api.sandbox.gemini.com/v1',
        headers: {
          'X-GEMINI-APIKEY': apiKey,
          'X-GEMINI-PAYLOAD': encodedPayload,
          'X-GEMINI-SIGNATURE': hashedSignature
        }
      }

      subject.postNewOrderRequest(apiKey, payload)

      expect(crypto.base64Encode).to.have.been.calledWith(payload)
      expect(crypto.generateHash).to.have.been.calledWith(encodedPayload, apiKey)
      expect(axios.post).to.have.been.calledWith('/order/new', null, expectedConfig)
    })
  })
})
