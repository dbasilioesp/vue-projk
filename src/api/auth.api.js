export class AuthAPI {
  async logIn(data) {
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      credentials: "omit"
    };

    const response = await fetch("http://localhost:3000/auth/login", options);

    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`${response.status} - ${response.statusText}`)
    }
  }
}