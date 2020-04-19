<template>
  <button :type="type" @click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 20px;
  padding: 0 25px;
  border-radius: 4px;
  border: 1px solid transparent;
  cursor: pointer;
  color: var(--button-color);
  background-color: var(--button-bg-color);

  &:hover {
    border: 3px solid var(--sun-color);
  }
}
</style>
