<template>
  <h1 :class="csize">
    <slot />
  </h1>
</template>

<script>
export default {
  props: {
    size: {
      type: String
    }
  },
  data() {
    return {
      csize: "default"
    };
  },
  created() {
    if (this.size === "-") {
      this.csize = "minor1";
    }
    if (this.size === "+") {
      this.csize = "major1";
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 42px;
  font-weight: bold;
  color: var(--title-color);
  &.minor1 {
    font-size: 36px;
  }
  &.major1 {
    font-size: 50px;
  }
}
</style>
