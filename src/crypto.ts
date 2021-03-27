export function base64Encode<T>(payload: T): string {
  const buffer = Buffer.from(JSON.stringify(payload))
  return buffer.toString('base64')
}

export function generateHashedSignature(payloadString: string, apiKey: string): string {
  return ''
}
