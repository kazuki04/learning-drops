import axios from 'axios';

export interface Request {
  request_url: string,
  payload?: Section,
  accessToken?: Promise<string> | undefined
}

export interface Section {
  title: string
  user_id: string
} 

const getRequest  = (prop: Request) => {
  
}

export const postRequest = async (prop: Request) => {
  const baseUrl: string = "http://localhost:8000/api"
  console.log(JSON.stringify(prop.payload))
  try {
    const res =  await axios.post(baseUrl + prop.request_url, JSON.stringify(prop.payload),{
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${prop.accessToken}`,
      }
    })
    return res;
  } catch(e) {
    console.log(e.message);
  }
}
