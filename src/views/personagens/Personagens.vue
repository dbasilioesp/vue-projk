<template>
  <div class="container">
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

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
</style>
