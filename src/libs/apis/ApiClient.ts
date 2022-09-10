import axios from 'axios';
import type { AxiosInstance, HeadersDefaults } from 'axios';

abstract class ApiClient {
  protected readonly instance: AxiosInstance;

  constructor(baseURL: string, headers?: HeadersDefaults) {
    this.instance = axios.create({ baseURL });

    if (headers) {
      this.instance.defaults.headers = { ...headers };
    }
  }
}

export default ApiClient;
