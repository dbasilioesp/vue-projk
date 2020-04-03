<template>
  <div class="container">
    <div class="content">
      <h1>Characters</h1>
      <ol class="list">
        <li v-for="character in characters" :key="character.id">{{ character.name }}</li>
      </ol>
    </div>
  </div>
</template>

<script>
import { characterAPI } from "@/api";

export default {
  data() {
    return {
      characters: []
    };
  },
  async mounted() {
    const result = await characterAPI.findAllCharacters();
    console.log(result);
    this.characters = result.characters.records;
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex: 1;
  justify-content: center;
  padding-top: calc(5vh + 60px);
}
.content {
  max-width: 420px;
  width: 100%;
}
.list {
  text-align: left;
  margin-top: 40px;
  li {
    margin-bottom: 15px;
    font-size: 1.375rem;
  }
}
</style>