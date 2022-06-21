<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="setAge">
      Change Age
    </button>
  </section>
</template>

<script>
// import { ref } from 'vue'; // Work with values
import { reactive } from 'vue'; // Works with objects

export default {
  setup() {
    // const user = ref({
    const user = reactive({
      name: 'Dmitrii',
      age: 40,
    });

    const setAge = () => {
      user.age = 43;
    };
    // setTimeout(() => {
    //   // with refs
    //   // user.value.userName = 'Dmitrii Genrikh';
    //   // user.value.userAge = 41;

    //   // With reactive
    //   user.name = 'Dmitrii Genrikh';
    //   user.age = 41;
    // }, 2000);

    return { user, setAge };
  },
};
// Initial setup:
// export default {
//   setup() {
//     const userName = ref('Dmitrii');

//     setTimeout(() => {
//       userName.value = 'Dmitrii Genrikh';
//     }, 2000);

//     return { userName };
//   },

//   // data() {
//   //   return {
//   //     userName: 'Maximilian',
//   //   };
//   // },
// };
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
