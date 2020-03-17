export class ProfileAPI {
  async getProfile(accessToken) {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    };

    const response = await fetch("http://localhost:3000/profile", options);

    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`${response.status} - ${response.statusText}`)
    }

  }
}