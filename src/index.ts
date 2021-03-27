import logger from './logger'

import { createBuyOrderPayload, encodePayload } from './payloads'
import * as api from './api'

export default async function main() {
  const unencodedPayload = createBuyOrderPayload('btcusd', '0.01', '3633.00')
  logger.info('Executing by order using payload:', unencodedPayload)
  const encodedPayload = encodePayload(unencodedPayload)

  await api.createNewOrder({ encodedPayload, apiKey: 'get-this-from-env' })
}

;(async () => {
  try {
    const res = await main()
    console.log(res)
  } catch (e) {
    console.error(e)
  }
})()
