<template>
  <FormTheme>
    <form @submit="handleSubmit" ref="form">
      <div>
        <label for="name-id">Nome:</label>
        <input
          type="text"
          name="name"
          autocomplete="off"
          id="name-id"
          v-model="name"
        />
      </div>
      <div>
        <label for="description-id">Descrição:</label>
        <textarea
          name="description"
          id="description-id"
          v-model="description"
          cols="30"
          rows="6"
        ></textarea>
      </div>
      <div class="submit-container">
        <Button type="submit">Criar</Button>
        <Button type="button" aspect="clean" @click="goBack">Voltar</Button>
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
    id: { type: String, default: null }
  },
  data() {
    return {
      name: null,
      description: null
    };
  },
  computed: {
    ...mapState({
      accessToken: state => state.auth.accessToken,
      currentUser: state => state.auth.currentUser
    })
  },
  async created() {
    if (this.id) {
      const char = await characterApi.get(this.id, this.accessToken);
      this.name = char.name;
      this.description = char.description;
    }
  },
  methods: {
    async handleSubmit(event) {
      event.preventDefault();
      const data = {
        name: this.name,
        owner: this.currentUser._id,
        description: this.description,
        figure: undefined
      };

      if (this.id) {
        console.log("updating character");
        await characterApi.update(this.id, data, this.accessToken);
      } else {
        console.log("creating character");
        await characterApi.create(data, this.accessToken);
      }

      this.$router.push({ name: "ListaPersonagens" });
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
