import api from "./API";

export class ProfileAPI {
  async getProfile(accessToken, userId) {
    return api.get(`users/${userId}`, null, accessToken);
  }
}
