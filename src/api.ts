import axios, { AxiosResponse } from 'axios'

import { OrderParams } from './types'

const apiInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://api.gemini.com/v1'
      : 'https://api.sandbox.gemini.com/v1',
  // TODO: make timeout configurable
  timeout: 5000
  // headers: {'X-Custom-Header': 'foobar'}
})

export async function createNewOrder({
  encodedPayload,
  apiKey
}: OrderParams): Promise<AxiosResponse> {
  return apiInstance.post('/order/new', null, {
    headers: {
      'X-GEMINI-APIKEY': apiKey,
      'X-GEMINI-PAYLOAD': encodedPayload,
      'X-GEMINI-SIGNATURE': 'signature' // TODO: what should the signature be?
    }
  })
}
