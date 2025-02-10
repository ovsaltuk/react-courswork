import axios from "axios";
import { IMovie } from "../models/IMovie";
import { Api } from "./api";

interface IMovieFilters {
  count?: number;
  page?: number;
  title?: string;
  genre?: string;
}

interface ILoginResponse {
  data: {
    result: boolean;
  };
}

type TRegistrationResponse = ILoginResponse;

interface IRegistrationRequestProps {
  email: string;
  password: string;
  name?: string;
  surname?: string;
}

export class MovieApi extends Api {
  getRandomMovieAsync = (): Promise<IMovie> => {
    return Api.getDataAsync<IMovie>(`${this.url}/movie/random`);
  };

  getTopTenMoviesAsync = async (): Promise<IMovie[]> => {
    return Api.getDataAsync<IMovie[]>(`${this.url}/movie/top10`);
  };

  getGenresAsync = async (): Promise<string[]> => {
    return Api.getDataAsync<string[]>(`${this.url}/movie/genres`);
  };

  getMovieByIdAsync = async (movieId: number): Promise<IMovie> => {
    return Api.getDataAsync<IMovie>(`${this.url}/movie/${movieId}`);
  };

  searchByFiltersAsync = async (filters: IMovieFilters): Promise<IMovie[]> => {
    const params = new URLSearchParams(
      Object.entries(filters)
        .filter(([_, value]) => value !== undefined && value !== null)
        .map(([key, value]) => [key, value.toString()])
    );

    const url = params.toString()
      ? `${this.url}/movie?${params}`
      : `${this.url}`;

    return Api.getDataAsync<IMovie[]>(url);
  };

  registartionAsync = async (
    request: IRegistrationRequestProps
  ): Promise<TRegistrationResponse> => {
    return axios.post(`${this.url}/user`, { ...request });
  };

  loginAsync = async (
    email: string,
    password: string
  ): Promise<ILoginResponse> => {
    return axios.post(
      `${this.url}/auth/login`,
      { email, password },
      { withCredentials: true }
    );
  };
}
