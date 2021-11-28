export interface Request {
  request_url: string,
  // To Do: The payload's type is appropriate?
  // Should I set the type AnyJson?
  payload?: Object,
  params?: Object,
  accessToken?: Promise<string> | undefined
}

export interface Response {
  data: JSONValue
}

type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue }
