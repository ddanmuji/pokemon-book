import axios, { AxiosInstance } from 'axios';

abstract class ApiClient {
  protected readonly instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL });
  }
}

export default ApiClient;
