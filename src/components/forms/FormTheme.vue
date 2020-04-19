<template>
  <div class="form-theme">
    <slot />
  </div>
</template>

<style lang="scss">
.form-theme {
  form {
    margin: 0 auto;
    text-align: left;
  }

  label {
    display: block;
    text-align: left;
    margin-bottom: 5px;
  }

  input {
    margin-bottom: 8px;
  }

  textarea {
    border: 1px solid #cbccc6;
    border-radius: 4px;
    width: 100%;
    padding: 15px;
    font-size: 18px;
    font-family: var(--font-primary);
  }

  input[type="text"],
  input[type="password"] {
    height: 40px;
    font-size: 18px;
    border: 1px solid #cbccc6;
    border-radius: 4px;
    padding: 0 15px;
  }

  .submit-container {
    margin-top: 20px;
    width: 100%;

    .submit-button {
      width: 100%;
    }

    a {
      display: block;
      margin-top: 10px;
      color: var(--paper-color);
      text-decoration: none;

      &:hover {
        color: var(--sun-color);
      }
    }
  }
}
</style>
