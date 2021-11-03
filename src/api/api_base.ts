import axios from 'axios';
import { Request } from './types'

const baseUrl: string = "http://localhost:8000/api"

export const getRequest  = async (prop: Request) => {
  try {
    const res = await axios.get(baseUrl + prop.request_url,{
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${prop.accessToken}`,
      }
    })
    return res;
  } catch(e) {
    console.log(e.message)
  }
}

export const postRequest = async (prop: Request) => {
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
