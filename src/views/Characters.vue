<template>
  <div class="container">
    <div class="content">
      <h1>Characters</h1>
      <div class="list" v-if="listEnabled">
        <div class="item" v-for="character in characters" :key="character.id">
          <div>{{ character.name }} - {{ character.description }}</div>
          <button @click="editCharacter(character)">Editar</button>
        </div>
        <hr />
        <button type="button" @click="newCharacter">Novo Personagem</button>
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
import FormCharacter from "@/components/forms/FormCharacter";

export default {
  components: {
    FormCharacter
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
      const result = await characterApi.findAll();
      this.characters = result.characters.records;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex: 1;
  justify-content: center;
  max-width: 310px;
  width: 100%;
  margin: auto;
  padding-top: 0px;
  padding-bottom: 8vh;
}
.content {
  max-width: 420px;
  width: 100%;
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