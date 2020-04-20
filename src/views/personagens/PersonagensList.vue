<template>
  <div>
    <div class="header-nav">
      <h1>Personagens</h1>
      <Button @click="newCharacter" aspect="just-icon">+</Button>
    </div>
    <hr />
    <div class="list">
      <div class="item" v-for="character in characters" :key="character.id">
        <div>{{ character.name }} - {{ character.description }}</div>
        <Button @click="editCharacter(character)">Editar</Button>
      </div>
      <div v-if="characters.length === 0">
        Crie seu primeiro personagem clicando no botão "+".
      </div>
    </div>
  </div>
</template>

<script>
import { characterApi } from "@/api";
import { mapState } from "vuex";
import Button from "@/components/Button";

export default {
  components: {
    Button
  },
  data() {
    return {
      characters: []
    };
  },
  computed: {
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
      this.$router.push({ name: "NovoPersonagem" });
    },
    editCharacter(character) {
      console.log(character);
      this.$router.push({
        name: "EditarPersonagem",
        params: { id: character._id }
      });
    },
    async updateList() {
      const result = await characterApi.find(this.accessToken);
      this.characters = result.data;
    }
  }
};
</script>

<style lang="scss" scoped>
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
