import axios, { AxiosRequestConfig } from "axios";

export const BASE_URL = "https://api2.myauto.ge/ka";
export const MANUFACTURERS_ENDPOINT =
  "https://static.my.ge/myauto/js/mans.json";

export async function request<T>(
  endpoint?: string,
  options: AxiosRequestConfig = {},
  mansEndpoint: boolean = false
): Promise<T> {
  const url = `${mansEndpoint ? MANUFACTURERS_ENDPOINT : BASE_URL + endpoint}`;

  try {
    const response = await axios({
      url,
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (response.status === 204) {
      return {} as T;
    }

    return response.data as T;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const errorBody = JSON.stringify(error.response.data);
      throw new Error(
        `API Error: ${error.response.status} ${error.response.statusText} - ${errorBody}`
      );
    }
    throw error;
  }
}
