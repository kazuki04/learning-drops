export interface Request {
  request_url: string,
  // To Do: The payload's type is appropriate?
  // Should I set the type AnyJson?
  payload?: Object,
  accessToken?: Promise<string> | undefined
}

export interface Response {
  data: AnyJson
}

type AnyJson =  boolean | number | string | null | JsonArray | JsonMap;
interface JsonMap {  [key: string]: AnyJson; }
interface JsonArray extends Array<AnyJson> {}
