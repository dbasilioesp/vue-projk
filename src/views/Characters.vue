<template>
  <div class="container">
    <div class="content">
      <div class="header-nav">
        <h1>Personagens</h1>
        <Button v-if="!formEnabled" @click="newCharacter">+</Button>
      </div>
      <hr />
      <div class="list" v-if="listEnabled">
        <div class="item" v-for="character in characters" :key="character.id">
          <div>{{ character.name }} - {{ character.description }}</div>
          <Button @click="editCharacter(character)">Editar</Button>
        </div>
        <div v-if="characters.length === 0">
          Crie seu primeiro personagem clicando no botão "+".
        </div>
      </div>
      <FormCharacter
        v-if="formEnabled"
        :id="formId"
        :name="formName"
        :description="formDescription"
        @onFinish="updateList"
      />
    </div>
  </div>
</template>

<script>
import { characterApi } from "@/api";
import { mapState } from "vuex";
import FormCharacter from "@/components/forms/FormCharacter";
import Button from "@/components/Button";

export default {
  components: {
    FormCharacter,
    Button
  },
  data() {
    return {
      characters: [],
      formId: null,
      formName: null,
      formDescription: null,
      listEnabled: true,
      formEnabled: false
    };
  },
  computed: {
    title() {
      return this.formEnabled ? "Criar personagem" : "Personagens";
    },
    ...mapState({
      accessToken: state => state.auth.accessToken,
      currentUser: state => state.auth.currentUser
    })
  },
  async mounted() {
    return this.updateList();
  },
  methods: {
    newCharacter() {
      this.listEnabled = false;
      this.formEnabled = true;
      this.formId = null;
      this.formName = null;
      this.formDescription = null;
    },
    editCharacter(character) {
      this.listEnabled = false;
      this.formEnabled = true;
      this.formId = character.id;
      this.formName = character.name;
      this.formDescription = character.description;
    },
    async updateList() {
      this.formEnabled = false;
      this.listEnabled = true;
      const result = await characterApi.find(this.accessToken);
      this.characters = result.data;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex: 1;
  justify-content: center;
  width: 100%;
  margin: auto;
  padding-top: 0px;
  padding-bottom: 8vh;
}

.content {
  width: 100%;
}

.header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 0;
  }
}

.list {
  text-align: left;
  margin-top: 40px;
  .item {
    margin-bottom: 15px;
    font-size: 1.125rem;
    padding: 15px;
    border-radius: 3px;
    border: 1px solid #363b3c;
    display: flex;
    justify-content: space-between;
  }
}
</style>
