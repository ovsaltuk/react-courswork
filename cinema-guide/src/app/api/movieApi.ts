import { IMovie } from "../models/IMovie";
import { Api } from "./api";

export class MovieApi extends Api {
  getRandomMovieAsync = (): Promise<IMovie> => {
    return Api.getDataAsync<IMovie>(`${this.getBaseUrl()}/random`);
  };

  getTopTenMoviesAsync = async (): Promise<IMovie[]> => {
    return Api.getDataAsync<IMovie[]>(`${this.getBaseUrl()}/top10`);
  };

  getGenresAsync = async (): Promise<string[]> => {
    return Api.getDataAsync<string[]>(`${this.getBaseUrl()}/genres`);
  };

  getMovieByIdAsync = async (movieId: number): Promise<string[]> => {
    return Api.getDataAsync<string[]>(`${this.getBaseUrl()}/${movieId}`);
  };

//   searchByTitleAsync = async (title: string): Promise<IMovie[]> => {
//     return this.
//   }
}
