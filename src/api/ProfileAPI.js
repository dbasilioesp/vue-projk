import { API } from "./API";

export class ProfileAPI extends API {
  async getProfile(accessToken, userId) {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    };

    const response = await this.fetch(`users/${userId}`, options);

    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
  }
}
