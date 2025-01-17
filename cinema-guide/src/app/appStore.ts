import { MovieApi } from "./api/movieApi";

const URL = "https://cinemaguide.skillbox.cc";

class AppStore {
    
  api = {
    movieApi: new MovieApi(`${URL}/movie`),
  };
}

export const appStore = new AppStore();
