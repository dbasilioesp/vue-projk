const baseUrl = process.env.VUE_APP_API_URL;

export default class API {
  static async fetch(uri, options) {
    const response = await fetch(`${baseUrl}/${uri}`, options);

    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
  }

  static get(uri, params, accessToken = null) {
    const options = this.createOptions({ method: "GET", accessToken });
    return this.fetch(uri, options);
  }

  static post(uri, data, accessToken = null) {
    const options = this.createOptions({
      method: "POST",
      data,
      accessToken
    });

    return this.fetch(uri, options);
  }

  static patch(uri, id, data, accessToken) {
    this.clean(data);

    const options = this.createOptions({
      method: "PATCH",
      data,
      accessToken
    });

    return this.fetch(`${uri}/${id}`, options);
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

  static clean(obj) {
    Object.keys(obj).forEach(key => {
      if (obj[key] === undefined || obj[key] === null) {
        delete obj[key];
      }
    });
  }

  static createOptions({ method, data, accessToken }) {
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
