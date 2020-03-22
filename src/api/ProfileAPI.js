import { API } from "./API";

export class ProfileAPI extends API {
  async getProfile(accessToken) {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    };

    const response = this.fetch("profile", options);

    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`${response.status} - ${response.statusText}`)
    }

  }
}