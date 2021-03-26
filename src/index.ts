import * as uuid from 'uuid'

enum Tickers {
  BitcoinUSD = "btcusd"
}

export default function run() {
  // ? TEMPORARY JSON encode new static sandbox order payload as a quick smokescreen test.
  const payload = createBuyOrderPayload(Tickers.BitcoinUSD, "0.01", "3633.00")
  console.log('payload:', payload)

  const encodedPayload = encodeGeminiPayload(payload)

  return encodedPayload
}

const createBuyOrderPayload = (symbol:Tickers, amount:string, price:string) => ({
    request: "/v1/order/new",
    nonce: Date.now(),
    client_order_id: uuid.v4(),
    symbol,
    amount,
    price,
    side: "buy",
    type: "exchange limit"
})

function encodeGeminiPayload<T>(payload:T) {
  const buffer = Buffer.from(JSON.stringify(payload))
  const encodedPayload = buffer.toString("base64")
  console.log('encodedPayload:', encodedPayload)
  
  return encodedPayload
}

run()

/* TODOS:
* Put this in a list outside of the codebase
* Add a logger.
* Add a testing framework to start TDDing this solution.
* Decide on initial API.
* Prettier
* conventional-commmits
* Strat for publishing to NPM.
 */
