export interface Request {
  request_url: string,
  payload?: Section,
  accessToken?: Promise<string> | undefined
}

export interface Section {
  title: string
  user_id: string
} 
