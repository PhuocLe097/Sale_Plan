
export interface AuthenticationResultModel {
  access_token: string;
  encryptedAccessToken: string;
  expireInSeconds: number;
  userId: string;
}

export interface AuthenticationSSOModel {
  accessToken: string
  identityToken: any
  tokenType: string
  refreshToken: string
  errorDescription: any
  expiresIn: number
  raw: string
  json: Json
  exception: any
  isError: boolean
  errorType: number
  httpStatusCode: number
  httpErrorReason: any
  error: any
}
export interface Json {
  access_token: string
  expires_in: number
  token_type: string
  refresh_token: string
  clientId: string
}
