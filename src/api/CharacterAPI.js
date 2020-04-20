import api from "./API";

export class CharacterAPI {
  async create(data, accessToken) {
    return api.post("characters", data, accessToken);
  }

  async update(id, data, accessToken) {
    return api.patch("characters", id, data, accessToken);
  }

  async get(id, accessToken) {
    return api.get(`characters/${id}`, null, accessToken);
  }

  async find(accessToken) {
    return api.get("characters", null, accessToken);
  }
}
