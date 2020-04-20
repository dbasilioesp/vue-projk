<template>
  <button :type="type" :class="aspect" @click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "button"
    },
    aspect: {
      type: String,
      validator: val => ["clean", "just-icon"].includes(val)
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
  border: 3px solid transparent;
  cursor: pointer;
  color: var(--button-color);
  background-color: var(--button-bg-color);

  &:hover {
    border: 3px solid var(--sun-color);
  }

  &.clean {
    background: transparent;
    color: var(--button-bg-color);
  }

  &.just-icon {
    padding: 0 15px;
  }
}
</style>
