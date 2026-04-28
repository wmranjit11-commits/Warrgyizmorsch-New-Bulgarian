import axios, { AxiosInstance, AxiosResponse } from "axios";

// export const API_BASE = "http://127.0.0.1:8000";
export const API_BASE = "https://www.wtsvisa.com";

export const http = axios.create({
  baseURL: `${API_BASE}/api`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// -------- API Service Wrapper ----------
export const ApiService = {
  get: async (endpoint, params = {}) => {
    try {
      // ✅ if endpoint already has ?query= in it, don't wrap params
      if (typeof endpoint === "string" && endpoint.includes("?")) {
        const res = await http.get(endpoint); // no config object passed
        return res.data;
      }

      // ✅ always pass a valid object
      const res = await http.get(endpoint, { params: params || {} });
      return res.data;
    } catch (error) {
      console.error("GET Error:", error);
      throw error;
    }
  },

  post: async (endpoint, payload, config = {}) => {
    try {
      const res = await http.post(endpoint, payload, config || {});
      return res.data;
    } catch (error) {
      console.error("POST Error:", error);
      throw error;
    }
  },

  put: async (endpoint, payload, config = {}) => {
    try {
      const res = await http.put(endpoint, payload, config || {});
      return res.data;
    } catch (error) {
      console.error("PUT Error:", error);
      throw error;
    }
  },

  delete: async (endpoint, config = {}) => {
    try {
      const res = await http.delete(endpoint, config || {});
      return res.data;
    } catch (error) {
      console.error("DELETE Error:", error);
      throw error;
    }
  },
};