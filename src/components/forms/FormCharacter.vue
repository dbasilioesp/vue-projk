<template>
  <form @submit="handleSubmit" ref="form">
    <input type="hidden" name="id" v-model="myId" />
    <div>
      <label for="name-id">Nome:</label>
      <input type="text" name="name" id="name-id" v-model="myName" />
    </div>
    <div>
      <label for="description-id">Descrição:</label>
      <textarea name="description" id="description-id" v-model="myDescription" cols="30" rows="8"></textarea>
    </div>
    <div>
      <button type="submit">Criar</button>
    </div>
  </form>
</template>

<script>
import { characterApi } from "@/api";

export default {
  props: {
    id: { type: String, default: null },
    name: { type: String, default: null },
    description: { type: String, default: null }
  },
  data() {
    return {
      myId: null,
      myName: null,
      myDescription: null
    };
  },
  created() {
    this.myId = this.id;
    this.myName = this.name;
    this.myDescription = this.description;
  },
  methods: {
    async handleSubmit(event) {
      event.preventDefault();
      const data = {
        id: this.myId,
        name: this.myName,
        description: this.myDescription
      };

      let character;

      if (this.myId) {
        character = await characterApi.update(data);
      } else {
        character = await characterApi.create(data);
      }

      this.$emit("onFinish", character);
    }
  }
};
</script>

<style lang="css" scoped>
form {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
}

label {
  display: block;
  text-align: left;
  margin-bottom: 5px;
  font-size: 18px;
}

input {
  margin-bottom: 20px;
}
</style>