import { API } from "./API";

export class AuthAPI extends API {
  async logIn(data) {
    data.strategy = "local";

    const response = await this.post("authentication", data);

    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
  }

  async signUp(data) {
    const response = await this.post("users", data);

    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
  }
}
