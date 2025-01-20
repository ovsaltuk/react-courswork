import axios from "axios";

export class Api {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  protected get url(): string {
    return this.baseUrl;
  }

  static getDataAsync = async <U>(url: string): Promise<U> => {
    const response = await axios.get<U>(url);
    return response.data;
  };
}


