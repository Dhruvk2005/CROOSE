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



export const createSpace = async (formData: FormData) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.post(
      `${BASE_URL}/api/create_space`,

      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          // Do NOT set Content-Type for FormData, Axios handles it.
        },
      }
    );
    return res.data;
  } catch (err) {


    console.log(err);
    throw err;
  }
};

export const spaceIqCheck = async (data: any) => {
  try {
    const token = localStorage.getItem("token")
    const res = await axiosRequest({
      method: "post",
      url: `${BASE_URL}/api/checkspaceIQincresed`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: data

    })
    return res


  } catch (err) {
    console.log(err)
  }
}

export const getCustomer = async () => {
  try {
    const token = localStorage.getItem("token");
    console.log("Token:", token);

    const res = await axiosRequest({
      method: "get",
      url: `${BASE_URL}/api/getCustomer`,

      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Space List Response:", res);
    return res;

  } catch (err: any) {
    if (err.response) {
      console.error("Error Response Data:", err.response.data);
      console.error("Error Response Status:", err.response.status);
    } else {
      console.error("Error:", err.message);
    }
  }
};



export const getSpaceList = async () => {
  try {
    const token = localStorage.getItem("token");
    console.log("Token:", token);

    const res = await axiosRequest({
      method: "get",
      url: `${BASE_URL}/api/get_space_list`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Space List Response:", res);
    return res;

  } catch (err: any) {
    if (err.response) {
      console.error("Error Response Data:", err.response.data);
      console.error("Error Response Status:", err.response.status);
    } else {
      console.error("Error:", err.message);
    }
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

export const BussinessCategories = async () => {
  try {

    const res = await axiosRequest({
      method: "get",
      url: `${BASE_URL}/api/business_categories`,

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
//https://joincroose.com/croose/api/space
export const GetSpaceId = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Token not found in localStorage");
    }

    const res = await axiosRequest({
      method: "get",
      url: `${BASE_URL}/api/space`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Fetched spaces from API →", res); // Log just the data
    return res; // ✅ Only return the data part
  } catch (err) {
    console.error("Error fetching space data:", err);
    throw err;
  }
};


export const addProduct = async (formData: FormData) => {
  const token = localStorage.getItem("token");
  return await axiosRequest({
    method: "post",
    url: `${BASE_URL}/api/services/163`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    formData,
  });
};
//update product
export const updateProduct = async (id : string ,data: any) => {
  const token = localStorage.getItem("token");
  return await axiosRequest({
    method: 'put',
    url: `${BASE_URL}/api/products/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
 body: data,
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
export const uploadBulkFile = async (file: File, activeTab: 'products' | 'services') => {
  try {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("file", file);

    const url =
      activeTab === 'products'
        ? `http://68.183.108.227/croose/public/index.php/api/products/bulkupload`
        : `http://68.183.108.227/croose/public/index.php/api/services/bulkupload`;

    const res = await axiosRequest({
      method: 'get',
      url,
      headers: {
        Authorization: `Bearer ${token}`,
        // don’t set Content-Type!
      },
      body: formData,
    });

    return res;
  } catch (err: any) {
    console.error(err);
    throw new Error(err?.message || "Failed to upload file.");
  }
};



export const updateServices = async (id : string ,data: any) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axiosRequest({
      method: 'put',
      url: `${BASE_URL}/api/services/${id}`,
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
      url: `${BASE_URL}/api/products`,
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
    const res = await axios.get(`${BASE_URL}/api/services`, {
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