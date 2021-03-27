import { createHmac } from 'crypto'

export function base64Encode<T>(payload: T): string {
  const buffer = Buffer.from(JSON.stringify(payload))
  return buffer.toString('base64')
}

export function generateHash(b64PayloadString: string, apiKey: string): string {
  const secret = apiKey
  return createHmac('sha256', secret).update(b64PayloadString).digest('hex')
}
