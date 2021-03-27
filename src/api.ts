import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

import { base64Encode, generateHash } from './crypto'
import { ExternalOrderPayload } from './types'

export async function postNewOrderRequest(
  apiKey: string,
  payload: ExternalOrderPayload
): Promise<AxiosResponse> {
  return axios.post('/order/new', null, getRequestConfig(apiKey, payload))
}

/* private */

function getRequestConfig(apiKey: string, payload: ExternalOrderPayload): AxiosRequestConfig {
  const encodedPayload = base64Encode(payload)
  const hashedSignature = generateHash(encodedPayload, apiKey)

  return {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://api.gemini.com/v1'
        : 'https://api.sandbox.gemini.com/v1',
    headers: {
      'X-GEMINI-APIKEY': apiKey,
      'X-GEMINI-PAYLOAD': encodedPayload,
      'X-GEMINI-SIGNATURE': hashedSignature
    }
  }
}
