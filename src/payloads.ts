import * as uuid from 'uuid'

import {
  ExternalOrderPayload,
  OrderExecutionType,
  OrderPayload,
  OrderType,
  SupportedTickerSymbols
} from './types'

export interface OrderPayloadOptions {
  minAmount?: number
  stopPrice?: string
  executionType?: OrderExecutionType
  // ! NOTE: making the conscious choice to avoid the `account` parameter for now.
}

export function createBuyOrderPayload(
  symbol: SupportedTickerSymbols,
  amount: number,
  price: string,
  type = 'exchange limit',
  options?: OrderPayloadOptions
): OrderPayload {
  const nonce = Date.now()
  const clientOrderId = uuid.v4()
  const request = '/v1/order/new'

  return {
    amount: amount.toString(),
    clientOrderId,
    nonce,
    price,
    request,
    side: 'buy',
    symbol,
    type: type as OrderType,
    ...getOptionalParameters(options, type as OrderType)
  }
}

export function encodePayload(payload: OrderPayload): string {
  const externalPayload = mapInternalToExternal(payload)
  const buffer = Buffer.from(JSON.stringify(externalPayload))

  return buffer.toString('base64')
}

/* private */

function getOptionalParameters(options: OrderPayloadOptions, orderType: OrderType): any {
  if (!options) return {}
  const { minAmount, stopPrice, executionType } = options

  validateStopPriceOption(stopPrice, orderType)

  return {
    minAmount: minAmount && minAmount.toString(),
    options: executionType && [executionType],
    stopPrice
  }
}

function validateStopPriceOption(stopPrice: string, orderType: OrderType): void {
  if (stopPrice && orderType !== 'exchange stop limit') {
    throw new Error(`When given a stopPrice the order type must be 'exchange stop limit'`)
  }
}

function mapInternalToExternal(payload: OrderPayload): ExternalOrderPayload {
  const { minAmount, stopPrice, clientOrderId, ...rest } = payload

  return {
    ...rest,
    min_amount: minAmount && minAmount,
    stop_price: stopPrice && stopPrice,
    client_order_id: clientOrderId
  }
}
