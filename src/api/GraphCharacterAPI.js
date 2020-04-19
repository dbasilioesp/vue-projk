import { API } from "./API";

export class CharacterAPI extends API {
  async findAll() {
    const data = {
      query: `{ characters { 
        records {
          id
          name,
          description
        }
      } }`
    };

    return this.postGraphQL(data);
  }

  async create({ name, description }) {
    const data = {
      query: ` 
      mutation ($name: String!, $description: String!) {
        createCharacter(name: $name, description: $description) {
            id
            name
            description
        } 
      }`,
      variables: { name, description }
    };

    return this.postGraphQL(data);
  }

  async update({ id, name, description }) {
    const data = {
      query: ` 
      mutation ($id: String!, $name: String!, $description: String!) {
        updateCharacter(id: $id, name: $name, description: $description) {
            id
            name
            description
        } 
      }`,
      variables: { id, name, description }
    };

    return this.postGraphQL(data);
  }
}
