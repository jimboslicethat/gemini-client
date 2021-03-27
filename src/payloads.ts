import { OrderPayload, SupportedTickerSymbols } from './types'

export function createBuyOrderPayload(
  symbol: SupportedTickerSymbols,
  amount: string,
  price: string
): OrderPayload {
  return {
    request: '/v1/order/new',
    nonce: Date.now(),
    //client_order_id: uuid.v4(), //TODO: how to handle snake_case stuff.
    symbol,
    amount,
    price,
    side: 'buy',
    type: 'exchange limit'
  }
}

export function encodePayload<T>(payload: T): string {
  const buffer = Buffer.from(JSON.stringify(payload))

  return buffer.toString('base64')
}
