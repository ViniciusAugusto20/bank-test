import axios, { AxiosInstance } from 'axios';
import { BASE_URL } from '../../config/env';

type OnRejectedFunction = (error?: any) => any;
type OnSuccessFunction = (value: any) => any | Promise<any>;

class ApiManager {
  private api: AxiosInstance;

  private onSuccess?: OnSuccessFunction;

  private onReject?: OnRejectedFunction;

  constructor() {
    this.api = axios.create({
      baseURL: BASE_URL,
      headers: {
        origem: 'portal',
      },
    });

    this.onSuccess = undefined;
    this.onReject = undefined;
  }

  public onRejected(cb: OnRejectedFunction): void {
    this.onReject = cb;
  }

  public onSuccessed(cb: OnSuccessFunction): void {
    this.onSuccess = cb;
  }

  public getApiInstance(): AxiosInstance {
    this.api.interceptors.response.use(
      (value) => {
        if (this.onSuccess) {
          return this.onSuccess(value);
        }

        return value;
      },
      (error) => {
        if (this.onReject) {
          this.onReject(error);
        }

        return Promise.reject(error);
      },
    );

    return this.api;
  }
}

const apiManager = new ApiManager();
const api = apiManager.getApiInstance();

export { apiManager };

export default api;
