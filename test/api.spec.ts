import axios from 'axios'
import { expect } from 'chai'
import * as sinon from 'sinon'

import * as subject from '../src/api'

describe('api', () => {
  let sandbox: sinon.SinonSandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()
    sandbox.stub(axios, 'post')
  })

  afterEach(() => {
    sandbox.restore()
  })

  const encodedPayload = 'asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf='
  const apiKey = 'weretryingtoreachyouaboutyourcarsextendedwarrenty'

  describe('#postNewOrderRequest', () => {
    it('calls axios.post with correct headers', () => {
      const expectedConfig = {
        baseURL: 'https://api.sandbox.gemini.com/v1',
        headers: {
          'X-GEMINI-APIKEY': apiKey,
          'X-GEMINI-PAYLOAD': encodedPayload,
          'X-GEMINI-SIGNATURE': null as string // ! TODO: once the crypto module is fleshed out create a valid signature here.
        }
      }

      subject.postNewOrderRequest(apiKey, encodedPayload)

      expect(axios.post).to.have.been.calledWith('/order/new', null, expectedConfig)
    })
  })
})
