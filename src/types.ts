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

export type OrderOptions =
  | 'maker-or-cancel'
  | 'immediate-or-cancel'
  | 'fill-or-kill'
  | 'auction-only'
  | 'indication-of-interest'

export interface OrderPayload {
  request: string
  nonce: number
  symbol: SupportedTickerSymbols
  amount: string
  price: string
  side: 'buy' | 'sell'
  type: string
  options?: OrderOptions[]
  // TODO: add in optional params
}

export interface OrderParams {
  encodedPayload: string
  apiKey: string
}