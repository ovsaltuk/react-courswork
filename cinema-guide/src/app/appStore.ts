import { Api } from "./api/api";

const url = "https://cinemaguide.skillbox.cc";

class AppStore {
  api = new Api(url);
}

export const appStore = new AppStore();
