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
    const config: any = {
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



export const addProduct = async (data: any) => {
  try {
    const token = localStorage.getItem("token")
    const res = await axiosRequest({
      method: "post",
      url: `${BASE_URL}/api/products`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: data,
    });
    return res


  } catch (err:any) {
    console.log(err)
    throw new Error(err?.message || "Failed to add product.");
  }
}

export const addServices = async (data: any) => {
  try {
    let token = localStorage.getItem("token")
    const res = await axiosRequest({
      method: 'post',
      url: `${BASE_URL}/api/services`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: data,

    })
    return res
  } catch (err:any) {
    console.log(err)
    throw new Error(err?.message || "Failed to add product.");

  }
}

export const getAllProducts = async () => {
  try {
    const token = localStorage.getItem("token")
    const res = await axiosRequest({
      method: "get",
      url: `${BASE_URL}/api/products/products_list`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res
  }
  catch (err) {
    console.log(err)
  } return { data: [] };

}
export const getAllServices = async () => {
  try {
    let token = localStorage.getItem("token")
    const res = await axios.get(`${BASE_URL}/api/services/get_services`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res.data
  } catch (err) {
    console.log(err)
  } return { data: [] };

}
export const verifyToken = async () => {
  try {
    let token = localStorage.getItem("token")
    let res = await axiosRequest({


      method: "get",
      url: `${BASE_URL}/api/manual-token-check`,
      headers: {

        Authorization: `Bearer ${token}`


      },

    })
    return res

  } catch (err) {
    return {
      err: { status: true }
    }

  }
}

export const loginApi = async (data: any) => {
  try {
    let res = await axiosRequest({

      method: "post",
      url: `${BASE_URL}/api/login`,
      headers: {},
      body: data,
    })

    localStorage.setItem("token", res.token)
    console.log(res)

    return res
  }
  catch (err) {
    console.log(err)
  }
}

export const registerApi = async (data: any) => {
  try {
    console.log(data)
    let res = await axiosRequest({

      method: "post",
      url: `${BASE_URL}/api/register`,
      headers: {},
      body: data,
    })
    // let json = await res.json()
    // console.log(json)

    return res
  }
  catch (err) {
    console.log(err)
  }
}

export const countryApi = async () => {
  try {
    let res = await axiosRequest({
      method: "get",
      url: `${BASE_URL}/api/countries`,
      headers: {},

    })

    return res
  }
  catch (err) {
    console.log(err)
  }
}