<template>
  <FormTheme>
    <form @submit="handleSubmit" ref="form">
      <input type="hidden" name="id" v-model="myId" />
      <div>
        <label for="name-id">Nome:</label>
        <input
          type="text"
          name="name"
          autocomplete="off"
          id="name-id"
          v-model="myName"
        />
      </div>
      <div>
        <label for="description-id">Descrição:</label>
        <textarea
          name="description"
          id="description-id"
          v-model="myDescription"
          cols="30"
          rows="6"
        ></textarea>
      </div>
      <div class="submit-container">
        <Button class="" type="submit">Criar</Button>
      </div>
    </form>
  </FormTheme>
</template>

<script>
import { characterApi } from "@/api";
import { mapState } from "vuex";
import Button from "@/components/Button";
import FormTheme from "@/components/forms/FormTheme";

export default {
  components: {
    FormTheme,
    Button
  },
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
  computed: {
    ...mapState({
      accessToken: state => state.auth.accessToken
    })
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
        character = await characterApi.update(data, this.accessToken);
      } else {
        character = await characterApi.create(data, this.accessToken);
      }

      this.$emit("onFinish", character);
    }
  }
};
</script>
