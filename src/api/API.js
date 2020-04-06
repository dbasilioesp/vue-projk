export class API {
  constructor() {
    this.baseUrl = process.env.VUE_APP_API_URL;
  }

  fetch(uri, options) {
    return fetch(`${this.baseUrl}/${uri}`, options);
  }

  post(uri, data) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };

    return fetch(`${this.baseUrl}/${uri}`, options);
  }

  async postGraphQL(data) {
    const response = await this.post("graphql", data);

    if (response.ok) {
      const data = await response.json();
      return data.data;
    } else {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
  }
}
