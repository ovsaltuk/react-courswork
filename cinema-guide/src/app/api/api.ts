import axios from "axios";
import { IMovie } from "../models/IMovie";

export class Api {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  static getDataAsync = async <U>(url: string): Promise<U> => {
    const response = await axios.get<U>(url);
    return response.data;
  };

  getRandomMovieAsync = (): Promise<IMovie> => {
    return Api.getDataAsync<IMovie>(`${this.baseUrl}/movie/random`);
  };

  getTopTenMoviesAsync = async (): Promise<IMovie[]> => {
    return Api.getDataAsync<IMovie[]>(`${this.baseUrl}/movie/top10`);
  };
}
