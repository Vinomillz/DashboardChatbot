import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

type ApiError = {
  message: string;
  status: string | number;
  statusCode: number;
};

type ApiSuccessResponse<T> = {
  status: 'success';
  data: T;
  message: string;
  error: null;
};

const apiInstance = axios.create({
  baseURL: 'https://logistic-chatbot.onrender.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const httpRequest = async <T>(
  url: string,
  method: Method,
  data?: Record<string, unknown>,
  config?: AxiosRequestConfig
): Promise<{ data?: ApiSuccessResponse<T>; error?: ApiError }> => {
  try {
    const response: AxiosResponse<T> = await apiInstance.request<T>({
      url,
      method,
      data,
      ...config,
    });

    return { data: response.data as ApiSuccessResponse<T> };
  } catch (error) {
    let apiError: ApiError | undefined;

    if (axios.isAxiosError(error) && error.response) {
      apiError = {
        message: error.response.data.message,
        status: error.response.status,
        statusCode: error.response.status,
      } as ApiError;
    } else {
      if (error instanceof Error) {
        apiError = {
          message: error.message,
          status: 'Error',
          statusCode: error.message === 'Network Error' ? 500 : 400,
        };
      }
    }

    return { error: apiError };
  }
};
