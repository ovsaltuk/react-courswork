import { IMovie } from "../models/IMovie";
import { Api } from "./api";

interface IMovieFilters {
  count?: number,
  page?: number,
  title?: string,
  genre?: string
}

export class MovieApi extends Api {
  getRandomMovieAsync = (): Promise<IMovie> => {
    return Api.getDataAsync<IMovie>(`${this.url}/random`);
  };

  getTopTenMoviesAsync = async (): Promise<IMovie[]> => {
    return Api.getDataAsync<IMovie[]>(`${this.url}/top10`);
  };

  getGenresAsync = async (): Promise<string[]> => {
    return Api.getDataAsync<string[]>(`${this.url}/genres`);
  };

  getMovieByIdAsync = async (movieId: number): Promise<string[]> => {
    return Api.getDataAsync<string[]>(`${this.url}/${movieId}`);
  };

  searchByFiltersAsync = async (filters: IMovieFilters): Promise<IMovie[]> => {
    const params = new URLSearchParams(
      Object.entries(filters)
        .filter(([_, value]) => value !== undefined && value !== null)
        .map(([key, value]) => [key, value.toString()])
    );
  
    const url = params.toString() ? `${this.url}?${params}` : `${this.url}`;
  
    return Api.getDataAsync<IMovie[]>(url);
  }
}
