import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export async function postNewOrderRequest(
  apiKey: string,
  encodedPayload: string
): Promise<AxiosResponse> {
  return axios.post('/order/new', null, getRequestConfig(apiKey, encodedPayload))
}

/* private */

function getRequestConfig(apiKey: string, encodedPayload: string): AxiosRequestConfig {
  return {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://api.gemini.com/v1'
        : 'https://api.sandbox.gemini.com/v1',
    headers: {
      'X-GEMINI-APIKEY': apiKey,
      'X-GEMINI-PAYLOAD': encodedPayload,
      'X-GEMINI-SIGNATURE': null as string // ! TODO: once the crypto module is fleshed out create a valid signature here.
    }
  }
}
