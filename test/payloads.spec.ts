import { expect } from 'chai'
import * as sinon from 'sinon'

import { OrderExecutionType } from '../src/types'
import * as subject from '../src/payloads'

describe('payloads', () => {
  let sandbox: sinon.SinonSandbox
  let clock: sinon.SinonFakeTimers
  const now = new Date()

  beforeEach(() => {
    sandbox = sinon.createSandbox()
    clock = sandbox.useFakeTimers(now.getTime())
  })

  afterEach(() => {
    sandbox.restore()
    clock.restore()
  })

  describe('#createBuyOrderPayload', () => {
    const symbol = 'ethusd'
    const amount = 1.1
    const price = '1,684.36'
    const orderType = 'exchange limit'

    it('returns a new buy order payload', () => {
      const actual = subject.createBuyOrderPayload(symbol, amount, price, orderType)

      const expected = {
        request: '/v1/order/new',
        symbol,
        amount: amount.toString(),
        price,
        side: 'buy',
        type: 'exchange limit'
      }

      expect(actual).to.include(expected)
      expect(actual.nonce).to.eql(Date.now())
      sinon.assert.match(actual.clientOrderId, sinon.match.string)
    })

    it('defaults the order type to exchange limit when not given', () => {
      const actual = subject.createBuyOrderPayload(symbol, amount, price)

      expect(actual.type).to.eql('exchange limit')
    })

    context('when given optional parameters', () => {
      it('includes the minAmount', () => {
        const minAmount = amount - 0.1
        const actual = subject.createBuyOrderPayload(symbol, amount, price, orderType, {
          minAmount
        })

        expect(actual.type).to.eql('exchange limit')

        expect(actual.minAmount).to.eql(minAmount.toString())
      })

      it('includes the stopPrice', () => {
        const stopPrice = '1,683.00'
        const orderType = 'exchange stop limit'
        const actual = subject.createBuyOrderPayload(symbol, amount, price, orderType, {
          stopPrice
        })

        expect(actual.stopPrice).to.eql(stopPrice)
      })

      it('includes an array of length(1) for the order execution type', () => {
        const executionTypes: OrderExecutionType[] = [
          'maker-or-cancel',
          'immediate-or-cancel',
          'fill-or-kill',
          'auction-only',
          'indication-of-interest'
        ]

        executionTypes.forEach(executionType => {
          const actual = subject.createBuyOrderPayload(symbol, amount, price, orderType, {
            executionType
          })

          expect(actual.options.length).to.eql(1)
          expect(actual.options[0]).to.eql(executionType)
        })
      })

      it('throws error when given stopPrice but order type is incorrect', () => {
        const stopPrice = '1,683.00'
        const orderType = 'exchange limit'
        const incorrectCall = () =>
          subject.createBuyOrderPayload(symbol, amount, price, orderType, {
            stopPrice
          })

        expect(incorrectCall).to.throw(
          `When given a stopPrice the order type must be 'exchange stop limit'`
        )
      })
    })
  })

  describe('#encodePayload', () => {
    it('converts the payload to base64 encoded JSON', () => {
      const payload = subject.createBuyOrderPayload('btcusd', 1, '55,000')

      const regex = new RegExp(/[A-Za-z0-9+/=]/)
      const actual = subject.encodePayload(payload)

      expect(regex.test(actual)).to.be.true
    })
  })
})
