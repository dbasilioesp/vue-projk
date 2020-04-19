import { API } from "./API";

export class CharacterAPI extends API {
  async create(data, accessToken) {
    return this.post("characters", data, accessToken);
  }

  async update(data, accessToken) {
    return this.post("characters", data, accessToken);
  }

  async find(accessToken) {
    return this.get("characters", null, accessToken);
  }
}
