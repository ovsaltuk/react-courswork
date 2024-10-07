import axios from "axios";
import { HOST } from "../../app/api/movieApi";
import { IMovie } from "../../app/models/IMovie";

export class BannerStore {
  getMovie = async (): Promise<IMovie> => {
    const response = await axios.get<IMovie>(`${HOST}/movie/random`);
    return response.data
    
  };
}
