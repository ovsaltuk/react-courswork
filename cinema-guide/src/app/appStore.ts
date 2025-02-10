import { MovieApi } from "./api/movieApi";

const URL = "https://cinemaguide.skillbox.cc";

class AppStore {
    
  api = {
    movieApi: new MovieApi(`${URL}`),
  };
}

export const appStore = new AppStore();
