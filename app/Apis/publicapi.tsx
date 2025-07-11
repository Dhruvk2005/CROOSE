// utils/axiosRequest.ts
import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface AxiosOptions {
  method: 'get' | 'post' | 'put' | 'delete';
  url: string;
  headers?: any;
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
    const config: AxiosRequestConfig = {
      method,
      url,
      headers: {
        ...headers,
        ...(formData ? {} : { 'Content-Type': 'application/json' }),
      },
      data: formData || body,
    };

    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || error.message || 'Something went wrong'
    );
  }
};

export const appointmentList = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await axiosRequest({
      method: "get",
      url: `${BASE_URL}/api/appointments`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const updateAppointmentStatus = async (id: number, status: string) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axiosRequest({
      method: "post",
      url: `${BASE_URL}/api/appointments_status_update`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        id,
        status,
      },
    });
    return res;
  } catch (err) {
    console.error("Error updating appointment status:", err);
    throw err;
  }
};

export const addProduct = async (formData: FormData) => {
  const token = localStorage.getItem("token");
  return await axiosRequest({
    method: "post",
    url: `${BASE_URL}/api/products`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    formData,
  });
};

export const addServices = async (data: any) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axiosRequest({
      method: 'post',
      url: `${BASE_URL}/api/services`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });
    return res;
  } catch (err: any) {
    console.log(err);
    throw new Error(err?.message || "Failed to add service.");
  }
};

export const getAllProducts = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await axiosRequest({
      method: "get",
      url: `${BASE_URL}/api/products/products_list`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
  return { data: [] };
};

export const getAllServices = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${BASE_URL}/api/services/get_services`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
  return { data: [] };
};

export const verifyToken = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await axiosRequest({
      method: "get",
      url: `${BASE_URL}/api/manual-token-check`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (err) {
    return {
      err: { status: true },
    };
  }
};

export const loginApi = async (data: any) => {
  try {
    const res = await axiosRequest({
      method: "post",
      url: `${BASE_URL}/api/login`,
      headers: {},
      body: data,
    });
    localStorage.setItem("token", res.token);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const logoutapi = async (data: any) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axiosRequest({
      method: "post",
      url: `${BASE_URL}/api/logout`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const registerApi = async (data: any) => {
  try {
    const res = await axiosRequest({
      method: "post",
      url: `${BASE_URL}/api/register`,
      headers: {},
      body: data,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const countryApi = async () => {
  try {
    const res = await axiosRequest({
      method: "get",
      url: `${BASE_URL}/api/countries`,
      headers: {},
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};