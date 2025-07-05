// utils/axiosRequest.ts
import axios, { AxiosRequestConfig, Method } from 'axios';
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

export interface AxiosOptions {
  method: Method;
  url: string;
  headers?: Record<string, string>;
  body?: any;
  formData?: FormData;
}

export const axiosRequest = async ({
  method,
  url,
  headers = {},
  body,
  formData,
}: AxiosOptions): Promise<any> => {
  try {
    const config:any = {
      method,
      url,
      headers,
      data: formData || body,
    };

    // If sending FormData, let Axios set the correct headers
    if (formData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    } else {
      config.headers['Content-Type'] = 'application/json';
    }

    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    // Pass error to the calling function to show via Snackbar
    throw new Error(error?.response?.data?.message || error.message || 'Something went wrong');
  }
};


 export const  loginApi = async(data:any)=>{
    try{
       let res = await axiosRequest( {method:"post",
  url:`${BASE_URL}/api/auth/login`,
  headers:{},
  body:data,
    })

    return res
    }
    catch(err){
        console.log(err)
    }
 }

  export const  registerApi = async(data:any)=>{
    try{
       let res = await fetch(  `${BASE_URL}/api/register`,{method:"Post",body:JSON.stringify(data)})
       let json = await res.json()
       console.log(json)

    return json
    }
    catch(err){
        console.log(err)
    }
 }

   export const  countryApi = async()=>{
    try{
       let res = await axiosRequest( {method:"get",
  url:`${BASE_URL}/api/countries`,
  headers:{},
 
    })

    return res
    }
    catch(err){
        console.log(err)
    }
 }