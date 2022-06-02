<template>
  <dialog open>
    <slot />
  </dialog>
</template>

<script>
</script>

<style scoped>
dialog {
  margin: 0;
  position: fixed;
  top: 20vh;
  left: 30%;
  width: 40%;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border: 1px solid grey;
}
</style>
