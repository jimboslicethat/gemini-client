import logger from './logger'

import { createBuyOrderPayload, encodePayload } from './payloads'
import * as api from './api'

export async function placeBuyOrder(apiKey: string) {
  // TODO: This is static right now for manual e22 testing. Still very much WIP.
  const unencodedPayload = createBuyOrderPayload('btcusd', 0.01, '3633.00')
  logger.info('Executing by order using payload:', unencodedPayload)
  const encodedPayload = encodePayload(unencodedPayload)

  await api.createNewOrder({ encodedPayload, apiKey })
}
