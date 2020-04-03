import { API } from "./API";

export class CharacterAPI extends API {
  async findAllCharacters() {
    const data = {
      query: `{ characters { 
        records {
          id
          name
        }
      } }`
    };

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };

    const response = await this.fetch("graphql", options);

    if (response.ok) {
      const data = await response.json();
      return data.data;
    } else {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
  }
}
