import api from "./API";

export class AuthAPI {
  async logIn(data) {
    data.strategy = "local";
    return api.post("authentication", data);
  }

  async signUp(data) {
    return api.post("users", data);
  }
}
