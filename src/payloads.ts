import * as uuid from 'uuid'

import { OrderPayload, OrderType, SupportedTickerSymbols } from './types'

export function createBuyOrderPayload(
  symbol: SupportedTickerSymbols,
  amount: number,
  price: string,
  type = 'exchange limit'
): OrderPayload {
  const nonce = Date.now()
  const clientOrderId = uuid.v4()
  const request = '/v1/order/new'

  return {
    request,
    nonce,
    clientOrderId,
    symbol,
    amount: amount.toString(),
    price,
    side: 'buy',
    type: type as OrderType
  }
}

export function encodePayload<T>(payload: T): string {
  const buffer = Buffer.from(JSON.stringify(payload))

  return buffer.toString('base64')
}
