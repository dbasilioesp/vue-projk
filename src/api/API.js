export class API {
  constructor() {
    this.baseUrl = process.env.VUE_APP_API_URL;
  }

  async fetch(uri, options) {
    const response = await fetch(`${this.baseUrl}/${uri}`, options);

    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
  }

  get(uri, params, accessToken = null) {
    const options = this.createOptions({ method: "GET", accessToken });
    return this.fetch(uri, options);
  }

  post(uri, data, accessToken = null) {
    const options = this.createOptions({
      method: "POST",
      data,
      accessToken
    });

    return this.fetch(`${this.baseUrl}/${uri}`, options);
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

  createOptions({ method, data, accessToken }) {
    const options = {
      method: method,
      headers: { "Content-Type": "application/json" }
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    if (accessToken) {
      options.headers.Authorization = `Bearer ${accessToken}`;
    }

    return options;
  }
}
