import { Api } from "./api/api";

const URL = "https://cinemaguide.skillbox.cc";

class AppStore {
  api = new Api(URL);
}

export const appStore = new AppStore();
