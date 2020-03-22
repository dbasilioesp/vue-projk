export class API {

  constructor() {
    this.baseUrl = process.env.VUE_APP_API_URL;
  }

  fetch(uri, options) {
    return fetch(`${this.baseUrl}/${uri}`, options);
  }
}