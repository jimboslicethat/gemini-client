export type SupportedTickerSymbols =
  | 'btcusd'
  | 'ethbtc'
  | 'ethusd'
  | 'zecusd'
  | 'zecbtc'
  | 'zeceth'
  | 'zecbch'
  | 'zecltc'
  | 'bchusd'
  | 'bchbtc'
  | 'bcheth'
  | 'ltcusd'
  | 'ltcbtc'
  | 'ltceth'
  | 'ltcbch'
  | 'batusd'
  | 'daiusd'
  | 'linkusd'
  | 'oxtusd'
  | 'batbtc'
  | 'linkbtc'
  | 'oxtbtc'
  | 'bateth'
  | 'linketh'
  | 'oxteth'
  | 'ampusd'
  | 'compusd'
  | 'paxgusd'
  | 'mkrusd'
  | 'zrxusd'
  | 'kncusd'
  | 'manausd'
  | 'storjusd'
  | 'snxusd'
  | 'crvusd'
  | 'balusd'
  | 'uniusd'
  | 'renusd'
  | 'umausd'
  | 'yfiusd'
  | 'btcdai'
  | 'ethdai'
  | 'aaveusd'
  | 'filusd'
  | 'btceur'
  | 'btcgbp'
  | 'etheur'
  | 'ethgbp'
  | 'btcsgd'
  | 'ethsgd'
  | 'sklusd'
  | 'grtusd'
  | 'bntusd'
  | '1inchusd'
  | 'enjusd'
  | 'lrcusd'
  | 'sandusd'

export type OrderExecutionType =
  | 'maker-or-cancel'
  | 'immediate-or-cancel'
  | 'fill-or-kill'
  | 'auction-only'
  | 'indication-of-interest'

export type OrderType = 'exchange limit' | 'exchange stop limit'
export interface OrderPayload {
  request: string
  nonce: number
  clientOrderId: string
  symbol: SupportedTickerSymbols
  amount: string
  price: string
  side: 'buy' | 'sell'
  type: OrderType
  minAmount?: string
  stopPrice?: string
  options?: OrderExecutionType[]
}

export interface OrderParams {
  encodedPayload: string
  apiKey: string
}
