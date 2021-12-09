export interface Request {
  request_url: string,
  // To Do: The payload's type is appropriate?
  // Should I set the type AnyJson?
  payload?: Object,
  params?: Object,
  accessToken?: Promise<string> | undefined
}

// Todo: Remove the Response Type because the response type is
export interface Response {
  data: JSONValue
  status: number
  statusText: string
}

type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue }
